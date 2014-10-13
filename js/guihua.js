	var random={
		xPos:300,
		yPos:200,
		step:5,
		delay:30,
		width:0,
		height:0,
		Hoffset:0,
		Woffset:0,
		yon:0,
		xon:0,
		pause:true,
		interval:'',
		changePos:function(){
			random.width = document.body.clientWidth;
			random.height = document.body.clientHeight || document.documentElement.clientHeight;
			random.Hoffset = $('#agent').outerHeight(true)
			random.Woffset = $('#agent').outerWidth(true);
			$('#agent').css('left',random.xPos+$(window).scrollLeft())
			$('#agent').css('top',random.yPos+$(window).scrollTop()) 
			
			if (random.yon){
				random.yPos = random.yPos + random.step;
			}else{
				random.yPos = random.yPos - random.step;
			}
			if (random.yPos < 0){
				random.yon = 1;random.yPos = 0;
			}
			console.log((random.yPos -$(window).scrollTop())+'+++'+($(window).height()-random.Hoffset))
			if (random.yPos>= $(window).height()-random.Hoffset){
				random.yon = 0;random.yPos = ($(window).height() - random.Hoffset);
			}
			if (random.xon){
				random.xPos = random.xPos + random.step;
			}else{
				random.xPos = random.xPos - random.step;
			}
			if (random.xPos < 0) {
				random.xon = 1;random.xPos = 0;
			}
			if (random.xPos >= (random.width - random.Woffset)){
				random.xon = 0;random.xPos = (random.width - random.Woffset);   
			}
		},
		pause_resume:function(){
			if(random.pause){
				clearInterval(random.interval);
				random.pause = false;
			}else{
				random.interval = setInterval('random.changePos()',random.delay);
				random.pause = true; 
			}
		},
		init:function(){
			$('#agent').css('top',random.yPos);
			random.interval = setInterval('random.changePos()', random.delay);
			$('#agent').hover(function(){
				random.pause_resume();
			},function(){
				random.pause=false;
				random.pause_resume();
			})
			$('#close_float').click(function(){
				$('#agent').hide()
			})
			$.ajax({
				url:'login.php',
				type:'post',
				success:function(data){
					if(data){
						var obj=$.parseJSON(data);
						$('.ip_float').html('您的IP为：'+obj['addr'])
						$('.num_float').html('您是第'+(20+parseInt(obj.count))+'位访问者')
						$('.client').html('您的客户端：'+obj.agent)
					}
				}
			})
		}

	}

	random.init()

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
		$('#agent #time_float').html('Time : ' +current());
	},1000);
	$('#agent #time_float').html('Time : ' +current());
