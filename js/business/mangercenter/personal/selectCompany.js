$(function(){

	var dataTotleCount = 0;
	var limit = DEFAULT_LIMIT;
	var pageCurr = 1;
//表单提交
	var companyForm = $('#companyForm');
	companyForm.validate({
		submitHandler:function(form){
			var formData = form2Obj(companyForm);
			submitAjaxHandler(getServerUrl().personalMangercenter.companyInfoUrl,JSON.stringify(formData),function(data){
				queryPage(pageCurr);
			});
		}
	});
	var companyTable = $(".companyTable");
//页面显示数据
	queryPage(pageCurr);
	function queryPage(curr){
		var queryData = {
    		page:curr,
    		pageSize:limit,
    		queryBean:{}
    	}	
		postAjaxAsync(getServerUrl().personalMangercenter.collectionInfoUrl,JSON.stringify(queryData),function(data){
			var str = 
				"<tr>"
					+"<th></th>"
					+"<th>公司名称</th>"
					+"<th>公司ID</th>"
				+"</tr>";
			dataTotleCount = limit*data.pageTotle;
			data = data.data[curr];
			companyTable.html('');
			for (var i = 0; i < data.length; i++) {
				str =str+ 
					"<tr>"
						+'<td><input type="radio" name="companyName" class="companyName"></td>'
						+"<td class='name'>山东矿机的</td>"
						+"<td class='id'>12345678</td>"
					+"</tr>";
			}
			companyTable.html(str);
			if(curr!=1) return;
			linpaiPage(dataTotleCount,limit,queryPage);
		});
	}
//给单选按钮增加点击事件
	var companyInput = companyTable.find('input');
	companyTable.on("focus",".companyName",function(){
		var _this = $(this);
		var companyTr = _this.parents('tr');
		companyId = companyTr.find('.id').text();
		companyName = companyTr.find('.name').text();
	})
})
//返回数据的函数
var companyName = '';
var companyId = '';
function callbackData(){
	return {
		companyName:companyName,
		companyId:companyId
	}
}