/* 
 * Infinite Scroll v1
 *
 * Copyright (c) 2013, Sandi Rosyandi
 */
 
jQuery.fn.infiniteScroll = function(status, options){
	var tempOption = ($.type(status) == 'string' ? options : status);
	iSOptions = jQuery.extend({
		container: this,
		classNextSelector: 'url:last',
		dataclassNextSelector: 'href', 
		resultWord: 'done',
		loading: '<div class="loading" style="text-align:center;">Loading...</div>',
		classLoading: 'loading',
		startAt: 1,
		animation: 'fade',
		animationSpeed: 'slow',
		done: '<div style="color:#f00; text-align:center;">It\'s done.</div>'
	}, tempOption);
	var success = (status == 'disable' ? false : true);
	$(window).scroll(function(){
		var startAt = iSOptions.startAt * ($(document).height() - $(window).height());
		if(($(window).scrollTop() >= startAt) && (success)){
			success = false;
			$("."+iSOptions.classNextSelector).after(iSOptions.loading);
			var url = $("."+iSOptions.classNextSelector).data(iSOptions.dataclassNextSelector);
			$.ajax({
				type:"GET",
				url:url,
				success:function(result){
					if(result==iSOptions.resultWord){
						if($.type(iSOptions.done) == 'string'){
							var result = $(iSOptions.done).hide();
							if(iSOptions.animation == 'fade')
								result.appendTo($(iSOptions.container)).fadeIn(iSOptions.animationSpeed);
							else
								result.appendTo($(iSOptions.container)).slideDown(iSOptions.animationSpeed);							
						}
						else if($.type(iSOptions.done) == 'function')
							iSOptions.done();
						success = false;
					}
					else{
						var result = $(result).hide();
						if(iSOptions.animation == 'fade')
							result.appendTo($(iSOptions.container)).fadeIn(iSOptions.animationSpeed);
						else
							result.appendTo($(iSOptions.container)).slideDown(iSOptions.animationSpeed);							
						success = true;						
					}
					$("."+iSOptions.classLoading).remove();
				}
			});
		}
	});
}