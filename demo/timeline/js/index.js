$(function(){
	$(window).scroll(function(){
		var scTo=$(window).scrollTop();
		if(scTo>340){
			$('#main .date_time').css({
				'position':'fixed',
				'top':'80px'
			})
			$('#main .fixed_title').css({
				'position':'fixed',
				'top':'55px'
			})
		}else{
			$('#main .date_time').css({
				'position':'absolute',
				'top':0
			})
			$('#main .fixed_title').css({
				'position':'absolute',
				'top':0
			})
		}
		var year2=$('#main .theme').find('.time');
		var wh=parseInt($(window).height()/2);
		for(var i=0;i<year2.length;i++){
			var topps=year2.eq(i).offset().top;
			if(scTo+wh>topps && topps>scTo ){
				var html_one=year2.eq(i).html().substring(0,4);
				for(var j=0;j<$('#main .date_time li').length;j++){
					var html_two=$('#main .date_time li').eq(j).find('a').html();
					if(html_one==html_two){
						$('#main .date_time li').eq(j).addClass('current').siblings('li').removeClass('current');
					}
				}	
			}
		}

	})

	$('#main .date_time li').click(function(){
		$(this).addClass('current').siblings('li').removeClass('current');
		var year=$(this).find('a').html();
		var year2=$('#main .theme').find('.time');
		for(var i=0;i<year2.length;i++){
			if(year==year2.eq(i).html().substring(0,4)){
				var toops=year2.eq(i).offset().top-100;
				$('html,body').stop().animate({
					'scrollTop':toops
				},'slow')
			}
		}
		
	})

	$('#main .fixed_title').click(function(){
		$('html,body').stop().animate({
			'scrollTop':0
		},'slow')
	})


/*正则表达式验证表单内容*/
	function checkUser(){
		var values=$('#main .send').find('input[name="user"]').val();
		if(/[^\s]{2,20}/.test($.trim(values))) return true;
	}
	function checkEmail(){
		var values=$('#main .send').find('input[name="email"]').val();
		if(/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test($.trim(values))) return true;
	}
	function checkContent(){
		var values=$('#main .send').find('textarea[name="message"]').val();
		if($.trim(values)!='') return true;
	}
/*Ajax回复message*/
	$('#main .send').find('input[type="text"]').focus(function(){
		$('#main .error').find('p').fadeOut();
		$(this).css({
			'border':'1px solid #6aace9'
		})
	})
	$('#main .send').find('input[type="text"]').blur(function(){
		$(this).css({
			'border':'1px solid #ccc'
		})
	})
	$('#main .send').find('textarea').focus(function(){
		$('#main .error').find('p').fadeOut();
		$(this).css({
			'border':'1px solid #6aace9'
		})
	})
	$('#main .send').find('textarea').blur(function(){
		$(this).css({
			'border':'1px solid #ccc'
		})
	})

	$('#main .send').find('input[name="sub"]').click(function(){
		var flag=true;
		if(!checkUser()){
			$('#main .error').find('.error_user').fadeIn();
			flag=false;
		}
		if(!checkEmail()){
			$('#main .error').find('.error_email').fadeIn();
			flag=false;
		}
		if(!checkContent()){
			$('#main .error').find('.error_message').fadeIn();
			flag=false;
		}

		if(flag){
			$.ajax({
				type:'POST',
				url:'add_content.php',
				data:$('form[name="msg"]').serialize(),
				beforeSend:function(){
					$('#main .beforeSend').fadeIn();
					$('#main .send').find('input[type="button"]').attr('disabled',true).css('background','#ccc');
				},
				success:function(msg){
					$('#main .beforeSend').fadeOut();
					$('#main .successSend').fadeIn();
					setTimeout(function(){
						$('#main .successSend').fadeOut();
						$('#main .send').find('input[type="button"]').attr('disabled',false).css('background','#98c593');
					},3000)
					$('form[name="msg"]').get(0).reset();
					location.reload();
				}			
			})
		}	
	})

	$.ajax({
		url:'show_content.php',
		type:'POST',
		success:function(response,status,xhr){
			var json=$.parseJSON(response);
			var html='';
			$.each(json,function(index,value){
				var totalYear=value.date;
				var year=totalYear.substring(0,4);
				var mounth=(totalYear.substring(5,6)==0) ? totalYear.substring(6,7) :totalYear.substring(5,7); 
				html+='<li><div class="theme"><div class="ico"></div><div class="dash_line"></div><div class="time">'+year+'-'+mounth+'</div><div class="article"><div class="title"><i class="left_arrow"></i><h4>'+value.user+'</h4><span>[ '+value.date+' ]</span></div><hr noshade="noshade" size="1"><p>'+value.message+'</p><div class="replay">来自 '+value.email+' 留言</div></div></div></li>';
			})
			$('#Omsg').append(html);

		}
	})

	function current(){
		var d=new Date(),str='';
		str +=d.getFullYear()+'年';
		str +=d.getMonth()+1+'月'; 
		str +=d.getDate()+'日';
		str +=d.getHours()+':';
		str +=d.getMinutes()+':';
		str +=d.getSeconds();
		return str; 
	}
	setInterval(function(){
		$('#main .current_time').html('Current Time : ' +current());
	},1000);
	$('#main .current_time').html('Current Time : ' +current());

	for(var i=0;i<$('#Omsg li').length;i++){
		$('#Omsg li').eq(i).click(function(){
			alert(3)
			$(this).find('.dash_line').stop().animate({
				'width':32
			},'slow')
		})
	}
	$('#Omsg').bind('mouseover','li',function(e){
		
		var obj=e.target
		obj=$(obj).parents('li')
		
		$(obj).find('.dash_line').stop().animate({
			'width':32
		},'slow')
		$(obj).find('.ico').css('background','url(images/message_ico.png) no-repeat 0 -18px');
	})
	$('#Omsg').bind('mouseout','li',function(e){
			var obj=e.target;
			obj=$(obj).parents('li')
		$(obj).find('.dash_line').stop().animate({
			'width':0
		},'slow')
		$(obj).find('.ico').css('background','url(images/message_ico.png) no-repeat 0 0');
	})

	// $('.article').hover(function(){
	// 	alert(1)
	// 	$(this).find('.dash_line').stop().animate({
	// 		'width':32
	// 	},'slow')
	// 	$(this).find('.ico').css('background','url(images/message_ico.png) no-repeat 0 -18px');
	// },function(){
	// 	alert(2)
	// 	$(this).find('.dash_line').stop().animate({
	// 		'width':0
	// 	},'slow')
	// 	$(this).find('.ico').css('background','url(images/message_ico.png) no-repeat 0 0');
	// })

})