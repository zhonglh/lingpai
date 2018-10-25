$(function(){
	//收入明细弹框
	var myMoney = $('.myMoney');
	myMoney.on("click",".totalRevenueBtn",function(){
		incomeDetailLayer =openWindow({
			title:['收入明细', 'text-align:center;color:#fff;background:rgb(63, 81, 181)'],
			area: ['818px', '310px'],
			content: getServerUrl().personalMangercenter.toIncomeDetailUrl
		})
	})
	//提现弹框
	var withdrawal = $('.withdrawal');
	withdrawal.click(function(){
		withdrawalLayer =openWindow({
			title:['提现', 'text-align:center;color:#fff;background:rgb(63, 81, 181)'],
			area: ['818px', '310px'],
			content: getServerUrl().common.toWithdrawalUrl
		})
	})

//分页
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
		postAjaxAsync(getServerUrl().personalMangercenter.incomeInfoUrl,JSON.stringify(queryData),function(data){
			var str = 
				"<tr>"
					+"<th>订单编号</th>"
					+"<th class='company'>雇主</th>"
					+"<th>金额</th>"
					+"<th>结算时间</th>"
					+"<th>结算状态</th>"
					+"<th>操作</th>"
				+"</tr>";
			dataTotleCount = limit*data.pageTotle;
			data = data.data[curr];
			for (var i = 0; i < data.length; i++) {
				str =str+ 
					"<tr>"
						+"<td>1234</td>"
						+"<td>霍尔果斯网络科技有限公司</td>"
						+"<td>￥5000</td>"
						+"<td>2018-9-9</td>"
						+"<td>交易成功</td>"
						+"<td><span class='totalRevenueBtn'>查看明细</span></td>"
					+"</tr>";

			}
			var totalRevenueTable = $(".totalRevenueTable");
			totalRevenueTable.html(str);
			if(curr!=1) return;
			linpaiPage(dataTotleCount,limit,queryPage);
		});
		
	}
})