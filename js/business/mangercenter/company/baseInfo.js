$(function(){
	//基础信息表单提交
	var baseInfoEditForm = $('#baseInfoEditForm');
	$("#saveBtn").click(function(){
		if(baseInfoEditForm.valid()){
			var formData = form2Obj(baseInfoEditForm);
			submitAjaxHandler(getServerUrl().companyMangercenter.saveBaseInfoUrl,JSON.stringify(formData),function(data){
                location.href = getServerUrl().companyMangercenter.toBaseInfoViewUrl;
				setCookie(COOKIE_MOBILE,formData.mobile,7);
			});
		}
	})
	//上传头像
	var headImg = $('.headImg');
	var icon2 = $('#icon2');
	uploadFile({
		elem: '#uploadHead',
		url:  getServerUrl().companyMangercenter.uploadHeadUrl,
	    accept:'image/*',
		success:function(res){
			headImg.attr('src',res.url);
          	icon2.val(res.id);
		}
	});
})