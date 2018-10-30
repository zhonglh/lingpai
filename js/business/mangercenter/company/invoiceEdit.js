$(function(){
	var invoiceForm = $('#invoiceForm');

	$("#invoiceBtn").click(function(){
		if(invoiceForm.valid()){
			var formData = form2Obj(invoiceForm);
			submitAjaxHandler(getServerUrl().companyMangercenter.saveInvoiceInfoUrl,JSON.stringify(formData),function(data){
                closeWindow(top.invoiceLayer);
			});
		}
	})
})