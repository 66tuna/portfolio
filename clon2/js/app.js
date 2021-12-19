function slidr(){
    for(let i=0; i<3; i++){
        $('#box01 ul>li').eq(i).css({
            backgroundImage:  `url('./images/slid${i+1}.jpg')`,
            
        });
    }
    // let liW = $('#box01 ul>li').innerWidth();
    // $('#box01 ul').css('marginLeft', `-${liW*2}px`);
}

function navBtn(){
    $('#btn').on('click', function(){
        $(this).hide();
        $('.back').show();
        $('#headerWrap nav').animate({left: 0}, 400);
        $('#headerWrap .close').show();
    })

    $('#headerWrap .close').on('click', function(){
        let navW = $(this).parents().innerWidth();
        $('#headerWrap nav').animate({left: `-${navW}px`}, 400, function(){
            $('#btn').show();
        });
        $(this).hide();
        $('.back').hide();
    })
}