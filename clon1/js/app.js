// header scroll
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
    // opacity
    $('#box02 .leftBox .in_rolling .in>div:first').addClass('on');
    $('#box02 .rightBox .in>div:first').addClass('on');

    var cnt = 0; /* min 0 max 4 */
    $('#box02 .leftBox .in_box>.btn_box>.next').on('click',function () { 
        let left = '#box02 .leftBox .in_rolling .in>div';
        let right = '#box02 .rightBox .in>div';

        $(left).removeClass('on');
        $(right).removeClass('on');
        
        cnt++;
        if(cnt < 5){
            $(left).eq(cnt).addClass('on');
            $(right).eq(cnt).addClass('on');
        }else if(cnt >= 5){
            cnt = 0;
            $(left).eq(cnt).addClass('on');
            $(right).eq(cnt).addClass('on');
        }
        return cnt;
        
    });

    $('#box02 .leftBox .in_box>.btn_box>.prev').on('click',function () { 
        let left = '#box02 .leftBox .in_rolling .in>div';
        let right = '#box02 .rightBox .in>div';

        $(left).removeClass('on');
        $(right).removeClass('on');
        
        cnt--;
        if(cnt >= 0 && cnt < 5){
            $(left).eq(cnt).addClass('on');
            $(right).eq(cnt).addClass('on');
        }else if(cnt < 0){
            cnt = 4;
            $(left).eq(cnt).addClass('on');
            $(right).eq(cnt).addClass('on');
        }
        return cnt;
    });
})