wow = new WOW();
wow.init();
$(document).ready(function(e) {

$('#video-icon').on('click',function(e){
e.preventDefault();
$('.video-popup').css('display','flex');
$('.iframe-src').slideDown();
});
$('.video-popup').on('click',function(e){
var $target = e.target.nodeName;
var video_src = $(this).find('iframe').attr('src');
if($target != 'IFRAME'){
$('.video-popup').fadeOut();
$('.iframe-src').slideUp();
$('.video-popup iframe').attr('src'," ");
$('.video-popup iframe').attr('src',video_src);
}
});

$('.slider').bxSlider({
pager: false
});
});

$(window).on("scroll",function () {

var bodyScroll = $(window).scrollTop(),
navbar = $(".navbar");

if(bodyScroll > 50){
$('.navbar-logo img').attr('src','images/logo1.jpg');
navbar.addClass("nav-scroll");

}else{
$('.navbar-logo img').attr('src','images/logo2.png');
navbar.removeClass("nav-scroll");
}

});
$(window).on("load",function (){
var bodyScroll = $(window).scrollTop(),
navbar = $(".navbar");

if(bodyScroll > 50){
$('.navbar-logo img').attr('src','images/logo2.png');
navbar.addClass("nav-scroll");
}else{
$('.navbar-logo img').attr('src','images/logo1.jpg');
navbar.removeClass("nav-scroll");
}

$.scrollIt({

easing: 'swing',      // the easing function for animation
scrollTime: 900,       // how long (in ms) the animation takes
activeClass: 'active', // class given to the active nav element
onPageChange: null,    // function(pageIndex) that is called when page is changed
topOffset: -63
});
});
$(".hero-slider").owlCarousel({
		loop:true,
		autoplay:true,
		smartSpeed: 500,
		autoplayTimeout:3500,
		singleItem: true,
		autoplayHoverPause:true,
		items:1,
		nav:true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		dots:false,
	});
$('.article-slider').owlCarousel({
		autoplay:true,
		autoplayTimeout:4000,
		margin:15,
		smartSpeed:300,
		autoplayHoverPause:true,
		loop:true,
		nav:true,
		dots:false,
		responsive:{
			300: {
				items:1,
			},
			480: {
				items:2,
			},
			768: {
				items:2,
			},
			1170: {
				items:4,
			},
		}
	});
