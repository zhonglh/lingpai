$(function(){
	//提现弹框
	var withdrawal = $('.withdrawal');
	withdrawal.click(function(){
		withdrawalLayer =openWindow({
			title:['提现'],
			area: ['818px', '310px'],
			content: getServerUrl().common.toWithdrawalUrl
		})
	})
	//发票记录弹框
	var invoice = $('.invoice');
	invoice.click(function(){
		invoiceListLayer =openWindow({
			title:['发票记录'],
			content: getServerUrl().companyMangercenter.toInvoiceListUrl
		})
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
		postAjaxAsync(getServerUrl().companyMangercenter.costCenterInfoUrl,JSON.stringify(queryData),function(result){
			var str = 
				"<tr>"
					+"<th>订单编号</th>"
					+"<th class='company'>收款方</th>"
					+"<th>金额</th>"
					+"<th>结算类型</th>"
					+"<th>结算时间</th>"
					+"<th>结算状态</th>"
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
						+"<td>1234</td>"
						+"<td>大牛人</td>"
						+"<td>￥5000</td>"
						+"<td>结算懒无费用</td>"
						+"<td>2018-9-9</td>"
						+"<td>交易成功</td>"
					+"</tr>";

			}
			var companytable = $(".companytable");
			companytable.html(str);
			linpaiPage(dataTotleCount,limit,curr,queryPage);
		});
		
	}
})