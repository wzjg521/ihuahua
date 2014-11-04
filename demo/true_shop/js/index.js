$(function(){
// 头部导航的下拉菜单
	$('.nav_right li').hover(function(){
		if($(this).find('.down_menu').html()){
			$(this).find('.down_menu').show();
			$(this).addClass('down_current');
		}
	},function(){
		$(this).find('.down_menu').hide();
		$(this).removeClass('down_current');
	})
// 头部搜索框
	$('#search_nav .search_current').hover(function(){
		$(this).find('ul').show();
	},function(){
		$(this).find('ul').hide();
	})
	$('#search_nav .inner_ul').find('li').click(function(){
		var thisHtml=$(this).html();
		var currentHtml=$('#search_nav .search_current').find('span').html();
		$(this).html(currentHtml);
		$('#search_nav .search_current').find('span').html(thisHtml);
		if(thisHtml=='乐购'){
			$('#search_nav form').css('border-color','#3392e2');
			$('#search_nav .search_button').css('background','#3392e2');
		}else{
			$('#search_nav form').css('border-color','#f50');
			$('#search_nav .search_button').css('background','#f50');
		}
	})
	$('#search_nav .inner_ul').find('li').hover(function(){
		var liHtml=$(this).html();
		if(liHtml=='乐购'){
			$(this).css('color','#3392e2');
		}else{
			$(this).css('color','#f50');
		}
	},function(){
		$(this).css('color','#3c3c3c');
	})
// 头部搜索框的浮动
	scrollShowTop(200,36)
/*头部广告点击关闭*/
	$('#main .close').click(function(){
		$('#main .M_nav').hide();
	})
/*头部广告刷新随机出现不同的广告*/
	topRandom($('.M_nav').children('a'))
/*购物车出现*/
	$('.M_search').find('.me_cart').hover(function(){
		$(this).css('background','#e2e2e2');
		$(this).find('.right_arrow').css('background-position','0 -11px');
		$(this).find('.down_cart').show();
	},function(){
		$(this).css('background','#f5f5f5');
		$(this).find('.right_arrow').css('background-position','0 0');
		$(this).find('.down_cart').hide();
	})
/*侧边栏导航菜单*/
	$('#theme .goods_list').find('li').hover(function(){
		$(this).find('.slide_nav').show();
	},function(){
		$(this).find('.slide_nav').hide();
	})
/*主要轮播器图*/
	$('.one_slide #slides').slidesjs({
		width:680,
		height:320,
		play:{
			auto:true,
			effect:'fade',
			pauseOnHover: true,
         	restartDelay: 2500
		},
		effect:{
			fade:{
				speed:500,
			}
		},
		
	})
	$('.more_slide #slides').slidesjs({
		width:680,
		height:130,
		start:3,
        play: {
          auto: true,
          pauseOnHover: true,
        },
        effect:{
			slide:{
				speed:800,
			}
		},
	})
	$('.same').hover(function(){
		$(this).find('.slidesjs-previous,.slidesjs-next').stop().fadeIn();
	},function(){
		$(this).find('.slidesjs-previous,.slidesjs-next').stop().fadeOut();
	})
/*tab标签页*/
	$('#tab .tab_title').find('li').mouseover(function(){
		var tab_index=$(this).index();
		$(this).addClass('tab_current').siblings('li').removeClass('tab_current');
		$('#tab .contents').eq(tab_index).stop().show().siblings('.contents').stop().hide();
	
	})
/*sever服务*/
	$('#tab_server a').mouseover(function(){
		$(this).find('i').css('top','-30px').stop().animate({
			'top':0
		})
	})
//test内容
	// $('.te').hover(function(){
	// 	$(this).stop().animate({
	// 		'background-position':10
	// 		//"background-positionY":-13
	// 	})
	// },function(){
	// 	$(this).stop().animate({
	// 		'background-position':0
	// 		//"background-positionY":0
	// 	})
	// })

})


//头部搜索框浮动
function scrollShowTop(scrollStart,target){
	var flag=true;
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>0){
			$('#h_nav').addClass('fix_top');
		}else{
			$('#h_nav').removeClass('fix_top');
		}	
		if(scrollTop>scrollStart){
			if(flag){
				$('#search_nav').stop().animate({
					'top':target
				},'fast').css('display','block');
				flag=false;
			}
		}else{
			$('#search_nav').css({
				'display':'none',
				'top':0
			})
			flag=true
		}
	})
}
/*头部广告随机显示一张*/
function topRandom(obj){
	var num=obj.length-1;	
	var random=Math.floor(Math.random()*num);
	obj.hide();
	obj.eq(random).show();
}


