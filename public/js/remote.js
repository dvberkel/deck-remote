(function($, undefined){
    $(function(){
	var action = setInterval(function(){
	    $.deck("next");
	}, 1000);
    });
})(jQuery);