$(document).ready(function() {

$(window).load(function() {
    var fixedHeight = $('.background-image').outerHeight(true);
	$('.content').css('margin-top', fixedHeight + 'px');
	$('html,body').animate({scrollTop:0});
	$('.logo').css('display', 'none');
	$('.menu-icon').css('margin-top', '12px');
});

$(window).scroll(function() {
	if($('.logo').is(':hidden')) {
		$('.logo').css('display', 'table-cell');
		$('.main-logo').fadeOut(1000);
		$('.filler').delay(1000).fadeIn(1000);
	}
});

var services = function() {
	$('html,body').animate( {
		scrollTop: $(".services").offset().top - 60
    } , 1500);
};

var about = function() {
	$('html,body').animate( {
		scrollTop: $(".about").offset().top - 60
    } , 1500);
};

var contact = function() {
	$('html,body').animate( {
		scrollTop: $(".contact").offset().top -60
    } , 1500);
    $('.logo').css('display', 'block');
	$('.main-logo').fadeOut(1000);
	$('.filler').delay(1000).fadeIn(1000);
	if ($(window).width() > 800) {
		$('.contact').css('width', '70%').css('margin-left', '30%');
	};
};

var logo = function() {
	location.reload();
}

$(".logo").click(function() {
    $('html,body').scrollTop(0);
    $(".whatwedo, .services, .about, .contact").show();
    logo();
});

$(".nav1, .menu1").click(function() {
    $(".whatwedo, .about, .contact").hide();
    $(".services").show();
    $(".background-image").show();
    $(".order-chaos-image").hide();
    services();
});

$(".nav2, .menu2").click(function() {
    $(".whatwedo, .services, .contact").hide();
    $(".about").show();
    $(".background-image").show();
    $(".order-chaos-image").hide();
    about();
});

$(".nav3, .menu3").click(function() {
    $(".whatwedo, .services, .about").hide();
    $(".contact").show();
    $(".background-image").hide();
    $(".order-chaos-image").show();
    contact();
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