$(function(){

	//求职信息表单提交
	var applyForJobForm = $('#applyForJobForm');
	$("#submitBtn").click(function(){
		if(applyForJobForm.valid()){
			var formData = form2Obj(applyForJobForm);
			submitAjaxHandler(getServerUrl().personalMangercenter.saveApplyForJobUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().personalMangercenter.toApplyForJobListUrl;
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

	thirdLinked();
	function thirdLinked(){
		//行业，职位三级联动
		$.ajaxSettings.async = false; 
		$.getJSON(getServerUrl().common.jobInfoUrl,function(data){	
			$('.industry').distpicker(data);
		})
		//城市三级联动
		$.getJSON(getServerUrl().common.cityInfoUrl,function(data){	
			$('.city').distpicker(data);
		})
		$.ajaxSettings.async = true; 
	}

	var skillsUl = $(".skillsUl");
	var industry3 = $("#industry3");
	skillsData(industry3.val());
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