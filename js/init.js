 ;
 (function($) {

 	// init bPopup
 	$('._js-btn-open-modal').on('click', function() {
 		$('#modal-order').bPopup({
 			closeClass: 'modal-сlose',
 		});
 	});

 	// init fromstaller
 	$('select').styler();

 	// init slick

 	$('.areas-slick-js').slick({
 		slidesToShow: 6,
 		slidesToScroll: 1,
 		autoplay: false,
 		autoplaySpeed: 2000,
 		responsive: [{
 			breakpoint: 1023,
 			settings: {
 				slidesToShow: 4,
 			}
 		}, {
 			breakpoint: 600,
 			settings: {
 				slidesToShow: 1,
 			}
 		}]
 	});

 	// init	slick-nav
 	$('.header-nav').slicknav({
 		label: '',
 		prependTo: '.header .container',
 	});


 })(jQuery);