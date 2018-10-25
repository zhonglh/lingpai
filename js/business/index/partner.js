$(function(){
	var brandPartnerForm = $('#brandPartnerForm');
	brandPartnerForm.validate({
		submitHandler:function(form){
			var formData = form2Obj(brandPartnerForm);
			submitAjaxHandler(getServerUrl().index.savePartnerUrl,JSON.stringify(formData),brandPartnerCallback,top.partnerLayer);
		}
	});
	function brandPartnerCallback(){
		showSuccess("您的申请我们已经收到， 会在第一时间和您联系。");
		closeWindow(top.partnerLayer);
	}
})