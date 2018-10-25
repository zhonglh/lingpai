$(function(){
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
					+"<th>职位类型</th>"
					+"<th>工作年限</th>"
					+"<th>可工作区域</th>"
					+"<th>可接受的工作方式</th>"
					+"<th>期望日薪</th>"
					+"<th>操作</th>"
				+"</tr>";
			dataTotleCount = limit*data.pageTotle;
			data = data.data[curr];
			for (var i = 0; i < data.length; i++) {
				str =str+ 
					"<tr>"
						+"<td>前端工程师</td>"
						+"<td>1</td>"
						+"<td>北京 朝阳区</td>"
						+"<td>远程工作</td>"
						+"<td>￥5000</td>"
						+"<td><a href='applyForJobEdit.html'><span class='totalRevenueBtn'>修改</span></a><span class='applyForJobDelete'>删除</span></td>"
					+"</tr>";

			}
			var totalRevenueTable = $(".totalRevenueTable");
			totalRevenueTable.html(str);
			if(curr!=1) return;
			linpaiPage(dataTotleCount,limit,queryPage);
		});
		
	}
	var applyForJobList = $('.applyForJobList');
	applyForJobList.on('click',".applyForJobDelete",function(){
		var _this = $(this);
		showConfirm('你确定要删除吗？',function(){
			_this.parents('tr').remove();
		});
	})
})