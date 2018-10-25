$(function(){
	//表单提交
	var companyInfoForm = $('#companyInfoForm');
	companyInfoForm.validate({
		submitHandler:function(form){
			var formData = form2Obj(companyInfoForm);
			submitAjaxHandler(getServerUrl().companyMangercenter.saveCompanyInfoUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().companyMangercenter.toCompanyInfoViewUrl;
			});
		}
	});

	$.getJSON(getServerUrl().common.jobInfoUrl,function(data){
		$('.industry').distpicker(data);
	})

	//城市三级联动
	$.getJSON(getServerUrl().common.cityInfoUrl,function(data){	
		$('.companySite').distpicker(data);
	})
})