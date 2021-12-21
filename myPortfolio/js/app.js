function navScroll(){
    // nav
    $('nav>ul>li>a').on('click', function(e){
        let str = $(this).attr('href');
        let headerH = $('#headerWrap').innerHeight();
        let windowW = $('#wrap').width();
        // console.log(str, headerH);
        if(windowW < 980){
            let navW = $('nav').innerWidth();
            // $('nav').hide();
            $('#btn').show();
            $('nav').css('left', '-'+navW+'px');
        }
        let navPos = $(str).offset().top;
        console.log(navPos);
        $('body,html').animate({scrollTop:navPos}, 1000);
       
        return false;
    });
    //aside>ul>li>a
    $('aside>ul>li>a').on('click', function(e){
        let str = $(this).attr('href');
        let navPos = $(str).offset().top;

        $('body,html').animate({scrollTop:navPos}, 1000);
        return false;
    });

    $('#top>a').on('click', function(){
        $('body,html').animate({scrollTop: 0}, 800);
        return false;
    })
}

function navBtn(){
    $('#btn').on('click', function(){
        $(this).hide();
        $('nav').animate({left: 0}, 400);
    });

    $('nav>.close').on('click', function(){
        let navW = $(this).parents().innerWidth();
        console.log(navW);
        $('nav').animate({left: `-${navW}px`}, 400, function(){
            $('#btn').show();
        });
    });
}

function gallery(){
    // 준비하기
    let figureW = $('#all>figure').width();
    console.log(figureW);
    $('#all>figure:last').prependTo('#all');
    $('#all>figure:first').clone().appendTo();
    // $('#all').html($('#show').clone());
    $('#all').css('margin-left',  `-${figureW}px`);

    //.left .right
    $('#box03 .left').on('click', function(){
        $('#all').stop().animate({marginLeft:`+=${figureW}px`}, 800, function(){
            $('#all>figure:last').prependTo('#all');
            $('#all').css('margin-left',`-${figureW}px`);
            
        });
    });

    $('#box03 .right').on('click', function(){
        $('#all').stop().animate({marginLeft:`-=${figureW}px`}, 800, function(){
            $('#all>figure:first').appendTo('#all');
            $('#all').css('margin-left',`-${figureW}px`);
            
        });
    });
}

function formDate(){
    let $liForm = $('#box04 li>input, #box04 li>textarea');
    $liForm.removeAttr('placeholder');
    $liForm.on('focus', function(e){
        $(this).prev('label').fadeOut(400);
    })
    $liForm.on('blur', function(e){
        let str = $(this).val();
        if(str == ""){
            $(this).prev('label').fadeIn(400);
        }
    })
}

function Modal(){
    $('#all>figure>img').on('click', function(){
        
    })
}