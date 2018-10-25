$(function(){
	var dataTotleCount = 0;
	var limit = DEFAULT_LIMIT;
	var pageCurr = 1;
	queryPage(pageCurr);
	function queryPage(curr){
		var queryData = {
    		page:curr,
    		pageSize:limit,
    		queryBean:{}
    	}	
		postAjaxAsync(getServerUrl().companyMangercenter.projectInfoUrl,JSON.stringify(queryData),function(data){
			var str = '';
			dataTotleCount = limit*data.pageTotle;
			data = data.data[curr];
			for (var i = 0; i < data.length; i++) {
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
								+"<p><span class='listTitle'>擅长技能：</span>#"+data[i].skills[0]+"<i class='listTitleI'>#"+data[i].skills[1]+"</i></p>"
							+"</div>"
						+"</div>"		
						+"<div class='expertListButtom'>"
							+"<i class='dayMoney'>日薪：2000元</i>"
							+"<span class='collect'>关闭招聘</span>"
						+"</div>"
					+"</li>";

			}
			var expertListUl = $(".expertListUl");
			expertListUl.html(str);
			if(curr!=1) return;
			linpaiPage(dataTotleCount,limit,queryPage);
		});
		
	}
})