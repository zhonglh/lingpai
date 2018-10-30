$(function(){
	//筛选
	var selectIndustryLi = $('.selectIndustry li');
	var selectEnterprises = $('.selectEnterprises');
	selectIndustryLi.eq(0).addClass('liBack');
	selectEnterprises.each(function(index,element){
		$(element).find('li').eq(0).addClass('liBack')
	});
	selectIndustryLi.click(function(){
		var _this = $(this);
		selectIndustryLi.removeClass('liBack');
		_this.addClass('liBack');
	})
	selectEnterprises.find('li').click(function(){
		var _this = $(this);
		var parentLi = _this.parent().find('li');
		parentLi.removeClass('liBack');
		if(!_this.hasClass('more')){
			_this.addClass('liBack');
		}else{
			parentLi.eq(0).addClass('liBack');
		}
	})
})