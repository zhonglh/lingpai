$(function(){
	var editAccount = $('.editAccount');
	var accountInput = $('.accountInput');
	var totalAmount = $('#totalAmount');
	editAccount.click(function(){
		accountInput.addClass('inputBorder');
		accountInput.removeAttr("disabled");
	})
	var accountInputIsEmpty = false;
	accountInput.blur(function(){
		accountInput.removeClass('inputBorder');
		accountInput.attr('disabled','true');
		totalAmount.val($(this).val());
		if(isEmpty(accountInput.val())){
			accountInputIsEmpty = true;
			accountInput.addClass('withdrawalInput');
		}else{
			accountInputIsEmpty = false;
			accountInput.removeClass('withdrawalInput');
		}
	})

	var withdrawalForm = $('#withdrawalForm');
	$("#withdrawalBtn").click(function(){
		if(withdrawalForm.valid()){
			if(accountInputIsEmpty){
				return;
			}
			var formData = form2Obj(withdrawalForm);
			submitAjaxHandler(getServerUrl().personalMangercenter.saveWithdrawalUrl,JSON.stringify(formData),function(data){
                showSuccess("提现成功!");
				closeWindow(top.withdrawalLayer);
			},top.withdrawalLayer);
		}
	})
})