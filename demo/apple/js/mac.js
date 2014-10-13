$(function(){
	var rand=Math.floor(Math.random()*10);
	$('#mac_random img').css('display','none');
	$('#mac_random img').eq(rand).css('display','block');	
	$('#mac_random').hover(function(){	
		var rand2=Math.floor(Math.random()*10);	
		$('#mac_random img').css('display','none');
		$('#mac_random img').eq(rand2).css('display','block');
	},function(){
		var rand3=Math.floor(Math.random()*10);
		$('#mac_random img').css('display','none');
		$('#mac_random img').eq(rand3).css('display','block');
	})
})