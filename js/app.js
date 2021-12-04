$(function () {
    $(window).on('scroll', function(e){
        let str = $('html, body').scrollTop();
        if(str >= 140){
            $('header').addClass('hScroll');
            $('header>ul>li').css('color', '#fff');
        }else if(str < 140){
            $('header').removeClass('hScroll');
            $('header>ul>li').css('color', '#000');
        }
    })
})