//上传图片
function uploadFile(opts){
	layui.use('upload', function(){
	  var upload = layui.upload;	   
	  //执行实例
	  var uploadInst = upload.render({
	    elem: opts.elem, //绑定元素
	    url:  opts.url,//上传接口
	    multiple: opts.multiple || false,
	    accept:opts.accept || "file",
	    done: function(res){
	      opts.success(res);
	    },
	    error: function () {                         //传输失败的回调
            //请求异常回调
            showError('上传失败！!');
        }
	  });
	});
}