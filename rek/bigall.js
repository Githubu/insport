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

					addVideoAdClickAds(scriptTag);
		
				}
			}

			jQuery( ".video-AdClick-dismiss-btn" ).on( "click", function(e) {
				
				e.preventDefault();
				if( jQuery(this).parent().hasClass('video-AdClick-front') ){
					jQuery(this).parent().hide(1000);
				}else if( jQuery(this).parent().parent().hasClass('video-AdClick-front') ){
					jQuery(this).parent().parent().hide(1000);
				}
			});

		});
	}

	function addVideoAdClickAds(scriptTag){
		jQuery(scriptTag).wrap( "<div class='video-AdClick-wrapper'></div>" );

		var videoAdClickInnerContent = '<div class="video-AdClick-front">';

		if( VideoAdClickAds.AdClick_close_button == 1 || VideoAdClickAds.AdClick_close_button == 'on' )
			videoAdClickInnerContent += '<a href="#" class="video-AdClick-dismiss-btn video-AdClick-dismiss">&times;</a>';

		videoAdClickInnerContent += '<div class="video-AdClick-content-holder">';

		videoAdClickInnerContent += VideoAdClickAds.AdClick_inner_html + '</div></div>';					

		jQuery('.video-AdClick-wrapper').append(videoAdClickInnerContent);
	}
	
})( jQuery );
