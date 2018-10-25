
$(function(){
	var COOKIE_START_TIME = "loginStartTime";

    var mobile = getCookie(COOKIE_MOBILE);
    if(mobile != undefined) {
        $("#mobile1").val(mobile);
        $("#mobile2").val(mobile);
    }

	//账号登录和短信登录切换
	var loginBoxTitle = $('.loginBoxTitle');
	loginBoxTitle.eq(0).addClass('loginLiCss');
	loginBoxTitle.eq(0).next('form').show();
	loginBoxTitle.click(function(){
		var _this = $(this);
		if(_this.hasClass('loginLiCss')) return;
		loginBoxTitle.removeClass('loginLiCss');
		_this.addClass('loginLiCss');
		loginBoxTitle.next('form').hide();
		_this.next('form').show();
	})
	//密码登录提交
	var passwordLoginForm = $('#passwordLoginForm');
	passwordLoginForm.validate({
		submitHandler:function(form){
			var formData = form2Obj(passwordLoginForm);
			submitAjaxHandler(getServerUrl().login.pwLoginUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().index.toIndexUrl;
                //将手机号存储在cookie里 , 下次登录不用再输入手机号了
                setCookie(COOKIE_MOBILE,formData.mobile,7);
              	//todo
                //移除cookie里的 COOKIE_SMSID , COOKIE_START_TIME
                removeCookie(COOKIE_SMSID);
                removeCookie(COOKIE_START_TIME);
			});
		}
	});
	var smsid = $('#smsid');
	//短信登录提交
	var phoneLoginForm = $('#phoneLoginForm');
	phoneLoginForm.validate({
		submitHandler:function(form){
			smsid.val(getCookie('smsid'));
			var formData = form2Obj(phoneLoginForm);
			submitAjaxHandler(getServerUrl().login.smsLoginUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().index.toIndexUrl;
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
	var mobile = $('#mobile2');
	againCountdown(phoneCodeBut,COOKIE_START_TIME);
	phoneCodeBut.click(function(){
		sendSmsCode(mobile,getServerUrl().sms.smsLoginUrl);
	})
})