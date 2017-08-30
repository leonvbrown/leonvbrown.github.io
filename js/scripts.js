jQuery(document).ready(function ($) {
	 "use strict"

	 // OnePageNav
	$('.main-menu').onePageNav({
	    currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 500,
	    scrollThreshold: 1,
	    filter: '',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	     
	        	$('.sidebar-menu-icon').trigger('click');
	        	if($(window).width() < 801){
	        		$('.cssmenu ul').slideUp().removeClass('open');
	        	}
	        	
	           
	    }, 
	    end: function() {
	
	         
	    },
	    scrollChange: function($currentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section

	        
	    }
	});

	$('.button-group').localScroll({
        duration: 1000
    });

	// $('.parallax-window').parallax({imageSrc: 'images/slider-bg.jpg'});

    
    // OwlCarousel gallery Slider
	if ($('.image-gallary').length) {
		$('.image-gallary').owlCarousel({
			items: 5,
			loop: true,
			dots: false,
			nav: false,
			navText: ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
			smartSpeed: 2000,
			padding: 0,
			margin: 0,
			center: true,
			autoplay: false,
			responsiveClass: true,
	      	autoplayHoverPause:true,
			responsive: {
				0: {
					items: 2
				},
				480: {
					items: 2
				},
				768: {
					items: 3
				},
				992: {
					items: 3,
				},
			}
		});
	}

	// Magnific Popup
	$('.single-post-item, .gallery-box').magnificPopup({
		delegate: '.full-size',
		type: 'image',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			easing: 'ease-in-out',
			duration: 300,
			opener: function(element) {
				return element.closest('.single-post-item, .gallery-box').find('img');
			}
		}
	});


	// Magnific Popup Iframe

	$('.full-size-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});


	// Scroll To Top
	if ($('.scroll-top').length > 0) {
		$(".scroll-top").click(function(){
			$('html,body').animate({scrollTop:0},1000);
		});

		$(window).scroll(function(){
			if($(window).scrollTop() > 400){
				$(".scroll-top").fadeIn();
			}
			else{
				$(".scroll-top").fadeOut();
			}
			return false;
		});
	}

	


});
// End Ready Function