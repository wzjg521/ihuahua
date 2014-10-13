$(function(){
	$('.box').height($(window).height())
	var oWinTop;
	var vIndex = [];		
	$("#nav li").each(function(){
		vIndex.push($(this).index());
	});

	$(window).resize(function(){
		oWinTop = $(window).scrollTop();
		if(oWinTop >= offTop(3)-200 && oWinTop<offTop(4)-200){
			var leftWidth=$('#product .item_list').outerWidth();
			var itemsWidth=$('#product .items').outerWidth();
			var scale=parseInt(itemsWidth/2-leftWidth);
			moveW({obj:$('#product .p4'),speed:'slow',LeftTarget:scale,Opacity:1});
			moveW({obj:$('#product .p6'),speed:'fast',LeftTarget:scale,Opacity:1});
			moveW({obj:$('#product .p8'),speed:'slow',LeftTarget:scale,Opacity:1});
		}
		$('.box').height($(window).height())
	})

	$(window).scroll(function(){
		oWinTop = $(window).scrollTop();
		var leftWidth=$('#product .item_list').outerWidth();
		var itemsWidth=$('#product .items').outerWidth();
		var scale=parseInt(itemsWidth/2-leftWidth);
		$("#nav li").removeClass("focus");
		
		if(oWinTop >= 0 && oWinTop < offTop(1)-250){
			$("#nav li:eq("+vIndex[0]+")").addClass("focus");

			moveW({obj:$('#work .p2'),speed:'fast',LeftTarget:'-40%'});
			moveH($('.box .float_apple'),244,'slow');
		}else if(oWinTop >= offTop(1)-250 && oWinTop < offTop(2)-250){
			$("#nav li:eq("+vIndex[1]+")").addClass("focus");

			moveH($('.box .float_apple'),20,'slow');
			moveW({obj:$('#work .p2'),speed:'slow',LeftTarget:'0'});
			moveW({obj:$('#job .p3'),speed:'slow',LeftTarget:'100%'});
		}else if(oWinTop >= offTop(2)-250 && oWinTop<offTop(3)-250){
			$("#nav li:eq("+vIndex[2]+")").addClass("focus");
			moveH($('.box .float_apple'),244,'slow');
			moveW({obj:$('#work .p2'),speed:'fast',LeftTarget:'-40%'});
			moveW({obj:$('#job .p3'),speed:'slow',LeftTarget:'60%'});

			moveW({obj:$('#product .p4'),speed:'fast',LeftTarget:'-20%',Opacity:0});
			moveW({obj:$('#product .p5'),speed:'fast',LeftTarget:'100%',Opacity:0});
			moveW({obj:$('#product .p6'),speed:'slow',LeftTarget:'-20%',Opacity:0});
			moveW({obj:$('#product .p7'),speed:'slow',LeftTarget:'100%',Opacity:0});
			moveW({obj:$('#product .p8'),speed:'fast',LeftTarget:'-20%',Opacity:0});
			moveW({obj:$('#product .p9'),speed:'fast',LeftTarget:'100%',Opacity:0});			
		}else if(oWinTop >= offTop(3)-250 && oWinTop<offTop(4)-250){
			$("#nav li:eq("+vIndex[3]+")").addClass("focus");
			moveW({obj:$('#job .p3'),speed:'slow',LeftTarget:'100%'});

			moveW({obj:$('#product .p4'),speed:'slow',LeftTarget:scale,Opacity:1});
			moveW({obj:$('#product .p5'),speed:'slow',LeftTarget:'50%',Opacity:1});
			moveW({obj:$('#product .p6'),speed:'slow',LeftTarget:scale,Opacity:1});
			moveW({obj:$('#product .p7'),speed:'slow',LeftTarget:'50%',Opacity:1});
			moveW({obj:$('#product .p8'),speed:'slow',LeftTarget:scale,Opacity:1});
			moveW({obj:$('#product .p9'),speed:'slow',LeftTarget:'50%',Opacity:1});
			moveH($('.contract_out'),'100%','slow');			
		}else{
			$("#nav li:eq("+vIndex[4]+")").addClass("focus");

			moveW({obj:$('#product .p4'),speed:'fast',LeftTarget:'-20%',Opacity:0});
			moveW({obj:$('#product .p5'),speed:'fast',LeftTarget:'100%',Opacity:0});
			moveW({obj:$('#product .p6'),speed:'slow',LeftTarget:'-20%',Opacity:0});
			moveW({obj:$('#product .p7'),speed:'slow',LeftTarget:'100%',Opacity:0});
			moveW({obj:$('#product .p8'),speed:'fast',LeftTarget:'-20%',Opacity:0});
			moveW({obj:$('#product .p9'),speed:'fast',LeftTarget:'100%',Opacity:0});
			moveH($('.contract_out'),'20%','slow');
		}
		
	});

	$("#nav li").click(function(){
		if($(this).index() == 0){
			bodyScroll($("#n1"))
		}else if($(this).index() == 1){
			bodyScroll($("#n2"))
		}else if($(this).index() == 2){
			bodyScroll($("#n3"))
		}else if($(this).index() == 3){
			bodyScroll($("#n4"))
		}else if($(this).index() == 4){
			bodyScroll($("#n5"))
		}
	});
	$('.down_arrow').click(function(){
		bodyScroll($("#n2"))
	})

	$('.circle_arrow_2').click(function(){
		bodyScroll($("#n3"))
	})

	$('.circle_arrow_3').click(function(){
		bodyScroll($("#n4"))

	})
/*图片遮罩*/
	$('#product .item_list').hover(function(){
		$(this).css('background','#f448e6')
	},function(){
		$(this).css('background','#fff')
	})


/*personal--work弹出框*/
	var arry=[];
	var arry2=[];
	var index;
	var images=$('#product .item_list').find('img');
	var details=$('#product .item_list').find('.decript');
	var wid=$('#banner').width();
	var hei=$('#banner').height();
	var Ww=$(window).width();
	var Wh=$(window).height();
	for(var i=0;i<images.length;i++){
		var imgSrc=images.eq(i).attr('src');
		var titles=details.eq(i).html();
		arry.push(imgSrc);
		arry2.push(titles);
	}

	$('#screen').css({
		'width':Ww,
		'height':Wh
	})

	$('#banner').css({
		'top':($(window).height()-hei)/2,
		'left':($(window).width()-wid)/2
	})

	$(window).resize(function() {
		wid=$('#banner').width();
		hei=$('#banner').height();
		Ww=$(window).width();
		Wh=$(window).height();
		$('#banner').css({
			'top':($(window).height()-hei)/2,
			'left':($(window).width()-wid)/2
		})			
		$('#screen').css({
			'width':Ww,
			'height':Wh
		})
	});
			
	$('#product .item_list').click(function(){	
		var _this=$(this);	
		var detail=_this.find('.decript').html();
		$('#banner .detail').html(detail);
		$('#screen').css('display','block');
		$('#banner').css('display','block');	
		var Xsrc=_this.find('img').attr('src');
		index=getKey(arry, Xsrc);
		$('#banner .banner_img').find('img').attr('src',Xsrc);
	})

	$('#banner .close').click(function(){
		$('#screen').css('display','none');
		$('#banner').css('display','none');
	})
	$('#banner .detail').click(function(){
		$('#screen').css('display','none');
		$('#banner').css('display','none');
	})

	$('#banner .next').click(function(){		
		(index>=arry.length-1) ? index=0 : index++;
		nextPrev()			
	})

	$('#banner .prev').click(function(){				
		(index==0) ? index=5 : index--;
		nextPrev()
	})

/*调用函数*/
	function moveW(json){
		var obj=json.obj;
		var speed=json.speed;
		var LeftTarget=json.LeftTarget;
		var Opacity=json.Opacity!=undefined ? json.Opacity : 1;
		
		obj.stop(true).animate({
			'left':LeftTarget,
			'opacity':Opacity
		},speed)
	}
	function moveH(obj,TopTarget,speed){
		obj.stop(true).animate({
			'top':TopTarget
		},speed)
	}
	function bodyScroll(obj){
		$("html,body").stop(true).animate({
			scrollTop:obj.offset().top
		},1000);
		return false;
	}

	function nextPrev(){
		var nextSrc=arry[index];
		var nexttitle=arry2[index];
		$('#banner .banner_img').find('img').attr('src',nextSrc);
		$('#banner .detail').html(nexttitle);
	}
	function getKey(arry, Xrc) {
		for (key in arry) {
			if (arry[key] == Xrc) {
				return key;
			}
		}
	}
	function offTop(num){
		return parseInt($('.box').eq(num).offset().top);
	}

/*留言内容*/
	var PlaceHolder = {
	    _support: (function() {
	        return 'placeholder' in document.createElement('input');
	    })(),
	  
	    //提示文字的样式，需要在页面中其他位置定义
	    className: 'abc',
	  
	    init: function() {
	        if (!PlaceHolder._support) {
	            var textarea = document.getElementsByTagName('textarea');
	            var inputs = document.getElementsByTagName('input');
	            PlaceHolder.create(inputs);
	            PlaceHolder.create(textarea);
	        }
	    },
	  
	    create: function(inputs) {
	        var input;
	        if (!inputs.length) {
	            inputs = [inputs];
	        }
	        for (var i = 0, length = inputs.length; i <length; i++) {
	            input = inputs[i];
	            if (!PlaceHolder._support && input.attributes && input.attributes.placeholder) {
	                PlaceHolder._setValue(input);
	                input.addEventListener('focus', function(e) {
	                    if (this.value === this.attributes.placeholder.nodeValue) {
	                        this.value = '';
	                        this.className = '';
	                    }
	                }, false);
	                input.addEventListener('blur', function(e) {
	                    if (this.value === '') {
	                        PlaceHolder._setValue(this);
	                    }
	                }, false);
	            }
	        }
	    },
	  
	    _setValue: function(input) {
	        input.value = input.attributes.placeholder.nodeValue;
	        input.className = PlaceHolder.className;
	    }
	};
  
	PlaceHolder.init();

/*正则表达式验证表单内容*/
	function checkUser(){
		var values=$('#n5 .contract').find('input[name="user"]').val();
		if(/[^\s]{2,20}/.test($.trim(values))) return true;
	}
	function checkEmail(){
		var values=$('#n5 .contract').find('input[name="email"]').val();
		if(/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test($.trim(values))) return true;
	}
	function checkContent(){
		var values=$('#n5 .contract').find('textarea[name="message"]').val();
		if($.trim(values)!='') return true;
	}
/*Ajax回复message*/
/*$('#n5 .contract').find('.error_user').fadeOut();
$('#n5 .contract').find('.error_email').fadeOut();
$('#n5 .contract').find('.error_message').fadeOut();*/
	$('#n5 .contract').find('input[name="user"]').focus(function(){
		$('#n5 .contract').find('.error_user').fadeOut();
	})
	$('#n5 .contract').find('input[name="email"]').focus(function(){
		$('#n5 .contract').find('.error_email').fadeOut();
	})
	$('#n5 .contract').find('textarea').focus(function(){
		$('#n5 .contract').find('.error_message').fadeOut();
	})

	$('#n5 .send').find('input[name="sub"]').click(function(){
		var flag=true;
		if(!checkUser()){
			$('#n5 .contract').find('.error_user').fadeIn();
			flag=false;
		}
		if(!checkEmail()){
			$('#n5 .contract').find('.error_email').fadeIn();
			flag=false;
		}
		if(!checkContent()){
			$('#n5 .contract').find('.error_message').fadeIn();
			flag=false;
		}

		if(flag){
			$.ajax({
				type:'POST',
				url:'add_content.php',
				data:$('#form').serialize(),
				beforeSend:function(){
					$('#n5 .beforeSend').fadeIn();
					$('#n5 .contract').find('input[type="button"]').attr('disabled',true).css('background','#ccc');
				},
				success:function(msg){
					$('#n5 .beforeSend').fadeOut();
					$('#n5 .successSend').fadeIn();
					setTimeout(function(){
						$('#n5 .successSend').fadeOut();
						$('#n5 .contract').find('input[type="button"]').attr('disabled',false).css('background','#98c593');
						$('#form').get(0).reset();
					},3000)
				}			
			})
		}	
	})
});






