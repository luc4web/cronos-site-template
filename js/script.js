					


				$(document).ready(function(){
	                 //responsive menu
	                 $nav = $("#list-nav");
	                 $(".mobile-menu").click(function(){
	                     $nav.slideToggle("fast");
	                 });
                      $(window).resize(function(){
						  if( $(window).width() > 768  ){
						     $nav.show();
						  }else {
						     $nav.hide();
						  }

	  				  });



	                    //Nivo Slider  
						$('#slider').nivoSlider({
							effect: 'fade',               // Specify sets like: 'fold,fade,sliceDown'
							slices: 15,                     // For slice animations
							boxCols: 8,                     // For box animations
							boxRows: 4,                     // For box animations
							animSpeed: 500,                 // Slide transition speed
							pauseTime: 1600,                // How long each slide will show
							startSlide: 0,                  // Set starting Slide (0 index)
							directionNav: false,             // Next & Prev navigation
							controlNav: false,               // 1,2,3... navigation
							controlNavThumbs: false,        // Use thumbnails for Control Nav
							pauseOnHover: true,             // Stop animation while hovering
							manualAdvance: false,           // Force manual transitions
							randomStart: false,             // Start on a random slide
							beforeChange: function(){},     // Triggers before a slide transition
							afterChange: function(){},      // Triggers after a slide transition
							slideshowEnd: function(){},     // Triggers after all slides have been shown
							lastSlide: function(){},        // Triggers when last slide is shown
							afterLoad: function(){}         // Triggers when slider has loaded
						});				
					   




                 



						//Back to Top
						
							// Show or hide the sticky footer button
							$(window).scroll(function() {
								if ($(this).scrollTop() > 200) {
									$('.go-top').fadeIn(200);
								} else {
									$('.go-top').fadeOut(200);
								}
							});
							
							// Animate the scroll to top
							$('.go-top').click(function(event) {
								event.preventDefault();
								
								$('html, body').animate({scrollTop: 0}, 300);

	 

							})




				
                    }); //end document ready