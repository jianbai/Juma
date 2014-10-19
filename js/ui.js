$(document).ready(function() {

// State

	var state1 = true;
	var state2 = true;

// Hide catering forms

	$("#catering1").hide();
	$("#catering2").hide();

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

		if (state1) {
			$("#catering1").show("blind", 400);
		} else {
			$("#catering1").hide("blind", 400);
		}

		state1 = !state1;
	});

	$("#button2").click(function() {
		$('html, body').animate({
			scrollTop: $("#form2").offset().top
		}, 1000);

		if (state2) {
			$("#catering2").show("blind", 400);
		} else {
			$("#catering2").hide("blind", 400);
		}

		state2 = !state2;
	});

// Catering form

	$(".action-button").click(function() {
		$(this).toggleClass("expand-form", 1000);
	});

});