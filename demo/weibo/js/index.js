$(function(){
	/*滚动条滚动条所触发的事件*/
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();		
		var objHeight=$('#aside .aside_app').offset().top;
		var objSefHeight=$('#aside .aside_app').height();
		var lastHeight=objHeight+objSefHeight;
		var moveHeight=$('#fix .inner_fix').offset().top; 
		var oDiv= $("#fix .inner_fix");

		slideMove(oDiv,scrollTop,lastHeight,moveHeight,'fixed');

		var objHeight2=$('#sidebar .notice_board').offset().top;
		var objSefHeight2=$('#sidebar .notice_board').height();
		var lastHeight2=objHeight2+objSefHeight2;
		var moveHeight2=$('#fix_right .inner_fixRight').offset().top; 
		var oDiv2= $('#fix_right .inner_fixRight'); 
		slideMove(oDiv2,scrollTop,lastHeight2,moveHeight2,'objfixed');

		if(scrollTop>100){
			$('#back_top').fadeIn();
		}else{
			$('#back_top').fadeOut();
		}
		$('#back_top').click(function(){
			$('html,body').stop().animate({
				scrollTop:0
			},600)
		})
        		
	})

	function slideMove(obj,scrollTop,lastHeight,moveHeight,className){
		if (scrollTop >= lastHeight){
          obj.stop().animate({
            'top':scrollTop-moveHeight+38,
          },'slow',function(){
            obj.addClass(className).css('top','38px');
          })
          if(obj.css('position')=='fixed'){
            obj.stop(true,true)
          } 
        }else{
          	obj.stop(true,true).removeClass(className).css('top','0'); 
        }
	}

	/*侧边贴边#right_welt .welt*/
	var winH=$(window).height()-50;
	var weltH=parseInt($('.right_welt .welt').css('height'));

	$('.right_welt .welt').find('em').css('marginTop',parseInt(weltH/2)+'px');	
	$(window).resize(function(){
		winH=$(window).height()-50;
		weltH=parseInt($('.right_welt .welt').css('height'));
		$('.right_welt .inner_welt').height(winH);
		$('.right_welt .welt').css('top',Math.abs(parseInt((winH-weltH-50)/2))+'px');
		$('.right_welt .welt').find('em').css('marginTop',parseInt(weltH/2)+'px');
		
	})
	$('.right_welt .inner_welt').height(winH);
	$('.right_welt .welt').css('top',parseInt((winH-weltH-50)/2)+'px');

	$('.small_welt').hover(function(){
		$(this).animate({
			opacity:1
		},'slow')
	},function(){
		$(this).animate({
			opacity:0.65
		},'slow')
	})

	$('.right_welt .welt').hover(function(){
		$(this).css({
			'height':'60%',
			'background':'#fff'
		});
		weltH=parseInt($(this).css('height'));
		$(this).find('em').css({
			'background':'url(images/right_welt.png) no-repeat 3px -11px',
			'marginTop':parseInt(weltH/2)+'px'
		});
				
		$('.right_welt .welt').css('top',parseInt((winH-weltH-50)/2)+'px');
		
	},function(){
		$(this).css({
			'height':'0',
			'background':'#f1f2f5'
		});
		weltH=parseInt($(this).css('height'));
		$(this).find('em').css({
			'background':'url(images/right_welt.png) no-repeat 3px 0',
			'marginTop':parseInt(weltH/2)+'px'
		});	
		$('.right_welt .welt').css('top',parseInt((winH-weltH-50)/2)+'px');
	})

	$('.small_welt .welt_1').click(function(){
		$('.small_welt').css('display','none');
		$('.welt_click').css('display','block');
		$('.welt_click').animate({
			'width':161
		})
		$('.welt_click .welt_2').animate({
			'right':162
		})
	})

	$('.welt_click .welt_2').click(function(){
		$('.welt_click').animate({
			'width':50
		})
		$('.welt_click .welt_2').animate({
			'right':51
		})
		$('.welt_click').css('display','none');
		$('.small_welt').css('display','block');

	})

	$('.welt_click .click_list li').click(function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		var index=$(this).index();
		$('.welt_click .click_content').eq(index).addClass('content_active').siblings('div').removeClass('content_active');
	})

	
	/*头部导航*/
	$('#header').find('input[type="text"]').focus(function(){
		$(this).css({
			'border':'1px solid #ffa00a',
			'background':'#fff'
		});
		$('#header').find('.btn').css('background','url(images/head.png) no-repeat 0 -286px');
		$('#header').find('.btn').hover(function(){
			$(this).css('background','url(images/head.png) no-repeat 0 -323px');
		},function(){
			$(this).css('background','url(images/head.png) no-repeat 0 -286px');
		})
	})
	$('#header').find('input[type="text"]').blur(function(){
		$(this).css({
			'border':'1px solid #ccc',
			'background': '-webkit-linear-gradient(#f6f6f6, #e6e6e6)',
			'background': '-o-linear-gradient(#f6f6f6, #e6e6e6)',
			'background': '-moz-linear-gradient(#f6f6f6, #e6e6e6)',
			'background': 'linear-gradient(#f6f6f6, #e6e6e6)'
		});
		$('#header').find('.btn').css('background','url(images/head.png) no-repeat 0 -260px');
	})


	$('#header li').hover(function(){	
			
		var down_menu=$(this).find('.down_menu');
		if(down_menu.html()==null){
			$(this).find('a').addClass('head_active');
			return false;	
		}else{
			$(this).find('a').addClass('head_current');
			down_menu.show();
		}
		
	},function(){		
		var down_menu=$(this).find('.down_menu');
		if(down_menu.html()==null){
			$(this).find('a').removeClass('head_active');
			return false;	
		}else{
			$(this).find('a').removeClass('head_current');
			down_menu.hide();
		}		
	})

	$('#header li.sear').hover(function(){		
		$(this).find('input').css('background','#fff');
	},function(){
		$(this).find('input').css('background','#f6f6f6');
	})

	$('#header .down_menu .next').click(function(){
		$('#header .down_menu .prev').css('background','url(images/prev_next.png) no-repeat 0 -72px');
		$(this).css('background','url(images/prev_next.png) no-repeat 0 -24px');
		$('#header .down_menu .number').html('2/2');
		$('#header .down_menu .re_inner').animate({
			'left':-360
		},'slow')
	})
	$('#header .down_menu .prev').click(function(){
		$('#header .down_menu .next').css('background','url(images/prev_next.png) no-repeat 0 0');
		$(this).css('background','url(images/prev_next.png) no-repeat 0 -48px');
		$('#header .down_menu .number').html('1/2');
		$('#header .down_menu .re_inner').animate({
			'left':0
		},'slow')
	})



	/*左侧的展开收缩*/
	$('#aside .aside_group').hover(function(){
		$('#aside .group_btn').css('display','block');
	},function(){
		$('#aside .group_btn').css('display','none');
	})
	$('#aside .more_less').click(function(){
		var _this=$(this);
		$('#aside .list_2').slideToggle('fast',function(){
			if(_this.find('a').html()=='展开'){
				_this.find('a').html('收起');
				$('#fix').css('height','450px');
			}else{
				_this.find('a').html('展开');
				$('#fix').css('height','290px');
			}
		});

	})

	/*发表微博内容*/
	/*触发焦点的变化*/
	$('#middle .send_weibo textarea').focus(function(){
		checkNum();	
		$('#middle .send_weibo .new_thing').find('.nums').css('display','block');
		$('#middle .send_weibo .new_thing').find('.link_new').css('display','none');
		
		$(this).parent().css('border-color','#fab100');
		$(this).next('span').css('background','url(images/arrow.png) no-repeat 0 -20px')
	})
	/*失去焦点的变化*/
	$('#middle .send_weibo textarea').blur(function(){
		$('#middle .send_weibo .new_thing').find('.nums').css('display','none');
		$('#middle .send_weibo .new_thing').find('.link_new').css('display','block');

		$(this).parent().css('border-color','#ccc');
		$(this).next('span').css('background','url(images/arrow.png) no-repeat 0 0')
	})
	/*输入微博内容计算内容字数*/
	
	$('#middle .send_weibo textarea').keyup(function(){
			checkNum();	
	})
	checkNum();
	//判断字数
	function checkNum(){
		var nums=280;
		var content=$('#middle .send_weibo textarea').val();
		for(var i=0;i<content.length;i++){
			if(content[i].charCodeAt()<255){
				nums-=1;
			}else{
				nums-=2;
			}
		}
		var temps=parseInt(nums/2);
		if(temps<0){
			$('#middle .send_weibo .new_thing').find('p').html('您已经超过了<strong class="red">'+Math.abs(temps)+'</strong>字');
			$('#middle .send_weibo .button').css({
				'border-color':'#fff',
				'color':'#ccc'
			});
			$('#middle .send_weibo .send_span').css({
				'background':'#f2f2f2',
				'border-color':'#d9d9d9'
			});
		}else{
			$('#middle .send_weibo .new_thing').find('p').html('您还可以输入<strong>'+Math.abs(temps)+'</strong>字');
			$('#middle .send_weibo .button').css({
				'border-color':'#f57373',
				'color':'#fff'
			});
			$('#middle .send_weibo .send_span').css({
				'background':'#e64141',
				'border-color':'#e64141'
			});
		}
		if(content==''){
			$('#middle .send_weibo .button').css({
				'border-color':'#fff',
				'color':'#ccc'
			});
			$('#middle .send_weibo .send_span').css({
				'background':'#f2f2f2',
				'border-color':'#d9d9d9'
			});
		}
	}

	

	$('#middle .weibo_ico').find('.much').click(function(){
		$(this).find('.down_arrow').css('background','url(images/down_arrow.png) no-repeat -20px 8px')
		$(this).find('.mor').css('display','block');
	})

	$('#middle .send_btn').find('.public').click(function(){
		$(this).find('.down_arrow').css('background','url(images/down_arrow.png) no-repeat -20px 8px')
		$(this).find('.pub').css('display','block');
	})
	$('#middle .send_btn .pub').find('li').click(function(){
		var content=$(this).find('strong').html();
		$('#middle .send_btn .gk').html(content);
	})


	/*好友推荐dl总长度*/
	var join_inner_dl=$('#middle .join_inner dl')
	var join_picW=join_inner_dl.outerWidth(true)*join_inner_dl.length;
	$('#middle .join_inner').width(join_picW);


	/*微博内容的举报*/
	$('#weibo_content .weibo_part').hover(function(){
		$(this).find('.wonder_arrow').show();
		$(this).find('.report').show();
		$(this).find('.wb_t').css('color','#6c6351');
	},function(){
		$(this).find('.wonder_arrow').hide();
		$(this).find('.report').hide();
		$(this).find('.wb_t').css('color','#423009');
	})

	$('#weibo_content .more_weibo').click(function(){
		$('#wonderful_weibo .wonder_list').slideDown('fast');
		$(this).css('display','none');
	})

	/*右侧感兴趣的人*/	
	$('#sidebar .care_list dl,#sidebar .movie_list dl').hover(function(){
		$(this).find('.close_care').css('display','block');
	},function(){
		$(this).find('.close_care').css('display','none');
	})

	/*会员关闭*/
	$('#sidebar .members dl').hover(function(){
		$(this).find('.close').css('display','block');
	},function(){
		$(this).find('.close').css('display','none');
	})	

	/*会员选项卡*/
	$('#sidebar .members li').mouseover(function(){
		var index=$(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$('#sidebar .members .member_content').eq(index).css('display','block').siblings('.member_content').css('display','none');
		if(index==0){
			$('#sidebar .members').find('.tab_refresh').css('display','block');
		}else{
			$('#sidebar .members').find('.tab_refresh').css('display','none');
		}
		$('#sidebar .members').find('.tab_arrow').stop().animate({
			'left':32+index*82
		});

	})


	/*右侧内容换一换*/
	load_numb($('#sidebar .care_list dl'),2,8);
	load_numb($('#sidebar .topic_list li'),8,16);
	load_numb($('#sidebar .hot_wb dl'),2,5);
	load_numb($('#sidebar .list_movie dl'),1,3);
	load_numb($('#sidebar .sings_list dl'),1,3);	

	$('#sidebar .side_care .group_btn a').click(function(){
		var care_dl=$('#sidebar .care_list dl');
		var numbs=getNum(8);
		care_dl.css('display','none');
		for(var i=0;i<2;i++){
			care_dl.eq(numbs[i]-1).css('display','block');
		}
	})

	$('#sidebar .hot_topic .group_btn a').click(function(){
		var care_li=$('#sidebar .topic_list li');
		var numbs=getNum(16);
		care_li.css('display','none');
		for(var i=0;i<8;i++){
			care_li.eq(numbs[i]-1).css('display','block');
		}
	})
	$('#sidebar .hot_weibo .group_btn a').click(function(){
		var care_dl=$('#sidebar .hot_wb dl');
		var numbs=getNum(5);
		care_dl.css('display','none');
		for(var i=0;i<2;i++){
			care_dl.eq(numbs[i]-1).css('display','block');
		}
	})
	$('#sidebar .hot_movie .group_btn a').click(function(){
		var care_dl=$('#sidebar .list_movie dl');
		var numbs=getNum(3);
		care_dl.css('display','none');
		for(var i=0;i<1;i++){
			care_dl.eq(numbs[i]-1).css('display','block');
		}
	})
	$('#sidebar .hot_sings .group_btn a').click(function(){
		var care_dl=$('#sidebar .sings_list dl');
		var numbs=getNum(3);
		care_dl.css('display','none');
		for(var i=0;i<1;i++){
			care_dl.eq(numbs[i]-1).css('display','block');
		}
	})


	function getNum(count){
		var originalArray=new Array;//原数组
		//给原数组originalArray赋值
		for (var i=0;i<count;i++){
			originalArray[i]=i+1;
		}
		originalArray.sort(function(){ return 0.5 - Math.random(); });
		return originalArray;		
	}
	function load_numb(obj,num,totalNum){
		var numbs=getNum(totalNum);
		obj.css('display','none');
		for(var i=0;i<num;i++){
			obj.eq(numbs[i]-1).css('display','block');
		};
	}
   
	
})