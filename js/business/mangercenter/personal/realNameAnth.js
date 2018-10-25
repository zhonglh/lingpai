$(function(){
	//实名认证表单提交
	var realAuthEditForm = $('#realAuthEditForm');
	var anthError = $('.anthError');
	realAuthEditForm.validate({
		submitHandler:function(form){
			if(!imgIds.images){
				anthError.css('display','inline-block');
				return;
			}
			var formData = form2Obj(realAuthEditForm);
			submitAjaxHandler(getServerUrl().personalMangercenter.saveRealAuthUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().personalMangercenter.toRealNameAnthViewUrl;
			});
		},
		errorPlacement: function(error, element) {
			$( element ).parent().append( error );
		}
	});

	//证件文件
	var idFile = $('.idFile');
	var replaceUpload = $('.replaceUpload');
	var uploadFileBtn = $('.uploadFileBtn');
	var idFileBtn = $('#idFile');
	var imgIds = {};
	var PIC_MAX_NUM = 10;
	replaceUpload.click(function(){
		if(PIC_MAX_NUM && idFile.find('.idFileList').length>=PIC_MAX_NUM){
			return;
		}
		uploadFileBtn.click();
	})
	uploadFile({
		elem: '#uploadAnth',
		url:  getServerUrl().personalMangercenter.uploadAnthUrl,
	    accept:'image/*',
		success:function(res){
			var str = 
				"<div class='idFileList'>"
					+'<img src="' + res.url + '" imgId="' + res.id + '">'
					+"<div class='delete'><span class='fa fa-trash'></span></div>"
				+"</div>";
			idFile.html(idFile.html()+str);
			addImgId();
		}
	});

	//实名认证上传的图片鼠标悬浮事件
	var idFileList = $('.idFileList');
	idFile.on("mouseover",'.idFileList',function(){
		var deleteDiv = $(this).find('.delete');
		deleteDiv.show();
	})
	idFile.on("mouseout",'.idFileList',function(){
		var deleteDiv = $(this).find('.delete');
		deleteDiv.hide();
	})

	//给每个图片设置删除事件
	idFile.on("click",'.fa',function(){
		$(this).parents('.idFileList').remove();
		addImgId();
	})
	
	//拼凑上传的证件文件的id
	function addImgId(){
		imgIds = {};
		var idFileList = $('.idFileList');
		idFileList.each(function(index,element){
			var imgId = $(element).find('img').attr('imgId');
			if(!imgIds.images){
				var str = imgId;
			}else{
				var str = imgIds.images + ',' + imgId;
			}
			imgIds.images = str;
		})
		if(imgIds.images){
			anthError.hide();
		}else{
			anthError.css('display','inline-block');
		}
		idFileBtn.val(imgIds.images);
	}
})