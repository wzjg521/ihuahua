$(function(){
	$('#header-r .navmenu').css('width',$('.header-top').width());
	$('#header-r .down').hover(function(){
		$(this).find('.down-menu').css({
			'background':'#fff',
			'border':'1px solid #eee',
			'border-bottom':'none'
		});
		$(this).find('.my-taobao').show();
	},function(){
		$(this).find('.down-menu').css({
			'background':'#f5f5f5',
			'border':'1px solid #f5f5f5',
			'border-bottom':'none'			
		});
		$(this).find('.my-taobao').hide();
	});

	$('.li-search .cat').click(function(){
		$('.li-search .searching').css('border','3px solid maroon');
		$('.li-search .search-btn').css('background','maroon');
		$(this).css({
			'background':'maroon',
			'color':'#fff'
		}).siblings('li').css({
			'background':'none',
			'color':'#333'
		});
	});

	$('.li-search .baby').click(function(){
		$('.li-search .searching').css('border','3px solid #f22e00');
		$('.li-search .search-btn').css('background','#f22e00');
		$(this).css({
			'background':'#f22e00',
			'color':'#fff'
		}).siblings('li').css({
			'background':'none',
			'color':'#333'
		});
	});

	$('.li-search .store').click(function(){
		$('.li-search .searching').css('border','3px solid #f22e00');
		$('.li-search .search-btn').css('background','#f22e00');
		$(this).css({
			'background':'#f22e00',
			'color':'#fff'
		}).siblings('li').css({
			'background':'none',
			'color':'#333'
		});
	});
});