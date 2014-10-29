$(document).ready(function() {

// Smooth scrolling

	$('#group1-scroller').click(function() {

		$('.parallax').animate({
			scrollTop: $('#group2').offset().top + $('.parallax').scrollTop()
		}, 700);

	});

	$('#group2-scroller').click(function() {

		$('.parallax').animate({
			scrollTop: $('#group3').offset().top + $('.parallax').scrollTop()
		}, 700);

	});

	$('#group4-scroller').click(function() {

		$('.parallax').animate({
			scrollTop: $('#group5').offset().top + $('.parallax').scrollTop()
		}, 700);

	});

	$('#group6-scroller').click(function() {

		$('.parallax').animate({
			scrollTop: $('#group7').offset().top + $('.parallax').scrollTop()
		}, 700);

	});

// Catering forms

	var button1 = $('#button1');
	var container1 = $('#group2');
	var button2 = $('#button2');
	var container2 = $('#group8');
	var formHeight;

	var icons = { 
		header: "fa fa-caret-right",
    	activeHeader: "fa fa-caret-down"
    	};

	$('#button1').accordion({
		collapsible: true,
		active: false,
		animate: {
			duration: 700,
			easing: 'swing'
		},
		icons: icons,
		beforeActivate: function( event, ui ) {
			formHeight = $('.form').height();
		}
	});

	$('#accordion1').click(function() {
		var containerHeight = container1.height();

		if (typeof isOpen(button1) == 'boolean') {
			container1.animate({
				height: containerHeight - formHeight
			}, 700, 'swing');
		} else {
			container1.animate({
				height: containerHeight + formHeight
			}, 700, 'swing');
		}

		$('.parallax').animate({
			scrollTop: $('#button1').offset().top + $('.parallax').scrollTop() - 15,
			easing: 'swing'
		}, 700);
	})

	$('#button2').accordion({
		collapsible: true,
		active: false,
		animate: {
			duration: 700,
			easing: 'swing'
		},
		icons: icons,
		beforeActivate: function( event, ui ) {
			formHeight = $('.form').height();
		}
	});

	$('#accordion2').click(function() {
		var containerHeight = container2.height();

		console.log(formHeight);
		console.log(containerHeight);

		if (typeof isOpen(button2) == 'boolean') {
			container2.animate({
				height: containerHeight - formHeight
			}, 700, 'swing');
		} else {
			container2.animate({
				height: containerHeight + formHeight
			}, 700, 'swing');
		}

		$('.parallax').animate({
			scrollTop: $('#button2').offset().top + $('.parallax').scrollTop() - 15,
			easing: 'swing'
		}, 700);
	})

	function isOpen(button) {
		return button.accordion('option', 'active');
	}

});