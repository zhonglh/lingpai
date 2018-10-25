$(function(){
	var COOKIE_START_TIME = "registerStartTime";
	
	//我阅读并同意协议
	var loginJumpSpan = $('.loginJump span');
	loginJumpSpan.click(function(){
		var _this = $(this);
		if(_this.hasClass('fa')){
			_this.removeClass('fa fa-check-square-o');
		}else{
			_this.addClass('fa fa-check-square-o');
		}
	})
	var smsid = $('#smsid');
	//注册
	var registerForm = $('#registerForm');
	registerForm.validate({
		submitHandler:function(form){
			if(!loginJumpSpan.hasClass('fa')){
				loginJumpSpan.css('border-color','#f00');
				return false;
			}else{
				loginJumpSpan.css('border-color','#666');
			}
			smsid.val(getCookie(COOKIE_SMSID));
			var formData = form2Obj(registerForm);
			submitAjaxHandler(getServerUrl().login.registerUrl,JSON.stringify(formData),function(data){
                //console.log(getServerUrl().login.toLoginUrl)
                location.href = getServerUrl().login.toLoginUrl;
                //将手机号存储在cookie里 , 下次登录不用再输入手机号了
                setCookie(COOKIE_MOBILE,formData.mobile,7);
                //todo
                //移除cookie里的 COOKIE_SMSID , COOKIE_START_TIME
                removeCookie(COOKIE_SMSID);
                removeCookie(COOKIE_START_TIME);
            });
		}
	});

	//获取短信验证码
	var phoneCodeBut = $('#phoneCodeBut');
	var mobile = $('#mobile');
	againCountdown(phoneCodeBut,COOKIE_START_TIME);
	phoneCodeBut.click(function(){
		sendSmsCode(mobile,getServerUrl().sms.smsRegisterUrl);
	})
})