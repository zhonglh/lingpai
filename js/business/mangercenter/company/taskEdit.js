$(function(){
	//表单提交
	var taskInfoForm = $('#taskInfoForm');
	$("#submitBtn").click(function(){
		if(taskInfoForm.valid()){
			var formData = form2Obj(taskInfoForm);
			submitAjaxHandler(getServerUrl().companyMangercenter.saveTaskInfoUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().companyMangercenter.toMyProjectUrl;
			});
		}
	})
	//使用技能增加点击事件并将点击后的id添加到input中
	var jobWantLi = $(".jobWantLi");
	var skillArr = [];
	var skillCount = 0;
	jobWantLi.on('click','.skillsUl>li',function(){
		var _this = $(this);
		_this.toggleClass('skillBorder');
		var str='';
		_this.parent().find('li').each(function(index,element){
			var elem = $(element);
			if(elem.hasClass('skillBorder')){
				if(!str){
					str = elem.text();
				}else{
					str = str + ',' + elem.text();
				}
			}
		})
		_this.nextAll("input").val(str);
	})

	var skillsUl = $(".skillsUl");
	var industry3 = $("#industry3");

	$.ajaxSettings.async = false;
	//行业，职位三级联动
	$.getJSON(getServerUrl().common.jobInfoUrl,function(data){	
		$('#industry').distpicker(data);
		skillsData(industry3.val());
	})
	//城市三级联动
	$.getJSON(getServerUrl().common.cityInfoUrl,function(data){	
		$('.city').distpicker(data);
	})
	$.ajaxSettings.async = true;
	
	$("#industry3,#industry2,#industry1").change(function(){
		var id = industry3.val();
		if(!id){
			skillsUl.html("");
			return;
		}
		skillsData(id);
	})
	function skillsData(id){
		var data = {};
		postAjaxAsync(getServerUrl().common.skillsUrl,data,function(result){
			if(DEBUG){
				var data = result.data[id];
				var str = '';
				for (var i = 0; i < data.length; i++) {
					str = str+
						"<li>"+data[i]+"</li>";
				}
				str = str+'<input type="text" name="skills" id="sk1" class="sk" required>';
				skillsUl.html(str)			
			}
		})
	}
})