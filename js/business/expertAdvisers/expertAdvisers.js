$(function(){
	//申请成为品牌合作方
	$('.partner').click(function(){
		partnerLayer =openWindow({
			title:['申请成为品牌合作方', 'text-align:center;color:#fff;background:rgb(63, 81, 181)'],
			content: getServerUrl().index.toPartnerUrl
		})
	})
	//筛选
	var selectIndustry = $('.selectIndustry');
	var selectIndustryLi = selectIndustry.find('li');
	var selectIndustryInput = selectIndustry.find('input');
	var selectEnterprises = $('.selectEnterprises');
	var selectEnterprisesLi = selectEnterprises.find('li');
	var selectEnterprisesInput = selectEnterprises.find('input');
	selectIndustryLi.eq(0).addClass('liBack');
	selectEnterprisesLi.eq(0).addClass('liBack');
	var industryChoose = $('.industryChoose');
	var wellCompanies = $('.wellCompanies');
	selectIndustryLi.click(function(){
		var _this = $(this);
		var text = _this.attr('id');
		selectIndustryLi.removeClass('liBack');
		_this.addClass('liBack');
		industryChoose.html('');
		if(_this.index() != 0){
			industryChoose.html('>>'+_this.html());
		}
		selectIndustryInput.val(text);
	})
	selectEnterprisesLi.click(function(){
		var _this = $(this);
		var text = _this.attr('id');
		selectEnterprisesLi.removeClass('liBack');
		var has = _this.hasClass('more');
		var index = _this.index();
		if(!has){
			_this.addClass('liBack');
			selectEnterprisesInput.val(text);
		}else{
			selectEnterprisesLi.eq(0).addClass('liBack');
			selectEnterprisesInput.val(selectEnterprisesLi.eq(0).attr('id'));
		}
		wellCompanies.html('');
		if(index != 0 && !has){
			wellCompanies.html('>>'+_this.html());
		}
	})

	var more = $('.more');
	var moreCount = 0;
	more.click(function(){
		var _this = $(this);
		_this.find('span').toggleClass('fa-sort-up');
		if(moreCount%2 != 0){
			selectEnterprises.height('48px');
		}else{
			selectEnterprises.height('auto');
		}
		moreCount++;
	})

	
})