$(function(){
	//申请成为品牌合作方
	$('.partner').click(function(){
		partnerLayer =openWindow({
			title:['申请成为品牌合作方'],
			content: getServerUrl().index.toPartnerUrl
		})
	})
    //解决name相同validate不检测是问题
	if ($.validator) {
        //fix: when several input elements shares the same name, but has different id-ies....
        $.validator.prototype.elements = function() {
            var validator = this,
                rulesCache = {};
            // select all valid inputs inside the form (no submit or reset buttons)
            // workaround $Query([]).add until http://dev.jquery.com/ticket/2114 is solved
            return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                // 这里加入ID判断
                var elementIdentification = this.id || this.name; ! elementIdentification && validator.settings.debug && window.console && console.error("%o has no id nor name assigned", this);
                // select only the first element for each name, and only those with rules specified
                if (elementIdentification in rulesCache || !validator.objectLength($(this).rules())) return false;
                rulesCache[elementIdentification] = true;
                return true;
            });
        };
        jQuery.validator.setDefaults({
            errorPlacement: function(error, element) {
                $( element ).parent().append( error );
            }
        });
    }
})