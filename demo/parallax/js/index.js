$(document).ready(function() {
    $window = $(window);
    $('[data-type]').each(function() {
        $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
        $(this).data('Xposition', $(this).attr('data-Xposition'));
        $(this).data('speed', $(this).attr('data-speed'));
    });
    $('section[data-type="background"]').each(function() {
        var $self = $(this),
            offsetCoords = $self.offset(),
            topOffset = offsetCoords.top,
            top2=$('#second').offset().top,
            top3=$('#third').offset().top,
            top4=$('#fourth').offset().top,
            top5=$('#theend').offset().top;
        $(window).scroll(function() {
            var scrollTops=$(window).scrollTop();
                $('#nav li').removeClass('focus');
            if(scrollTops>=0 && scrollTops<top2){
               $('#nav li').eq(0).addClass('focus');
            }else if(scrollTops>=top2 && scrollTops<top3){
                $('#nav li').eq(1).addClass('focus');
            }else if(scrollTops>=top3 && scrollTops<top4){
                $('#nav li').eq(2).addClass('focus');
            }else if(scrollTops>=top4 && scrollTops<top5){
                $('#nav li').eq(3).addClass('focus');
            }else{
                $('#nav li').eq(4).addClass('focus');
            }

            if (($window.scrollTop() + $window.height()) > (topOffset) && ((topOffset + $self.height()) > $window.scrollTop())) {							
                var yPos = -($window.scrollTop() / $self.data('speed'));
                if ($self.data('offsetY')) {
                    yPos += $self.data('offsetY');
                }
                var coords = '50% ' + yPos+ 'px';
                $self.css({
                    backgroundPosition: coords
                });
                $('[data-type="sprite"]', $self).each(function() {
                    var $sprite = $(this);
                    var yPos = -($window.scrollTop() / $sprite.data('speed'));
                    var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';
                    $sprite.css({
                        backgroundPosition: coords
                    });
                });                 	
            }; 
        }); 
    }); 

    $('#first .scroll_down').click(function(){
        $('html,body').animate({
            'scrollTop':$('#second').offset().top
        },1000)
    })
    $('#nav li').click(function(){
        var index=$(this).index();
        $(this).addClass('focus').siblings('li').removeClass('focus');
        if(index==0){
            $('html,body').animate({
                'scrollTop':0
            },1000)
        }else if(index==1){
            $('html,body').animate({
                'scrollTop':$('#second').offset().top
            },1000)
        }else if(index==2){
            $('html,body').animate({
                'scrollTop':$('#third').offset().top
            },1000)
        }else if(index==3){
            $('html,body').animate({
                'scrollTop':$('#fourth').offset().top
            },1000)
        }else if(index==4){
            $('html,body').animate({
                'scrollTop':$('#theend').offset().top
            },1000)
        }
    })
    $('.more').css({
        'width':$(window).width(),
        'height':$(window).height()
    })
    $(window).resize(function(){
       $('.more').css({
            'width':$(window).width(),
            'height':$(window).height()
        }) 
    })
    $('.right_down').click(function(){
        $('#right_slide').animate({
            'left':0
        },'slow')
        $('#left_slide').animate({
            'left':'-100%'
        },'slow')

    })
    $('.left_down').click(function(){
        $('#left_slide').animate({
            'left':0
        },'slow')
        $('#right_slide').animate({
            'left':'100%'
        },'slow')
    })
    $('.close_left').click(function(){
        $('#left_slide').animate({
            'left':'-100%'
        },'slow')
    })
    $('.close_right').click(function(){
        $('#right_slide').animate({
            'left':'100%'
        },'slow')
    })

}); 