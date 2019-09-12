(function( $ ) {
	"use strict";
	var jQuery;
	
	if (window.jQuery === undefined) {

	} else {
	    jQuery = window.jQuery;
	    
	    jQueryLoaded();
	}

	function jQueryLoaded(){

		jQuery( document ).ready(function() {

			var scriptTags = document.getElementsByTagName('iframe');
			
			for(var i = 0; i < scriptTags.length; i++) {
				
				var scriptTag = scriptTags[i];
				
                if (scriptTag.src.match(/(youtube|youtu|vimeo|openload|clipwatching|businessnewsstories|entervideo|ibb|jetload|flix555|flashx|vidoza|vidcloud|streamplay|vidup|vidtodo|vshare|speedvid|speedvideo|vk|ok|vidcloud|uqload|rapidvideo|fruithosts|vivo|vev|filebebo|vidto|clipwatching|upvid|oload|streamango|streamcherry|dailymotion|kickstarter)\.(com|co|net|org|stream|se|eu|sx|io|ru|to|me|tv|online|download|be)\/((watch\?v=([-\w]+))|(video\/([-\w]+))|(projects\/([-\w]+)\/([-\w]+))|([-\w]+))/)) { 

					addVideoLeAdClickAds(scriptTag);
		
				}
			}

			jQuery( ".video-LeAdClick-dismiss-btn" ).on( "click", function(e) {
				
				e.preventDefault();
				if( jQuery(this).parent().hasClass('video-LeAdClick-front') ){
					jQuery(this).parent().hide(1000);
				}else if( jQuery(this).parent().parent().hasClass('video-LeAdClick-front') ){
					jQuery(this).parent().parent().hide(1000);
				}
			});

		});
	}

	function addVideoLeAdClickAds(scriptTag){
		jQuery(scriptTag).wrap( "<div class='video-LeAdClick-wrapper'></div>" );

		var videoLeAdClickInnerContent = '<div class="video-LeAdClick-front">';

		if( VideoLeAdClickAds.LeAdClick_close_button == 1 || VideoLeAdClickAds.LeAdClick_close_button == 'on' )
			videoLeAdClickInnerContent += '<a href="#" class="video-LeAdClick-dismiss-btn video-LeAdClick-dismiss">&times;</a>';

		videoLeAdClickInnerContent += '<div class="video-LeAdClick-content-holder">';

		videoLeAdClickInnerContent += VideoLeAdClickAds.LeAdClick_inner_html + '</div></div>';					

		jQuery('.video-LeAdClick-wrapper').append(videoLeAdClickInnerContent);
	}
	
})( jQuery );
