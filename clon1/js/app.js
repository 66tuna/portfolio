$(window).on('scroll', function (e) {
    let str = $('html, body').scrollTop();
    if (str >= 100) {
        $('#headerWrap').addClass('hScroll').css('padding', '0');
        $('header>h1>img').attr('src', './images/logo_on.png').addClass('imgCenter');
        $('header>ul>li>a').css('color', '#000');
    } else if (str < 100) {
        $('#headerWrap').removeClass('hScroll').css('paddingTop', '20px');
        $('header>h1>img').attr('src', './images/logo.png').removeClass('imgCenter');
        $('header>ul>li>a').css('color', '#fff');
    }
});

$(function(){
    $('#box02 .leftBox .in_rolling .in>div:first').addClass('on');
    $('#box02 .rightBox .in>div:first').addClass('on');

    $('#box02 .leftBox .in_box>.btn_box>.next').on('click',function () { 
        let left = '#box02 .leftBox .in_rolling .in>div';
        let right = '#box02 .rightBox .in>div';
        let cnt = 0;

        $(left).removeClass('on');
        $(right).removeClass('on');

        for(var str of $(left)){
            return str;
        }
        
    });
})