$(function(){
	//基础信息表单提交
	var baseInfoEditForm = $('#baseInfoEditForm');
	
	$("#saveBtn").click(function(){
		if(baseInfoEditForm.valid()){
			var formData = form2Obj(baseInfoEditForm);
			submitAjaxHandler(getServerUrl().personalMangercenter.saveBaseInfoUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().personalMangercenter.toBaseInfoViewUrl;
				setCookie(COOKIE_MOBILE,formData.mobile,7);
			});
		}
	})
	//上传头像
	var headImg = $('.headImg');
	var icon2 = $('#icon2');
	uploadFile({
		elem: '#uploadHead',
		url:  getServerUrl().personalMangercenter.uploadHeadUrl,
	    accept:'image/*',
		success:function(res){
			headImg.attr('src',res.url);
          	icon2.val(res.id);
		}
	});

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
				title:['请选择企业'],
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
})