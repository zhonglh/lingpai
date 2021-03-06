$(function(){
	var collect = $('.collect');
	collect.click(function(){
		closeWindow(top.invoiceListLayer);
	})
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
		postAjaxAsync(getServerUrl().companyMangercenter.invoiceInfoUrl,JSON.stringify(queryData),function(result){
			var str = 
				"<tr>"
					+"<th>申请日期</th>"
					+"<th>金额</th>"
					+"<th>发票类型</th>"
					+"<th>当前状态</th>"
					+"<th>寄送时间</th>"
					+"<th>韵达单号/电子票下载</th>"
				+"</tr>";
			if(DEBUG){
				items = result.data[curr];
				dataTotleCount = limit*result.pageTotle;
			}else{
				dataTotleCount = result.totle;
            	items = result.items;
			}
			for (var i = 0; i < items.length; i++) {
				str =str+ 
					"<tr>"
						+"<td>2017-09-18</td>"
						+"<td>￥345.6</td>"
						+"<td>纸质票</td>"
						+"<td>结算懒无费用</td>"
						+"<td>2018-9-9</td>"
						+"<td>1000917899078</td>"
					+"</tr>";

			}
			var invoiceContent = $(".invoiceContent table");
			invoiceContent.html(str);
			linpaiPage(dataTotleCount,limit,curr,queryPage);
		});
		
	}
})