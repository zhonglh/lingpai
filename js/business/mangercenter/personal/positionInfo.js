$(function(){
		
	var laydate = layui.laydate;
	//编辑求职信息的入职时间
	laydate.render({
	  elem: '.joinTime'
	});
	//编辑求职信息的离职时间
	laydate.render({
	  elem: '.leaveTime'
	});
	//编辑求职信息的毕业时间
	laydate.render({
	  elem: '#time'
	});

	//求职信息表单提交
	var jobWantedInfoForm = $('#jobWantedInfoForm');
	$("#submitBtn").click(function(){
		if(jobWantedInfoForm.valid()){
			var formData = form2Obj(jobWantedInfoForm);
			formData = dataFormat(formData);
			submitAjaxHandler(getServerUrl().personalMangercenter.saveResumeInfoUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().personalMangercenter.toResumeInfoViewUrl;
			});
		}
	})
	//将数据格式化
	function dataFormat(data){
		if (!(data.post instanceof Array)) data.post = new Array(data.post);
		if (!(data.company instanceof Array)) data.company = new Array(data.company);
		if (!(data.joinTime instanceof Array)) data.joinTime = new Array(data.joinTime);
		if (!(data.leaveTime instanceof Array)) data.leaveTime = new Array(data.leaveTime);
		if (!(data.salary instanceof Array)) data.salary = new Array(data.salary);
		if (!(data.intro instanceof Array)) data.intro = new Array(data.intro);
		if (!(data.obligation instanceof Array)) data.obligation = new Array(data.obligation);
		if (!(data.skills instanceof Array)) data.skills = new Array(data.skills);
		var length = data.joinTime.length;
		var ret = {};
		ret.school = data.school;
		ret.specialty = data.specialty;
		ret.time = data.time;
		ret.educationName = data.educationName;
		ret.jobExperience = {
			post: data.post,
			school: data.company,
			joinTime :data.joinTime,
			leaveTime:data.leaveTime,
			salary:data.salary,
			intro:data.intro,
			obligation:data.obligation,
			skills:data.skills
		};

		return ret;
	}

	//增加工作经历
	var addExperienceBut = $('#addExperienceBut');
	var experienceid = addExperienceBut.parent().children('dl').length+1;
	addExperienceBut.click(function(){
		var _this = $(this);
		var str = 
			"<dl class='selectStatus workExperience'>"
				+"<div class='fa fa-times-circle deleteGroup'>删除</div>"
				+"<dt>请填写工作经历</dt>"
				+"<dd>"
					+'<span>职位名称：</span><input type="text" name="post" id="post'+experienceid+'" placeholder="如：ios高级工程师" required>'
				+"</dd>"
				+"<dd>"
					+'<span>公司名称：</span><input type="text" name="company" id="school'+experienceid+'" placeholder="请填写公司名称" required>'
				+"</dd>"
				+"<dd>"
					+'<span>入职时间：</span><input type="text" name="joinTime" id="joinTime'+experienceid+'" placeholder="请选择入职时间" required class="joinTime'+experienceid+'" autocomplete="off">'
				+'</dd>'
				+'<dd>'
					+'<span>离职时间：</span><input type="text" name="leaveTime" id="leaveTime'+experienceid+'" placeholder="请选择离职时间" required class="leaveTime'+experienceid+'" autocomplete="off">'
				+'</dd>'
				+'<dd>'
					+'<span>薪资水平：</span><input type="number" name="salary" id="salary'+experienceid+'" placeholder="请输入薪资水平" required number="true">'
				+'</dd>'
				+'<dd>'
					+'<span>职位描述：</span><textarea placeholder="请输入职位描述" name="intro" id="intro'+experienceid+'" required></textarea>'
				+'</dd>'
				+'<dd>'
					+'<span>个人职责：</span><textarea placeholder="请输入个人职责" name="obligation" id="obligation'+experienceid+'" required></textarea>'
				+'</dd>'
				+'<dd>'
					+'<span>使用技能：</span><input type="text" name="skills" id="skills'+experienceid+'" placeholder="请输入使用技能" required>'
				+'</dd>'
			+'</dl>';
		_this.before(jQuery.validator.format(str));
		//编辑求职信息的入职时间
		laydate.render({
		  elem: '.joinTime'+experienceid
		});
		//编辑求职信息的离职时间
		laydate.render({
		  elem: '.leaveTime'+experienceid
		});
		experienceid++;

	})
	//给工作经历和工作意向的删除按钮增加点击事件
	var editJobInfoUl = $('.editJobInfoUl');
	editJobInfoUl.on("click",'.deleteGroup',function(){
		var _this = $(this);
		if(_this.parents('li').find('dl').length == 1){
			showTip('最后一条不能删除！');
			return;
		}
		_this.parent().remove();
	})
})