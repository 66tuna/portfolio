$(function () {
    $(window).on('scroll', function(e){
        let str = $('html, body').scrollTop();
        console.log(str);
        if(str >= 100){
            $('#headerWrap').addClass('hScroll');
            $('header>nav>ul>li>a').css('color', '#000');
            $('header>h1').css('color', '#000');
        }else if(str < 100){
            $('#headerWrap').removeClass('hScroll');
            $('header>nav>ul>li>a').css('color', '#fff');
            $('header>h1').css('color', '#fff');
        }
    })
})