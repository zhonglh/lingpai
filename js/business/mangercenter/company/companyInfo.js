$(function(){
	//职位类型和城市的回显

	var provinces = $("#provinces");
	var city = $("#city");
	var counties = $("#counties");
	
	//表单提交
	var companyInfoForm = $('#companyInfoForm');

	$("#submitBtn").click(function(){
		if(companyInfoForm.valid()){
			var formData = form2Obj(companyInfoForm);
			submitAjaxHandler(getServerUrl().companyMangercenter.saveCompanyInfoUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().companyMangercenter.toCompanyInfoViewUrl;
			});
		}
	})
	//城市三级联动
	$.getJSON(getServerUrl().common.cityInfoUrl,function(data){	
		$('.companySite').distpicker(data);
		var data = {};
		postAjaxAsync(getServerUrl().companyMangercenter.companyInfoUrl,data,function(result){
			if(DEBUG){
				var cityData = result.data.city;
				provinces.val(cityData.provinces);
				provinces.trigger("change");
				city.val(cityData.city);
				city.trigger("change");
				counties.val(cityData.counties);
				counties.trigger("change");
			}
			
		})
	})
	
})