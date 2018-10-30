$(function(){
	var industry1Id = $('#industry1');
	var industry2Id = $('#industry2');
	var industry3Id = $("#industry3");

	var provinces = $("#provinces");
	var city = $("#city");
	var counties = $("#counties");

	var data = {
		
	}
	postAjaxAsync(getServerUrl().personalMangercenter.applyForInfoUrl,data,function(result){
		if(DEBUG){
			var jobData = result.data.job;
			var cityData = result.data.city;
			industry1Id.val(jobData.industry1);
			industry1Id.trigger("change");
			industry2Id.val(jobData.industry2);
			industry2Id.trigger("change");
			industry3Id.val(jobData.industry3);
			industry3Id.trigger("change");
			provinces.val(cityData.provinces);
			provinces.trigger("change");
			city.val(cityData.city);
			city.trigger("change");
			counties.val(cityData.counties);
		}
		
	})
})