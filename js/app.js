$(document).ready(function() {

$(".name").click(function() {
	$('html,body').animate( {
		scrollTop: $("#background").offset().top
    } , 1500);
});

$(".nav1, .menu1").click(function() {
	$('html,body').animate( {
		scrollTop: $(".projects").offset().top - 70
    } , 1500);
});

$(".nav2, .menu2").click(function() {
	$('html,body').animate( {
		scrollTop: $(".about-me").offset().top - 70
    } , 1500);
});

$(".nav3, .menu3").click(function() {
	$('html,body').animate( {
		scrollTop: $(".contact").offset().top - 70
    } , 1500);
});

$('.menu-icon, .close-icon').on('click', function() {
	if($('.menu-overlay').is(':hidden')) {
		$('.menu-overlay').animate({width:'toggle'});
		$('.menu-icon').animate({height:'toggle'});
		$('.close-icon').delay(500).animate({width: 'toggle'});
	}
	else if($('.menu-overlay').is(':visible')) {
		$('.menu-overlay').animate({width:'toggle'});
		$('.close-icon').animate({width: 'toggle'});
		$('.menu-icon').delay(500).animate({height: 'toggle'});
	}
});

$('.menu1, .menu2, .menu3').on('click', function() {
	$('.menu-overlay').hide();
	$('.close-icon').animate({width: 'toggle'});
	$('.menu-icon').delay(500).animate({height: 'toggle'});
});

});