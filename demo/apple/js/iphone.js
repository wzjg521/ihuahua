$(function(){
	(function() {
		var thisPage = 0;
		show(0);
		function show(ipage) {
			var ithisPd = $('#pdBox .page' + ipage);
			var pos = getPos(ithisPd.length);
			for(var i=0;i<ithisPd.length;i++){
				$(ithisPd[i]).stop().animate({
					left: pos[i],
					top: 10
				}, 1000, 'easeInOutBack');
			}
		}

		function getPos(len) {
			var opd_w = $('#pdBox .pd').eq(0).width();
			var pos = [];
			var ibaseLeft = parseInt(($('#pdBox').width() - len * opd_w) / 2);
			for (var i = 0; i < len; i++) {
				pos.push(i * opd_w + ibaseLeft);
			}
			return pos;
		}

	})();	
})