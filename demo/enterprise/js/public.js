$(function(){
	$('#nav_bar ul li').hover(function(){
		$(this).css('background','url(images/qiye.png) repeat-x 0 -240px');
		$(this).find('.down_menu').stop().slideDown('fast');		
	},function(){
		$(this).css('background','url(images/qiye.png) no-repeat 123px 14px');
		$(this).find('.down_menu').stop().slideUp('fast');		
	});
	$('.down_menu li').hover(function(){
		$(this).css('background','#005e98');
		$(this).find('a').css('color','#fff');
	},function(){
		$(this).css('background','none');
		$(this).find('a').css('color','#393838');
	})

	
	$('.box_skitter_large').css({width:1002,height:325}).skitter({
		theme:'clean',
		numbers_align:'right',
		label:false,
		with_animations:['cubeShow','blindWidth', 'showBarsRandom', 'upBars','hideBars', 'horizontal','circlesRotate', 'glassCube','cubeStopRandom','directionLeft', 'cut', 'random', 'blind', 'directionTop','fadeFour', 'paralell', 'tube','showBars', 'cubeSize']
	});

	
		
});