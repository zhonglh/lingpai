$(function(){
	var recruitmentStatus = $(".recruitmentStatus dd>input");
	var clickSelectCompanySpan = $('.clickSelectCompany span');
	var clickSelectCompanyInput = $('.clickSelectCompany input');
	if($('.checked').attr("checked")){
		select();
	}
	//给选择身份增加焦点事件
	recruitmentStatus.focus(function(){
		var _this = $(this);
		if(_this.hasClass('checked')){
			select();
		}else{
			clickSelectCompanySpan.removeClass('spanTitle');
			clickSelectCompanySpan.unbind();
			clickSelectCompanyInput.removeAttr('required');
			$('#channel').attr("value",'');
			$('.selectCompanyName').html('');
		}
	})

	function select(){
		clickSelectCompanySpan.addClass('spanTitle');
		clickSelectCompanyInput.attr('required','true');
		clickSelectCompanySpan.click(function(){
			companyLayer =openWindow({
				title:['请选择企业', 'text-align:center;color:#fff;background:rgb(63, 81, 181)'],
				content: getServerUrl().personalMangercenter.toCompanyUrl,
				btns: 1,
				btn: ['确定', '取消'],
				callback:function(index){
					var res = window["layui-layer-iframe" + index].callbackData();
					if(res.companyName){
						$('#channel').attr("value",res.companyId);
						$('.selectCompanyName').html(res.companyName);
						$('.clickSelectCompany label').hide();
					}

					closeWindow(companyLayer);
				}
			})
		})
	}
	
	//给网签增加鼠标悬浮事件
	var applyToBeI = $('.applyToBe i');
	var appleNotice = $('.appleNotice');
	applyToBeI.hover(function(){
		appleNotice.show();
	},function(){
		appleNotice.hide();
	})
	//表单提交
	var userIdentityForm = $('#userIdentityForm');
	userIdentityForm.validate({
		submitHandler:function(form){
			var formData = form2Obj(userIdentityForm);
			submitAjaxHandler(getServerUrl().personalMangercenter.saveUserIdentityUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().personalMangercenter.toUserIdentityViewUrl;
			});
		},
		errorPlacement: function(error, element) {
			$( element ).parent().append( error );
		}
	});
})