$(document).ready(function() {
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

	$("#button2").click(function() {
		$('html, body').animate({
			scrollTop: $("#form2").offset().top
		}, 1000);
	});

// Catering form
	// $(".action-button").mouseover(function() {
	// 	height = $("#home").css("height");
	// 	width = $("#home").css("width");
	// 	$("#home").toggleClass("full-screen", false);
	// });

	$(".action-button").click(function() {
		$(this).toggleClass("expand-form", 1000);
	});

});