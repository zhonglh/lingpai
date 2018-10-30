$(function(){
	//申请成为品牌合作方
	$('.partner').click(function(){
		partnerLayer =openWindow({
			title:['申请成为品牌合作方', 'text-align:center;color:#fff;background:rgb(63, 81, 181)'],
			area: ['818px', '430px'],
			closeBtn: false,
			content: '../../html/layer/partner.html'
		})
	})
	//立即预约
	$('.appointment').click(function(){
		appointmentLayer =openWindow({
			title:['立即预约', 'text-align:center;color:#fff;background:rgb(63, 81, 181)'],
			area: ['818px', '484px'],
			closeBtn: false,
			content: '../../html/layer/appointment.html'
		})
	})
})