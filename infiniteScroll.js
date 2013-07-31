/* 
 * Infinite Scroll v1
 *
 * Copyright (c) 2013, Sandi Rosyandi
 */
 
jQuery.fn.infiniteScroll = function(options){
	iSOptions = jQuery.extend({
		container: $(this),
		nextSelector: 'url:last',
		dataNextSelector: 'href', 
		resultWord: 'done',
		loading: '<div class="loading" style="text-align:center;">Loading...</div>',
		classLoading: 'loading',
		done: '<div style="text-align:center;">It\'s done.</div>'
	}, options);
	
	var success = true;
	$(window).scroll(function(){
		if(($(window).scrollTop() == ($(document).height() - $(window).height())) && (success)){
			success = false;
			$("."+iSOptions.nextSelector).after(iSOptions.loading);
			var url = $("."+iSOptions.nextSelector).data(iSOptions.dataNextSelector);
			$.ajax({
				type:"GET",
				url:url,
				success:function(result){
					if(result==iSOptions.resultWord){
						$("."+iSOptions.nextSelector).after(iSOptions.done);
						success = false;
					}
					else{
						$(iSOptions.container).append(result);
						success = true;						
					}
					$("."+iSOptions.classLoading).remove();
				}
			});
		}
	});
}