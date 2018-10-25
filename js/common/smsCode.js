//cookie 里保存验证码ID的KEY
var COOKIE_SMSID = 'smsid';

//总计时数
var MAX_COUNT = 60;

//smsid在cookie中的过期时间,是以天为单位的
var SMSID_EXPIRES = 1/2;

var sendbutton ;
var startTime;

/**
 *  发送验证码 ,  发送按钮点击后执行此方法
 *	smsURL 发送验证码地址
 *  phoneObj 手机号输入框的对象，用来判断手机号是否验证正确
 */
function sendSmsCode(phoneObj,smsURL){
    if(sendbutton.disable) return;
    if(!phoneObj.valid()) return;
    var phoneNumber = phoneObj.val();
	var data = {'mobile':phoneNumber};
	getAjaxAsync(smsURL,data,sendSmsCallBack);
}

/**
 *  验证码发送回调
 *  如果返回成功，设置smsid到cookie ，设置开始时间到cookie，开始倒计时
 *  如果返回失败，显示失败信息
 */ 
function sendSmsCallBack(data){
	showSuccess("短信发送成功， 请注意查收!");
    sendbutton.disable=true;
    setCookie(COOKIE_SMSID,data.smsid,SMSID_EXPIRES/24);
	//将当前时间保存在COOKIE里, 有效时间60秒
    setCookie(startTime,+new Date(),MAX_COUNT/(24*60*60));
	countdown(MAX_COUNT);
}


/**
 *  到计时
 */ 
function countdown(curr_count){	
	var timer = setInterval(function(){
		sendbutton.html((curr_count--)+'秒后再获取');
		if(curr_count === 0){
			clearInterval(timer);
			sendbutton.html('<span>获取动态码</span>');			
			//将按钮重新生效
			sendbutton.disable=false;
		}
	},1000)
}

/**
 * 重新倒计时 , 页面装载完成后调用此方法
 * sendSmsCodeButton  发送验证码的按钮
 * startTimeKey  存储到cookie中的开始时间的key
 */
function againCountdown(sendSmsCodeButton,startTimeKey){
	sendbutton = sendSmsCodeButton;
    startTime = startTimeKey;
    sendbutton.disable=false;
	var START_TIME = getCookie(startTime);
	if(START_TIME != undefined && START_TIME != null){
		sendbutton.disable=true;
		//重新计时
		var time = ( new Date() ) - START_TIME;
		time = MAX_COUNT-parseInt(time/1000);
		countdown(time);
	}
}

