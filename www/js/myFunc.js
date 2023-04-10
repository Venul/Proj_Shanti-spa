$(document).ready(function(){



	$('#menu_about').on('click', function(event) {
	    var target = $('#about');
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	$('#menu_pricing').on('click', function(event) {
	    var target = $('#pricing');
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	$('#logo').on('click', function(event) {
	    var target = $('#sections');
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	$('#menu_customers').on('click', function(event) {
	    var target = $('#sub_customers');
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	$('#menu_faq').on('click', function(event) {
	    var target = $('#faq');
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});


	$('#footer_home').on('click', function(event) {
	    var target = $('#sections');
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	$('#footer_about').on('click', function(event) {
	    var target = $('#about');
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	$('#footer_pricing').on('click', function(event) {
	    var target = $('#pricing');
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	$('#footer_faq').on('click', function(event) {
	    var target = $('#faq');
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	// $('#footer_contact').on('click', function(event) {
	//     var target = $('#contact');
	//     if( target.length ) {
	//         event.preventDefault();
	//         $('html, body').stop().animate({
	//             scrollTop: target.offset().top
	//         }, 1000);
	//     }
	// });

	$('.apply').on('click', function(event) {
	    var target = $('#contact');
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});
});