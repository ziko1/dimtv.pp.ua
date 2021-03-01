(function ($) {
    "use strict";
    
    /*----------------------------------------
	   Sticky Menu Activation
	------------------------------------------*/

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 0) {
			$('.header-sticky').addClass('sticky');
		} else {
			$('.header-sticky').removeClass('sticky');
		}
	});
	/*-----------------------------------------
		Off Canvas Mobile Menu
	-------------------------------------------*/

	$(".mobile-menu-hamburger").on('click', function () {
		$("body").addClass('fix');
		$(".mobile-menu-wrapper").addClass('open');
	});

	$(".offcanvas-btn-close,.offcanvas-overlay").on('click', function () {
		$("body").removeClass('fix');
		$(".mobile-menu-wrapper").removeClass('open');
	});
	
	/*----------------------------------------
		Responsive Mobile Menu
	------------------------------------------*/

	//Variables
	var $offCanvasNav = $('.mobile-menu, .category-menu'),
	$offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

	//Close Off Canvas Sub Menu
	$offCanvasNavSubMenu.slideUp();

	//Category Sub Menu Toggle
	$offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
	var $this = $(this);
		if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
			e.preventDefault();
			if ($this.siblings('ul:visible').length){
				$this.parent('li').removeClass('active');
				$this.siblings('ul').slideUp();
			} else {
				$this.parent('li').addClass('active');
				$this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
				$this.closest('li').siblings('li').find('ul:visible').slideUp();
				$this.siblings('ul').slideDown();
			}
		}
	});
    /*----------------------------------------
	   Slider Activation
	------------------------------------------*/

	/* Hero Slider Activation */
    var swiper = new Swiper('.hero-slider .swiper-container', {
        loop: true,
        speed: 1150,
        spaceBetween: 30,
        slidesPerView: 1,
        parallax: true,
        effect: 'slide',
		pagination: true,
		navigation: true,


        // Navigation arrows
        navigation: {
            nextEl: '.hero-slider .home-slider-next',
            prevEl: '.hero-slider .home-slider-prev'
        },
        pagination: {
            el: '.hero-slider .swiper-pagination',
			type: 'bullets',
			clickable: 'true'
		},
		// Responsive breakpoints
	});

	/* Hero Slider Activation */
	var swiper = new Swiper('.project-details-carousel .swiper-container', {
		loop: true,
		speed: 1150,
		spaceBetween: 30,
		slidesPerView: 1,
		parallax: true,
		effect: 'slide',
		pagination: true,
		navigation: true,


		// Navigation arrows
		navigation: {
			nextEl: '.project-details-carousel .project-details-slider-next',
			prevEl: '.project-details-carousel .project-details-slider-prev'
		},
		pagination: {
			el: '.project-details-carousel .swiper-pagination',
			type: 'bullets',
			clickable: 'true'
		},
		// Responsive breakpoints
	});
    
    /* ----------------------------
		Odometer Activation 
    -------------------------------*/
	if( $('.odometer').length ){

		var elemOffset = $('.odometer').offset().top;
		var winHeight = $(window).height();
		if(elemOffset < winHeight){
			$('.odometer').each(function(){
				$(this).html($(this).data('count-to'));
			});
		}
		$(window).on('scroll', function(){
			var elemOffset = $('.odometer').offset().top;
			function winScrollPosition() {
				var scrollPos = $(window).scrollTop(),
					winHeight = $(window).height();
				var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
				return scrollPosition;
			}
			if ( elemOffset < winScrollPosition()) {
				$('.odometer').each(function(){
					$(this).html($(this).data('count-to'));
				});
			}	
		});
    };
    
    /* ----------------------------
		Carousel Activation
    -------------------------------*/
    /*-- Tab Pane Carousel One --*/
    var productCarousel = new Swiper('.tab-pane-carousel .swiper-container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 1,

        pagination: {
            el: '.tab-pane-carousel .swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.tab-pane-carousel .tab-carousel-next',
            prevEl: '.tab-pane-carousel .tab-carousel-prev',
        },

		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 3,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 4,
			}
		}
	});

	/*-- Tab Pane Carousel Two --*/
	var productCarousel = new Swiper('.tab-pane-carousel-two .swiper-container', {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 1,
		observer: true,
		observeParents: true,

		pagination: {
			el: '.tab-pane-carousel-two .swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.tab-pane-carousel-two .tab-carousel-next',
			prevEl: '.tab-pane-carousel-two .tab-carousel-prev',
		},

		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 3,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 4,
			}
		}
	});
	
	/*-- Client Crousel --*/
    var productCarousel = new Swiper('.client-crousel .swiper-container', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,

        pagination: {
            el: '.client-crousel .swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.client-crousel .client-crousel-next',
            prevEl: '.client-crousel .client-crousel-prev',
        },

		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 2,
			}
		}
    });

    /*-- Brand Logo --*/
	var brandCarousel = new Swiper('.brand-logo-carousel .swiper-container', {
		loop: true,
		speed: 750,
		spaceBetween: 30,
		slidesPerView: 5,
		effect: 'slide',
		//autoplay: {},

		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
			slidesPerView: 2,
			spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
			slidesPerView: 3,
			spaceBetween: 30
			},
			// when window width is >= 768px
			768: {
			slidesPerView: 4,
			spaceBetween: 30
			},
			// when window width is >= 992px
			992: {
			slidesPerView: 5,
			spaceBetween: 30
			}
		}
	});

	/* ----------------------------
        Project Masonry Activation
    -------------------------------*/
    $(window).on('load', function () {
		// filter items on button click
		$('.messonry-button').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$(this).siblings('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
			$grid.isotope({
				filter: filterValue
			});
		});

		// init Isotope
		var $grid = $('.mesonry-list').isotope({
			percentPosition: true,
			transitionDuration: '0.7s',
			layoutMode: 'masonry',
			masonry: {
				columnWidth: '.resizer',
			}
		});
	})
	
	/* ----------------------------
        LightBox / Fancybox
    -------------------------------*/
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	/*-------------------------
        Ajax Contact Form 
    ---------------------------*/
    $(function() {

        // Get the form.
        var form = $('#contact-form');

        // Get the messages div.
        var formMessages = $('.form-messege');

        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });

	});
	
	/*----------------------------------------
		Aos Activation Js
	------------------------------------------*/

	AOS.init({
		duration: 1500, // values from 0 to 3000, with step 50ms
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		offset: 0, // offset (in px) from the original trigger point
		once: true,
		easing: 'ease',
	});
	
	/*---------------------------------
        Scroll Up
    -----------------------------------*/
    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({scrollTop: 0}, 600);
            evt.preventDefault();
        });
    }
	scrollToTop();



})(jQuery);

