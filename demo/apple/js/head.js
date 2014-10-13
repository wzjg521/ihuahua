$(function(){
	$('#header .text').focus(function(){
		$('#header li').animate({
			'width':'95px'
		})

		$(this).animate({
			'width':'172px',
		}).css('background','url(img/search.png) no-repeat 0 -36px')
	});

	$('#header .text').blur(function(){
		$('#header li').animate({
			'width':'104px'
		})
		$(this).animate({
			'width':'106px',
		}).css('background','url(img/search.png) no-repeat')
	});	
})