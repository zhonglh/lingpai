var DELAY_TIME = 2000;

function lunbo(currentSwitchUl){
	var xmCurrentObj = jiLunBo(currentSwitchUl);
	var liWidth = xmCurrentObj.liWidth;
	var ulWidth = xmCurrentObj.ulWidth;
	var liLength = xmCurrentObj.liLength;
	addBot(currentSwitchUl,liLength);
	var flag = false;
	var paginationSpan = $('.pagination span');
	var currentSpan = 0;
	paginationSpan.removeClass('swiper-active-switch');
	paginationSpan.eq(currentSpan).addClass('swiper-active-switch');
	var timer = null;
	setTime();
	$(currentSwitchUl,paginationSpan).hover(function(){
		clearInterval(timer);
	},function(){
		setTime();
	})
	paginationSpan.hover(function(){
		clearInterval(timer);
	},function(){
		setTime();
	})
	paginationSpan.click(function(e){
		var _this = $(this);
		var index = _this.index();
		paginationSpan.removeClass('swiper-active-switch');
		_this.addClass('swiper-active-switch');
		currentSwitchUl.animate({
			left:-liWidth*index
		})
		currentSpan = index;
		e.stopPropagation();
	})

	function setTime(){
		timer = setInterval(function(){
			currentSpan++;
			var currentSwitchUlLeft = currentSwitchUl.position().left;
			if(-currentSwitchUlLeft>=ulWidth-liWidth){
				currentSwitchUl.css('left',0);
				currentSwitchUlLeft = 0;
			}
			if(currentSpan == liLength-1){
				currentSpan = 0;
			}
			paginationSpan.removeClass('swiper-active-switch');
			paginationSpan.eq(currentSpan).addClass('swiper-active-switch');
			currentSwitchUl.animate({
				left:currentSwitchUlLeft-liWidth
			})				
		},DELAY_TIME)
	}
	
}
function jiLunBo(obj){
	var xmCurrentLi = obj.children("li");
	var xmCurrentLiLength = xmCurrentLi.length;
	obj.width(xmCurrentLiLength*100+"%");
	xmCurrentLi.width(100/xmCurrentLiLength+'%');
	var xmCurrentLiWidth = xmCurrentLi.width();
	var xmCurrentUl = obj.width();
	return {
		liWidth:xmCurrentLiWidth,
		liLength:xmCurrentLiLength,
		ulWidth:xmCurrentUl
	}
}
function addBot(currentSwitchUl,liLength){
	var str = '<div class="pagination">';
	for (var i = 0; i < liLength-1; i++) {
		str = str + '<span></span>';
	}
	str = str + '</div>';
	currentSwitchUl.after(str);
}