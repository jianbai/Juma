$(function() {
// Smooth scrolling

	$("#splash-scroller").click(function() {
		$('html, body').animate({
    		scrollTop: $("#home").offset().top
		}, 1000);
	});

	$("#home-scroller").click(function() {
		$('html, body').animate({
			scrollTop: $("#section1").offset().top
		}, 1000);
	});

	$("#section1-scroller").click(function() {
		$('html, body').animate({
			scrollTop: $("#section2").offset().top
		}, 1000);
	});

	$("#section2-scroller").click(function() {
		$('html, body').animate({
			scrollTop: $("#section3").offset().top
		}, 1000);
	});

	$("#button1").click(function() {
		$('html, body').animate({
			scrollTop: $("#form1").offset().top
		}, 1000);
	});

// Catering form

	$(".action-button").click(function() {
		$(this).toggleClass("expand-form", 1000);
		$("#home").toggleClass("full-screen", false, 1000);
	});

});