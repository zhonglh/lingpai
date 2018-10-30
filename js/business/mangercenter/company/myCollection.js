$(function(){
	var dataTotleCount = 0;
	var limit = DEFAULT_LIMIT;
	var pageCurr = 1;
	var items ;
	queryPage(pageCurr);
	function queryPage(curr){
		var queryData = {
    		page:curr,
    		pageSize:limit,
    		queryBean:{}
    	}		
		postAjaxAsync(getServerUrl().companyMangercenter.collectionInfoUrl,JSON.stringify(queryData),function(result){
			var str = '';
			if(DEBUG){
				items = result.data[curr];
				dataTotleCount = limit*result.pageTotle;
			}else{
				dataTotleCount = result.totle;
            	items = result.items;
			}
			for (var i = 0; i < items.length; i++) {
				str =str+ 
					"<li>"
						+"<div class='expertListTop clearfix'>"
							+"<div class='expertListLeft'>"
								+"<div class='expertListTopTitle'>大牛人<span class='realName'>腾讯</span><span class='realName'>实名认证</span>"
									+"<div class='expertListTopTitleR titleSiteChange'>高级程序员"
										+"<div># 5年经验</div>"
									+"</div>"
								+"</div>"
								+"<p><span class='listTitle'>目前职位：</span>腾讯科技微信事业部<i class='listTitleI'>IOS高级程序员</i></p>"
								+"<p><span class='listTitle'>期望地点：</span>北京<i class='listTitleI'>朝阳区</i></p>"
								+"<p><span class='listTitle'>工作方式：</span>远程开发</p>"
								+"<p><span class='listTitle'>擅长技能：</span>#"+items[i].skills[0]+"<i class='listTitleI'>#"+items[i].skills[1]+"</i></p>"
							+"</div>"
							+"<div class='collectionImg'>"
								+"<img src='../../../images/raw_1499854342.png' class='imgColl'>"
								+"<i class='fa fa-star'></i>"
								+"<i class='fa fa-star'></i>"
								+"<i class='fa fa-star-half-o'></i>"
								+"<i class='fa fa-star-o'></i>"
							+"</div>"
						+"</div>"				
						+"<div class='expertListButtom'>"
							+"<i class='dayMoney'>日薪：2000元</i>"
							+"<span class='collect'>立即预约</span>"
						+"</div>"
					+"</li>";

			}
			var expertListUl = $(".expertListUl");
			expertListUl.html(str);
			linpaiPage(dataTotleCount,limit,curr,queryPage);
		});
		
	}
})