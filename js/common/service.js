//get同步
function getAjaxSync(url,data,callback){
	var opts = {url:url,data:data,async:false,type:'get',callback:callback}
	ajax(opts);
}
//get异步
function getAjaxAsync(url,data,callback){
	var opts = {url:url,data:data,type:'get',callback:callback}
	ajax(opts);
}
//post同步
function postAjaxSync(url,data,callback){
	var opts = {url:url,data:data,async:false,callback:callback}
	ajax(opts);
}
//post异步
function postAjaxAsync(url,data,callback){
	if(DEBUG){
		getAjaxAsync(url,data,callback);
		return;
	}
	var opts = {url:url,data:data,callback:callback}
	ajax(opts);
}

/**
 * 点击提交后的操作
 * @param url
 * @param data
 * @param callback
 * @param layerObj
 * @returns {boolean}
 */
function submitAjaxHandler(url,data,callback,layerObj){
    postAjaxAsync(url,data,callback);
}

function ajax(opts){
	$.ajax({
		url : opts.url,
		data : opts.data || {},
		type : opts.type || "post",
		async : opts.async || true,
		dataType : 'json',
		beforeSend:function(XMLobj){
			showLoading();
		},
		success:function(data){
			hideLoading();			
			if(opts.callback){
				 opts.callback(data);
			}else{
				showSuccess("操作成功");
			}
		},
		error:function(XMLobj,errorInfo,catchObj){
			hideLoading();			
			showError(XMLobj.responseText);
		}
	})
}

