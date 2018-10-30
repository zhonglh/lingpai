if(DEBUG){
    var basePath = 'http://localhost/lingpai';
}else{
    var basePath = ctx;
}


var prodUrl = {
    index : {
        toIndexUrl : basePath + '/index',
        toPartnerUrl : basePath + '/index/toPartner',
        savePartnerUrl : basePath + '/index/partner'
	},
    login : {
        toLoginUrl : basePath + '/login/toLogin',
        pwLoginUrl : basePath + '/login/login',
        smsLoginUrl: basePath + '/login/smsLogin',
        registerUrl : basePath + '/member/reg',
        changePasUrl : basePath + '/login/changePass',
        findPasUrl : basePath + '/login/findPass',
    },
    sms : {
        smsLoginUrl : basePath + '/member/pwdcode',
        smsRegisterUrl : basePath + '/member/code',
        smsForgetPasUrl : basePath + '/member/pwdcode'
    },
    common:{
        toWithdrawalUrl :"",
        jobInfoUrl : "",
        cityInfoUrl:"",
        skillsUrl:""
    },
    personalMangercenter : {
        toBaseInfoViewUrl : '',
        toPayInfoViewUrl :'',
        toResumeInfoViewUrl : '',
        toRealNameAnthViewUrl : '',
        toCompanyUrl:'',
        toIncomeDetailUrl:'',
        toApplyForJobListUrl:'',
        saveRealAuthUrl : '',
        saveBaseInfoUrl:basePath +'/user/base',
        saveResumeInfoUrl : '',
        saveApplyForJobUrl : '',
        savePayInfoUrl :'',
        saveWithdrawalUrl :  basePath +'/pay/withdraw',
        companyInfoUrl:'',
        uploadHeadUrl :'',
        uploadAnthUrl :'',
        collectionInfoUrl:'',
        incomeInfoUrl:'',
        applyForInfoUrl:""

    },
    companyMangercenter : {
        toBaseInfoViewUrl : '',
        toCompanyInfoViewUrl:'',
        toInvoiceListUrl:'',
        toInvoiceUrl:'',
        toMyProjectUrl:'',
        saveBaseInfoUrl :basePath +'/user/base',
        saveCompanyInfoUrl:basePath +'/userCompany/userCompany',
        saveTaskInfoUrl:'',
        saveInvoiceInfoUrl:basePath +'/invTitle/invInfo',
        collectionInfoUrl:basePath +'/user/talent',
        projectInfoUrl:'',
        invoiceInfoUrl:'',
        costCenterInfoUrl:basePath +'/user/money',
        uploadHeadUrl :'',
        companyInfoUrl:''
    }
};


var debugUrl = {
    index : {
        toIndexUrl : basePath +'/html/index/index.html',
        toPartnerUrl : basePath +'/html/index/partner.html',
        savePartnerUrl : basePath +'/json/request.json'
    },
    login : {
        toLoginUrl : basePath +'/html/index/login.html',
        pwLoginUrl : basePath +'/json/request.json',
        smsLoginUrl: basePath +'/json/request.json',
        registerUrl : basePath +'/json/request.json',
        changePasUrl : basePath +'/json/request.json',
        findPasUrl : basePath +'/json/request.json'
    },

    sms : {
        smsLoginUrl : basePath +'/json/request.json',
        smsRegisterUrl : basePath +'/json/request.json',
        smsForgetPasUrl : basePath +'/json/request.json'
    },
    common:{
        toWithdrawalUrl : basePath +'/html/mangercenter/withdrawal.html',
        jobInfoUrl : basePath +"/json/job.json",
        cityInfoUrl:basePath +"/json/city.json",
        skillsUrl:basePath +"/json/skills.json"
    },
    personalMangercenter : {
        toBaseInfoViewUrl : basePath +'/html/mangercenter/personal/baseInfoView.html',
        toPayInfoViewUrl : basePath +'/html/mangercenter/personal/payInfoView.html',
        toResumeInfoViewUrl : basePath +'/html/mangercenter/personal/positionInfoView.html',
        toRealNameAnthViewUrl : basePath +'/html/mangercenter/personal/realNameAnthView.html',
        toCompanyUrl:basePath +'/html/mangercenter/personal/selectCompany.html',
        toIncomeDetailUrl:basePath +'/html/mangercenter/personal/incomeDetail.html',
        toApplyForJobListUrl:basePath +'/html/mangercenter/personal/applyForJobList.html',
        saveRealAuthUrl : basePath +'/json/request.json',
        saveBaseInfoUrl:basePath +'/json/request.json',
        saveResumeInfoUrl : basePath +'/json/request.json',
        saveApplyForJobUrl : basePath +'/json/request.json',
        savePayInfoUrl :basePath +'/json/request.json',
        saveWithdrawalUrl : basePath +'/json/request.json',
        companyInfoUrl:basePath +'/json/request.json',
        uploadHeadUrl :basePath +'/json/request.json',
        uploadAnthUrl : basePath +'/json/request.json',
        collectionInfoUrl:basePath +"/json/myCollection.json",
        incomeInfoUrl:basePath +"/json/myCollection.json",
        applyForInfoUrl:basePath +"/json/applyForInfo.json"
    },
    companyMangercenter : {
        toBaseInfoViewUrl : basePath +'/html/mangercenter/company/baseInfoView.html',
        toCompanyInfoViewUrl:basePath +'/html/mangercenter/company/companyInfoView.html',
        toInvoiceListUrl:basePath +'/html/mangercenter/company/invoiceList.html',
        toInvoiceUrl:basePath +'/html/mangercenter/company/invoiceEdit.html',
        toMyProjectUrl:basePath +'/html/mangercenter/company/myProject.html',
        saveBaseInfoUrl :basePath +'/json/request.json',
        saveCompanyInfoUrl:basePath +'/json/request.json',
        saveTaskInfoUrl:basePath +'/json/request.json',
        saveInvoiceInfoUrl:basePath +'/json/request.json',
        collectionInfoUrl:basePath +'/json/myCollection.json',
        projectInfoUrl:basePath +'/json/myCollection.json',
        invoiceInfoUrl:basePath +'/json/myCollection.json',
        costCenterInfoUrl:basePath +'/json/myCollection.json',
        uploadHeadUrl :basePath +'/json/request.json',
        companyInfoUrl:basePath +'/json/applyForInfo.json'
    }
};


function getServerUrl(){
	if(DEBUG){
		return debugUrl;
	}else {
		return prodUrl;
	}
}