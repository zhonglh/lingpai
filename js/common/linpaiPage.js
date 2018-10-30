function linpaiPage(dataTotleCount,limit,curr,callback){
	//分页
	var laypage = layui.laypage;
	laypage.render({
	    elem: 'pages',
	    count: dataTotleCount, //数据的总数
	    limit:limit,//限制每一页有几个，默认是10
	    curr: curr,
	    jump: function(obj, first){//切换分页的回调函数
	    	if(!first){
	    	 callback(obj.curr);   			
	    	}
		}
	});
}