$(function(){
	$('#tech_banner').hover(function(){
		$('.prev,.next').fadeIn();
	},
	function(){
		$('.prev,.next').fadeOut();
	})
	$('#slides').slides({
		preload: true,
		preloadImage: 'img/loading.gif',
		play: 5000,
		pause: 2500,
		hoverPause: true
	});
})