$(function(){
	//申请成为品牌合作方
	$('.partner').click(function(){
		partnerLayer =openWindow({
			title:['申请成为品牌合作方', 'text-align:center;color:#fff;background:rgb(63, 81, 181)'],
			content: getServerUrl().index.toPartnerUrl
		})
	})
	//轮播图
    lunbo($('.swiper-container ul'));
	//重要客户遮罩的显示隐藏
	var importantClientUlLi = $('.importantClientUl>li');
	importantClientUlLi.hover(function(){
		$(this).find('.greyPenson').show();
	},function(){
		$(this).find('.greyPenson').hide();
	})
})