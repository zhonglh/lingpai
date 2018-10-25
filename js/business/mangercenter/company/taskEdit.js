$(function(){
	//表单提交
	var taskInfoForm = $('#taskInfoForm');
	taskInfoForm.validate({
		submitHandler:function(form){
			var formData = form2Obj(taskInfoForm);
			submitAjaxHandler(getServerUrl().companyMangercenter.saveTaskInfoUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().companyMangercenter.toMyProjectUrl;
			});
		},
		errorPlacement: function(error, element) {
			$( element ).parent().append( error );
		}
	});

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
	//行业，职位三级联动
	$.getJSON(getServerUrl().common.jobInfoUrl,function(data){	
		$('#industry').distpicker(data);
	})
	//城市三级联动
	$.getJSON(getServerUrl().common.cityInfoUrl,function(data){	
		$('.city').distpicker(data);
	})
})