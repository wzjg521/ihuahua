;(function($){
	$.fn.extend({
		drag:function(){	
			var _this=$(this);
		    _this.bind('mousedown',function(e){
		        var diffX = e.pageX - _this.offset().left;
		        var diffY = e.pageY - _this.offset().top;
		        if (e.target.tagName == 'H2') {
		            $(document).bind('mousemove', move);
		            $(document).bind('mouseup', up);
		        } else {
		            $(document).unbind('mousemove', move);
		            $(document).unbind('mouseup', up);
		        }
		        

		        function move(e) {
		            var left = e.pageX - diffX;
		            var top = e.pageY - diffY;
		            
		            if (left < 0) {
		                left = 0;
		            } else if (left > $(window).width() - _this.width()) {
		                left = $(window).width() - _this.width();
		            }
		            
		            if (top < 0) {
		                top = 0;
		            } else if (top > $(window).height() - _this.height()) {
		                top =  $(window).height() - _this.height();
		            }
		            _this.css({
		                left:left+'px',
		                top:top+'px'
		            });

		            if (typeof _this.get(0).setCapture != 'undefined') {
		                _this.get(0).setCapture();
		            } 
		            if (typeof _this.get(0).releaseCapture != 'undefined') {
		                _this.get(0).releaseCapture();
		            }
		        }

		        function up() {
		            $(document).unbind('mousemove', move);
		            $(document).unbind('mouseup', up);
		            if (typeof _this.get(0).releaseCapture != 'undefined') {
		                _this.get(0).releaseCapture();
		            }
		        }
		    })
		}	
	})	
})(jQuery);



