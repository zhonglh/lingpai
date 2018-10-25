$(function(){
	var COOKIE_START_TIME = "findPassStartTime";

	var mobileNum = getCookie(COOKIE_MOBILE);
    if(mobileNum != undefined) {
        $("#mobile").val(mobileNum);
    }

	var forgetPasBoxLi = $('.forgetPasBox li');
	forgetPasBoxLi.eq(0).show();
	var smsid = $('#smsid');
	//找回密码验证
	var findPasForm = $('#findPasForm');
    findPasForm.validate({
		submitHandler:function(form){
            smsid.val(getCookie('smsid'));
            var formData = form2Obj(findPasForm);
			submitAjaxHandler(getServerUrl().login.findPasUrl,JSON.stringify(formData),function(data){
				$("#findPassTicket").val(data.findPassTicket);
                $("#mobile2").val($("#mobile").val());
                showChangePasswordForm();
			});
		}
	});
	function showChangePasswordForm(){
        forgetPasBoxLi.hide();
        forgetPasBoxLi.eq(1).show();
        $("#password").focus();
    }
	//获取短信验证码
	var phoneCodeBut = $('#phoneCodeBut');
	var mobile = $('#mobile');
	againCountdown(phoneCodeBut,'forgetPasPhoneCode');
	phoneCodeBut.click(function(){
		sendSmsCode(mobile,sms.SmsForgetPasUrl,sendSmsCallBack);
	})
	//修改密码
	var changePasForm = $('#changePasForm');
	changePasForm.validate({
		submitHandler:function(form){
			var formData = form2Obj(changePasForm);
            submitAjaxHandler(getServerUrl().login.changePasUrl,JSON.stringify(formData),function(data){

                showSuccess("您的密码重置成功。");
                //将手机号存储在cookie里 , 下次登录不用再输入手机号了
                setCookie(COOKIE_MOBILE,formData.mobile,7);
                //todo
                //移除cookie里的 COOKIE_SMSID , COOKIE_START_TIME
                location.href = getServerUrl().login.toLoginUrl;
            });
		}
	});
})