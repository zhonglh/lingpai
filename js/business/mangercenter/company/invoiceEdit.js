$(function(){
	var invoiceForm = $('#invoiceForm');
	invoiceForm.validate({
		submitHandler:function(form){
			var formData = form2Obj(invoiceForm);
			submitAjaxHandler(getServerUrl().companyMangercenter.saveInvoiceInfoUrl,JSON.stringify(formData),function(data){
                closeWindow(top.invoiceLayer);
			});
		}
	});
})