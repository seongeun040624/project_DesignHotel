$(function(){
    $(window).on('scroll', function(){
        let scrollTop = $(window).scrollTop();
        //console.log(scrollTop)
        if(scrollTop >= 500){
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
        }
    })

    
    $('.btnMenu').click(function(){
        $('.mobileHeader').animate({left:'100%'}, 500);
        $('.mobileMenu').animate({left:'0'}, 500);
    });
    $('.close').click(function(){
        $('.mobileHeader').animate({left:'0'}, 500);
        $('.mobileMenu').animate({left:'-100%'}, 500);
    });

    let winW=$(window).innerWidth();
    let winH=$(window).innerHeight();
    let vidW=$('.m-video video').innerWidth();
    let vidH=$('.m-video video').innerHeight();
    $('.m-video').css({width:'100%', height: winH});

    if( winW > vidW){
        $('.m-video video').css({width:winW, height: 'auto'});
    };
    if( winH > vidH){
        $('.m-video video').css({width:'auto', height: winH});
    };

    
    $(window).resize(resizeFn); // 윈도우에서 리사이즈가 되면 아래 함수가 실행됨
    function resizeFn(){
        let winW=$(window).innerWidth();
        let winH=$(window).innerHeight();
        let vidW=$('.m-video video').innerWidth();
        let vidH=$('.m-video video').innerHeight();

        $('.m-video').css({width:'100%', height: winH});

        if( winW > vidW){
            $('.m-video video').css({width:winW, height: 'auto'});
        };
        if( winH > vidH){
            $('.m-video video').css({width:'auto', height: winH});
        };
    };


    //비디오 제어
    let videoPlay = 'on';
    let soundMuted = 'off';

    $('.m-video video').get(0).autoPlay= true; //자동재생
    $('.m-video video').get(0).loop= 0; //0은 무한반복, 1은 한번
    $('.m-video video').get(0).muted= true; //음소거

    $('.pauseIcon').click(function(){
        if(videoPlay === 'on'){
        $('.pauseIcon').find('i').attr('class','fas fa-play');
        $('.m-video video').get(0).pause();
        videoPlay = 'off';
        }else{
            $('.pauseIcon').find('i').attr('class','fas fa-pause');
            $('.m-video video').get(0).play();
            videoPlay = 'on';
        }
    });

    $('.mutedIcon').click(function(){
        if(soundMuted === 'off'){
            $('.mutedIcon').find('i').attr('class', 'fas fa-volume-mute');
            $('.m-video video').get(0).muted= false;
            soundMuted = 'on';
        }else{
            $('.mutedIcon').find('i').attr('class', 'fas fa-volume-up');
            soundMuted = 'off';
            $('.m-video video').get(0).muted= true;
        }
    });


    let nextTop = $('#section2').offset().top; //$():객체, top객체 속성 = $()의 top 값을 변수에 담으란 뜻 맞나
    $('.nextIcon').click(function(){
        $(window).scrollTop(nextTop);
        return false;
    })



    //section3
    const TrandingWrap = $('.trendingWrap');
    let offset = TrandingWrap.offset().left;
    //console.log(offset)

    TrandingWrap.on({mousemove(e){
        /* if(e.pageX >= 1920){
            return false
        }else{ */
            $(this).css({left: -e.pageX})
        /* } */
    }});


    //footer
    let tr = true;
    $('.currency a').click(function(){
        if(tr === true){
            $('.currencys').css('display', 'block');
            tr = false;
        }else{
            $('.currencys').css('display', 'none');
            tr = true;
        }
    });

});