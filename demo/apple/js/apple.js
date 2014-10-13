$(function(){
	(function() {
		var thisPage = 0;
		show(0);
		var flag = false;
		var bhold = null;

		bhold = setTimeout(function() {
			clearTimeout(bhold);
			$('#item a').click(function() {
				if (flag === false) {
					return;
				}
				$(this).addClass('active').siblings('a').removeClass('active');
				if ($(this).index() != thisPage) {
					hide($(this).index());
					flag = true;
				}
			});
		}, 1000);

		function hide(ipage) {
			var ithisPd = $('#pdBox .page' + thisPage);


			if (thisPage < ipage) {
				var itarget = -$('#pdBox').width();
				sentInitSite(thisPage, -itarget * 2);
				i = 0;
			} else {
				var itarget = $('#pdBox').width() * 2;
				sentInitSite(thisPage, -$('#pdBox').width());
				i = ithisPd.length - 1;
			}

			var t = setInterval(function() {

				$(ithisPd[i]).stop().animate({
					left: itarget
				}, 1000, 'easeOutBack');

				if (thisPage < ipage) {
					i++;
					if (i == ithisPd.length) {
						stop()
					}
				} else {
					i--;
					if (i == -1) {
						stop()
					}
				}

			}, 50);
			show(ipage);

			function stop() {
				clearInterval(t);
			}

		}

		function show(ipage) {
			var ithisPd = $('#pdBox .page' + ipage);
			var pos = getPos(ithisPd.length);
			var i = thisPage < ipage ? 0 : ithisPd.length - 1;
			var count = 0;
			var t = setInterval(function() {

				$(ithisPd[i]).stop().animate({
					left: pos[i],
					top: 10
				}, 1000, 'easeInOutBack');


				if (thisPage < ipage) {
					i++;
					if (i == ithisPd.length) {
						stop()
					}
				} else {
					i--;
					if (i == -1) {
						stop()
					}
				}

			}, 50);

			function stop() {
				clearInterval(t);
				thisPage = ipage;
				flag = true;
			}
		}

		function sentInitSite(ipage, itarget) {
			var ithisPd = $('#pdBox .page' + ipage);
			for (var i = 0; i < $('#pdBox .pd').length; i++) {

				if (ithisPd.get(0).className != $('#pdBox .pd').eq(i).get(0).className) {
					$('#pdBox .pd').eq(i).css('left', itarget + 'px');
					$('#pdBox .pd').eq(i).css('top', -250 + 'px');

				}
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