
(function ($) {

	'use string';

	/***------------ Preloader -------------***/

	$(window).on("load", function() {
		$("#preloader").fadeOut("slow");
	});

	/***------------- Back Top -------------***/

    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.btn-scroll').addClass("show");
        }else{
            $('.btn-scroll').removeClass("show");
        }
    });

    $('.btn-scroll').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

	/***-------------- Navbar --------------***/

	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 90) {
			$(".navbar").addClass("navbar-shrink");
		}
		else {
			$(".navbar").removeClass("navbar-shrink");
		}
	});

	/***--------- Navbar Collapse ----------***/

	$(".nav-link").on("click", function() {
		$(".navbar-collapse").collapse("hide");
	});

	/***---------- Features Carousel -------***/

	$('.feature-carousel').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:3,
			}
		}
	});

	/***------------- Counter --------------***/

    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

	/***------------ Screenshots -----------***/

   	// MixiTup Navigation
    $(window).on('load', function () {
        $('.portfolio-filter li').on('click', function () {
            $('.portfolio-filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio-items').length > 0) {
            var containerEl = document.querySelector('.portfolio-items');
            var mixer = mixitup(containerEl);
        }
    });

	/***------- Testimonials Carousel ------***/

	$('.testimonials-carousel').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:3,
			}
		}
	});

	/***----------- Toggle Theme -----------***/

	function toggleTheme() {
		if (localStorage.getItem("designer-theme") !== null) {
			if (localStorage.getItem("designer-theme") === "dark") {
				$("body").addClass("dark");
			}
			else {
				$("body").removeClass("dark");
			}
		}
		updateIcon();
	}

	toggleTheme();

	$(".toggle-theme").on("click", function() {
		$("body").toggleClass("dark");
		if ($("body").hasClass("dark")) {
			localStorage.setItem("designer-theme", "dark");
		}
		else {
			localStorage.setItem("designer-theme", "light");
		}
		updateIcon();
	});

	function updateIcon() {
		if ($("body").hasClass("dark")) {
			$(".toggle-theme i").removeClass("fa-moon");
			$(".toggle-theme i").addClass("fa-sun");
		}
		else {
			$(".toggle-theme i").removeClass("fa-sun");
			$(".toggle-theme i").addClass("fa-moon");
		}
	}

	$('.portfolio-items .light').simpleLightbox();

}(jQuery));