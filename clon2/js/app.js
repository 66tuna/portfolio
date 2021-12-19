function scrollH(){
    $(window).on('scroll', function(e) {
        let srt = $('html, body').scrollTop();
        if(srt>= 150){
            $('#headerWrap').css({
                backgroundColor: '#fff',
                boxShadow: '2px 0 1px 1px #ddd',
                position: 'fixed'
            });
            $('#headerWrap h1>img').attr('src', './images/logoB.png');
            $('header nav>ul>li>a').css('color', '#545454').hover(function(){
                $(this).css('color', '#000');
            }, function(){
                $(this).css('color', '#545454');
            });
        }else{
            $('#headerWrap').css({
                backgroundColor: 'rgba(255,255,255,0)',
                boxShadow: 'none',
                position: 'absolute'
            });
            $('#headerWrap h1>img').attr('src', './images/logo.png');
            $('header nav>ul>li>a').css('color', '#dadada').hover(function(){
                $(this).css('color', '#fff');
            }, function(){
                $(this).css('color', '#dadada');
            });
        }
    })
}

function slidr() {
    for (let i = 0; i < 3; i++) {
        $('#box01 ul>li').eq(i).css({
            backgroundImage: `url('./images/slid${i + 1}.jpg')`,
        });
    }

    let liW = $('#box01 ul>li').innerWidth();
    $('#box01 ul>li:last').prependTo('#box01 ul');  
    $('#box01 ul').css('marginLeft', `-${liW}px`);

    $('#box01 .left').on('click', function(){
        $('.left, .right').hide();
        $('#box01 ul').animate({
            marginLeft: `+=${liW}px`
        },1000, function(){
            $('#box01 ul>li:last').prependTo('#box01 ul');
            $('#box01 ul').css('marginLeft', `-${liW}px`);
            $('.left, .right').show();
        })
    })

    $('.right').on('click',function(){
        $('.left, .right').hide();
        $('#box01 ul').animate({
            marginLeft: `-=${liW}px`
        }, 1000, function(){
            $('#box01 ul>li:first').appendTo('#box01 ul');
            $('#box01 ul').css('marginLeft', `-${liW}px`);
            $('.left, .right').show();
        })
    })

    function ani() {
        $('.left, .right').hide();
        $('#box01 ul').animate({
            marginLeft: `-=${liW}px`
        }, 1000, function() {
            $('#box01 ul>li:first').appendTo('#box01 ul');
            $('#box01 ul').css('margin-left', `-${liW}px`);
            $('.left, .right').show();
        });
    }

    setInterval(ani, 4000);
}

function navBtn() {
    $('#btn').on('click', function () {
        $(this).hide();
        $('.back').show();
        $('#headerWrap nav').animate({ left: 0 }, 400);
        $('#headerWrap .close').show();
    })

    $('#headerWrap .close').on('click', function () {
        let navW = $(this).parents().innerWidth();
        $('#headerWrap nav').animate({ left: `-${navW}px` }, 400, function () {
            $('#btn').show();
        });
        $(this).hide();
        $('.back').hide();
    })
}