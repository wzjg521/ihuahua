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

	$('#serve .infor').find('input').hover(function(){
		
		$(this).css('background','url(img/apple_27.png) no-repeat right top');
	},function(){
		$(this).css('background','url(img/apple_27.png) no-repeat left top');
	})

	$('#nav li').hover(function(){
		$(this).css('opacity','0.5');
	},function(){
		$(this).css('opacity','1');
	})
	$('#nav dl').hover(function(){
		$(this).css('background','url(img/li_hover.jpg) repeat-x left top');
	},function(){
		$(this).css('background','#fff');
	})

	var n=0,
	total=Math.floor($('#banner li').length / 4);
	
	$('#banner .next_ad').click(function(){
		$('#banner .prev_ad').css('opacity','1');
		if(n==1){
			$(this).css('opacity','0.2');
		}		
		if(n==total-1)return;
		n++;
		$('#banner .banner_img').animate({
			'left':-980*n+'px'
		},'slow');		
	});
	$('#banner .prev_ad').click(function(){
		$('#banner .next_ad').css('opacity','1');
		if(n==1){
			$(this).css('opacity','0.2');
		}
		if(n==0)return;
		n--;			
		$('#banner .banner_img').animate({
			'left':-980*n+'px'
		},'slow');				
	});
	if(n==0){
		$('#banner .prev_ad').css('opacity','0.2')
	}

	$('#banner .banner_img li').hover(function(){
		$(this).find('img').stop().animate({
			'opacity':'0.1'
		},'fast');
		$(this).find('.inner_li').stop().fadeIn();
	},function(){
		$(this).find('img').stop().animate({
			'opacity':'1'
		},'fast');
		$(this).find('.inner_li').stop().fadeOut();
	})


/*	var n=1,
	total=Math.floor($('#banner li').length / 4);
	 $('#banner .next_ad').click(function(){
		if(n==total)return;
		
		$('#banner .banner_img').animate({
			'left':-980*n+'px'
		});
		n++;
				
	});
	$('#banner .prev_ad').click(function(){
		if(n==1)return;	
		n--;
		$('#banner .banner_img').animate({
			'left':-980*(n-1)+'px'
		});
		
			
		
	});
*/
	
})