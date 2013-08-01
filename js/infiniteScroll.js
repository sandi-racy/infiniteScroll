/* 
 * Infinite Scroll v1.1
 * http://github.com/sandi-racy/infiniteScroll
 *
 * Copyright (c) 2013, Sandi Rosyandi
 */
 
$.fn.infiniteScroll = function(options){
	iSOptions = $.extend($.fn.infiniteScroll.defaults, options);
	iSOptions.container = this;
	var success = iSOptions.enable;
	$(window).scroll(function(){
		var startAt = iSOptions.startAt * ($(document).height() - $(window).height());
		if(($(window).scrollTop() >= startAt) && (success)){
			iSOptions.onLoad();
			success = false;
			var url = $("."+iSOptions.classNextSelector).data(iSOptions.dataAttributeNextSelector);
			$.ajax({
				type:"GET",
				url:url,
				success:function(result){
					if(result==iSOptions.resultWord){
						var result = $(iSOptions.done).hide();
						if(iSOptions.animation == 'fade')
							result.appendTo($(iSOptions.container)).fadeIn(iSOptions.animationSpeed);
						else
							result.appendTo($(iSOptions.container)).slideDown(iSOptions.animationSpeed);							
						iSOptions.onFinish();
						success = false;
					}
					else{
						var result = $(result).hide();
						if(iSOptions.animation == 'fade')
							result.appendTo($(iSOptions.container)).fadeIn(iSOptions.animationSpeed);
						else
							result.appendTo($(iSOptions.container)).slideDown(iSOptions.animationSpeed);							
						iSOptions.success();
						success = true;						
					}
					$("."+iSOptions.classLoading).remove();
				}
			});
		}
	});
};

/*Default Properties*/
$.fn.infiniteScroll.defaults = {
	classNextSelector: 'url:last',
	dataAttributeNextSelector: 'href',
	enable: true,
	resultWord: 'done',
	loading: '<div class="loading" style="text-align:center;">Loading...</div>',
	classLoading: 'loading',
	startAt: 1,
	animation: 'fade',
	animationSpeed: 'slow',
	done: '<div style="color:#f00; text-align:center;">It\'s done.</div>',
	
	/* Event Hooks */
	onLoad: function(){
		$("."+this.classNextSelector).after(this.loading);		
	},
	success: function(){},
	onFinish: function(){}
};

/* Infinite Scroll No Conflict*/
var old = $.fn.infiniteScroll;
$.fn.infiniteScroll.noConflict = function(){
	$.fn.infiniteScroll = old;
	return this;
}