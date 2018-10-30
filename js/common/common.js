
//开关
var DEBUG = true;

//COOKIE保存手机号的KEY
var COOKIE_MOBILE = "mobile";
var DEFAULT_LIMIT = 10;


//弹出层
function openWindow(obj){
	return layer.open({
	  type: 2,
	  anim: obj.anim || 2,
	  title: obj.title,
	  area: obj.area || ['818px', '430px'],
	  maxmin: obj.maxmin || true,
	  btns: obj.btns || 0,
	  btn: obj.btn,
	  yes: function(index){
	  	if(obj.callback){
	  		obj.callback(index);
	  	}
	  },
	  content: obj.content
	});
}



//判断字符串是否为空
function isEmpty(str){
	return ''== $.trim(str);
}

//判断正则是否与字符串匹配
function isExpMatchStr(str,exp){
	return exp.test(str);
}

//获取cookie
function getCookie(key){
	return $.cookie(key);
}

//存储cookie
function setCookie(key,value,expiresDate){
	$.cookie(key, value,{expires:expiresDate});
}

//删除cookie
function removeCookie(key){
	$.cookie(key, '',{expires:-1});
}

//判断是否为纯数字
function checkRate(str){
	var re = /^[0-9]+.?[0-9]*$/;
	str = str+'';
	return re.test(str);
}

//判断是否为整数
function checkIsInteger(str){
	return Math.floor(str) === str;
}

//判断是否为小数
function checkIsDecimal(str){
	var x = String(str).indexOf('.') + 1;
	if(x === 0){
		return false;
	}
	var y = String(str).length - x;
	if(y > 0){
	    return true;
	}
	return false;
}

//判断是否是纯字母
function checkIsLetter(str){
	var reg= /^[A-Za-z]+$/;
	return reg.test(str);
}
//判断是否数字加字母加下划线 
function checkIsLetterNum(str){
	var reg = /^\w+$/;
	return reg.test(str);
}

//form内容转json
function form2Obj(obj){
	var jsonData = obj.serializeArray();
	var opts = {};
	for (var i = 0; i < jsonData.length; i++) {
		var key = jsonData[i].name;
		if(!opts[key]){
			opts[key] = jsonData[i].value;
		}else if(opts[key] instanceof Array){
			opts[key].push(jsonData[i].value)
		}else{
			var nextKey = opts[key];
			opts[key] = [];
			opts[key].push(nextKey);
			opts[key].push(jsonData[i].value)
		}
	}
	return opts;
}
//弹出加载遮罩页面
function showLoading(){
	var layer = top.layer || layer;
	layer.load(2);
}
//隐藏加载遮罩页面
function hideLoading(){
	var layer = top.layer || layer;
	layer.closeAll('loading');
}
//弹出成功遮罩框
function showSuccess(txt){
	var layer = top.layer || layer;
	layer.alert(txt, {icon: 1});
}
//弹出失败遮罩框
function showError(text){
	var layer = top.layer || layer;
	layer.alert(text, {icon: 2});
}
//弹出提示信息
function showTip(text){
	var layer = top.layer || layer;
	layer.msg(text);
}
function showConfirm(text,callback){
	var layer = top.layer || layer;
	layer.msg(text, {
	  time: 0, //不自动关闭
	  btn: ['确定', '取消'],
	  yes: function(index){
		callback();
	    layer.close(index);
	  }
	});
}
//关闭layer
function closeWindow(layerName){
	var layer = top.layer || layer;
	layer.close(layerName);
}