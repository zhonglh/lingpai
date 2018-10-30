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
		postAjaxAsync(getServerUrl().personalMangercenter.collectionInfoUrl,JSON.stringify(queryData),function(result){
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
								+"<div class='expertListTopTitle'>小微科技有限公司<span class='realName'>已认证</span>"
									+"<div class='expertListTopTitleR'>高级程序员"
										+"<div>工期预估：30天</div>"
									+"</div>"
								+"</div>"
								+"<p><span class='listTitle'>工作地点：</span>北京<i class='listTitleI'>朝阳区</i></p>"
								+"<p><span class='listTitle'>工作方式：</span>远程开发</p>"
								+"<p><span class='listTitle'>擅长技能：</span>#"+items[i].skills[0]+"<i class='listTitleI'>#"+items[i].skills[1]+"</i></p>"
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