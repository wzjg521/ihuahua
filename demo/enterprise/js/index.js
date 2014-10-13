$(function(){
	huahua({
		img:$('.ad_img img'),
		num:$('.ad_img ul li'),
		imgH:$('.ad_img').css('height')
	});
	//轮播器初始化
	//所有的img隐藏只有第一个img显示
	function huahua(json){
		var img=json.img;
		var num=json.num;
		var imgW=parseInt(json.imgW);
		var imgH=parseInt(json.imgH);			
		num.parent().css({
			'top':imgH-20+'px',
			'right':'15px'
		});

		img.css('opacity',0);
		img.eq(0).css('opacity',100); 
		//所有的li变灰只有第一个变亮
		num.css({
			'color':'#333',
			'background':'url(images/qiye.png) no-repeat 0 -202px'
		});
		
		num.eq(0).css({
			'color':'#fff',
			'background':'url(images/qiye.png) no-repeat 0 -218px'
		});

		//轮播器计数器
		var banner_index=1;
		//轮播器的种类
		var banner_type=1;
		//自动轮播器
		var banner_timer=setInterval(banner_fn,3000);
		//手动轮播器
		num.hover(function(){
			clearInterval(banner_timer);
			var _this=$(this);			
			if(_this.css('color')!='rgb(255, 255, 255)' && _this.css('color')!='#fff' ){
				banner(_this,banner_index==0 ? num.length-1 : banner_index-1);
			}								
		},function(){			
			banner_index=$(this).index()+1;		
			banner_timer=setInterval(banner_fn,3000);			
		});

		//轮播器函数		
		function banner(obj,prev){
			//obj=$('#banner ul li').eq(banner_index)
			//所有的li变灰只有第一个变亮
			num.css({
				'color':'#333',
				'background':'url(images/qiye.png) no-repeat 0 -202px'
			});
			obj.css({
				'color':'#fff',
				'background':'url(images/qiye.png) no-repeat 0 -218px'
			});
			
			//所有的img隐藏只有第一个img显示
			if(banner_type==1){
				img.eq(prev).css('zIndex',1).stop().animate({
					opacity:0
				},'slow');
				img.eq($(obj).index()).css('zIndex',2).stop().animate({
					opacity:1
				},'slow');	
			}			
		}
		//轮播函数二
		function banner_fn(){
			if(banner_index>=num.length) banner_index=0;
			banner(num.eq(banner_index),banner_index==0 ? num.length-1 : banner_index-1);
			banner_index++;
		}
	}


	$('#demo-02').jCarouselLite({
		btnPrev: '#prev-02',
		btnNext: '#next-02',
		auto: 3000,
		visible:5,
		speed: 600
	});	
	$('.jCarouselLite li p').hover(function(){
		$(this).css('color','red');
	},function(){
		$(this).css('color','#464646');
	})
		
});