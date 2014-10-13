function waterfallInit(json) {
	var parent = json.parent;
	var pin = json.pin;
	var successFn = json.successFn;
	var loadImgSrc = json.loadImgSrc;
	var requestUrl = json.requestUrl;
	var requestNum = json.requestNum;
	var style = json.styles;
	var ajaxState = true;
	var page = 0;

	//初始化页面
	ajaxRequest();
	imgComplete(function(){
		window.onscroll = function() {
			imgComplete(function(){			
				if (checkScroll() && ajaxState) {
					
						ajaxState = false;
						ajaxRequest();							
						page++;	

				}							
			})
		}
	})



	
	


	function ajaxRequest() {
		var data='';
		if(page==0){
			data='page=0&requestNum=16'
			page=4
		}else if(page>=4){			
			data='page=' + page + '&requestNum=' + requestNum
		}
		$.ajax({
			type: 'GET',
			url: requestUrl,
			data: data,
			dataType: 'json',
			beforeSend: function() {								
			},
			success: function(data) {
				if (successFn(data)) {
					imgComplete(function(){
						waterfall(parent, pin, style);
					})						
				}

			},
			complete: function() {
				
					
					//document.getElementById(parent).removeChild(document.getElementById('loadImg'));
				
				ajaxState = true;
			}
		});
		 
	}

	//检索滚动条
	function checkScroll() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var documentH = document.documentElement.clientHeight;
		return getLastH() < scrollTop + documentH ? true : false;
	}
	//获取最小的lastH
	function getLastH() {
		var oParent = document.getElementById(parent);
		var aPin = getClassObj(oParent, pin);
		var lastPinH = aPin[aPin.length - 1].offsetTop + Math.floor(aPin[aPin.length - 1].offsetHeight / 2);
		return lastPinH;
	}

}

function waterfall(parent, pin, style) {
	var oParent = document.getElementById(parent);
	var aPin = getClassObj(oParent, pin);

	var iPinW = aPin[0].offsetWidth;
	var num = Math.floor(oParent.offsetWidth / iPinW);
	oParent.style.cssText = 'width:' + num * iPinW + 'px;margin:0 auto; position:relative;';
	var compareArr = [];
	for (var i = 0; i < aPin.length; i++) {
		if (i < num) {
			compareArr[i] = aPin[i].offsetHeight;
			aPin[i].style.opacity=1;
			aPin[i].style.filter = 'alpha(opacity=1)';
		} else {
			var minH = Math.min.apply({}, compareArr);
			var minKey = getMinKey(compareArr, minH);
			setMoveStyle(aPin[i], minH, aPin[minKey].offsetLeft, i, style)
			compareArr[minKey] += aPin[i].offsetHeight;
		}
	}


	//拖拽效果
	for (var i = num; i < aPin.length; i++) {
		aPin[i].style.position = 'absolute';
		$(aPin[i]).drag();
	}
}

//运动的风格
var starNum = 0;

function setMoveStyle(obj, top, left, index, style) {
	if (index <= starNum) {
		return;
	}
	var documentW = document.documentElement.clientWidth;
	obj.style.position = 'absolute';
	switch (style) {
		case 1:
			obj.style.opacity = 0;
			obj.style.filter = 'alpha(opacity=0)';
			obj.style.top = getTotalH() + 'px';
			obj.style.left = Math.floor((documentW - obj.offsetWidth) / 2) + 'px';
			$(obj).stop().animate({
				top: top,
				left: left,
				opacity:1
			}, 600);
			break;
		case 2:
			obj.style.opacity = 0;
			obj.style.filter = 'alpha(opacity=0)';
			obj.style.top = top + 'px';
			obj.style.left = left + 'px';
			$(obj).stop().animate({
				opacity: 1
			}, 1000);
			break;
		case 3:
			obj.style.top = getTotalH() + 'px';
			if (index % 2) {
				obj.style.left = -obj.offsetWidth + 'px';
			} else {
				obj.style.left = documentW + 'px';
			}

			$(obj).stop().animate({
				top: top,
				left: left
			}, 600);
			break;
		case 4:
			obj.style.top = getTotalH() + 'px';
			obj.style.left = left + 'px';
			$(obj).stop().animate({
				top: top,
				left: left
			}, 600);
			break;
	}

	starNum = index; //更新索引
}



//获取总的高度
function getTotalH() {
	var totalH = document.documentElement.scrollHeight || document.body.scrollHeight;
	return totalH;
}

//获取最小的键值
function getMinKey(arr, minH) {
	for (key in arr) {
		if (arr[key] == minH) {
			return key;
		}
	}
}


//获取DOM中的class
function getClassObj(parent, className) {
	var obj = parent.getElementsByTagName('*');
	var result = [];
	for (var i = 0; i < obj.length; i++) {
		if (obj[i].className == className) {
			result.push(obj[i]);
		}
	}
	return result;
}

function imgComplete(fn){
	var imgdefereds = [];
		$('img').each(function() {
			var dfd = $.Deferred();
			$(this).bind('load', function() {
				dfd.resolve();
			}).bind('error', function() {
				//图片加载错误，加入错误处理  
				//  dfd.resolve();
				
			})
			if (this.complete) setTimeout(function() {
				dfd.resolve();
			}, 1000);
			imgdefereds.push(dfd);
		})
		$.when.apply(null, imgdefereds).done(fn)	
}


//通过url获得图片的长宽
function imgLoadEvent(callBack,url){

	var img=new Image()

	img.onreadystatechange=function(){

		if(img.readyState=='complete'){
			callBack({'w':img.width,'h':img.height})
		}
	}
	img.onload=function(){
		if(this.complete==true){
			callBack({'w':img.width,'h':img.height})
		}
	}
	img.onerror=function(){
		callBack({'w':0,'h':0})
	}
	img.src=url;

}




























			/*alert(requestData)*/
			
			/*var minArray=[];
			for(var i=0;i<data.length;i++){
				if(i<nums){				
					imgLoadEvent(function(obj,i){
						var trueWidth=obj.w;
						var trueHeight=obj.h;
						var scaleH=(trueHeight*fixedWidth)/trueWidth+20;
						minArray.push(scaleH);
					},data[i],i)
				}else{
					
					imgLoadEvent(function(obj,i){
						var trueWidth=obj.w;
						var trueHeight=obj.h;
						var scaleH=(trueHeight*fixedWidth)/trueWidth+20;

						var minH=Math.min.apply({},minArray);

						var minNum=getMinKey(minArray,minH);
						minArray[minNum]+=scaleH;
						var leftW=minNum*(fixedWidth+10)
						outPic.eq(i).css({
							'position':'absolute',
							'top':minH,
							'left':leftW
						})
					},data[i],i)
				}

			}*/