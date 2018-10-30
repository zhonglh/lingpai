$(function(){
	//支付信息表单提交
	var payInfoForm = $('#payInfoForm');

	$("#saveBtn").click(function(){
		if(payInfoForm.valid()){
			var formData = form2Obj(payInfoForm);
			submitAjaxHandler(getServerUrl().personalMangercenter.savePayInfoUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().personalMangercenter.toPayInfoViewUrl;
			});
		}
	})
})