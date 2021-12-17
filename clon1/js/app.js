function scrollT(){
    // header scroll
    $(window).on('scroll', function (e) {
        let srt = $('html, body').scrollTop();
        // console.log(srt);

        // header srt
        if (srt >= 100) {
            $('#headerWrap').addClass('hScroll').css('padding', '0');
            $('header>h1>img').attr('src', './images/logo_on.png').addClass('imgCenter');
            $('header>ul>li>a').css('color', '#000');
            $('#headerWrap>header>ul>li>div>span').css({
                backgroundColor: '#000',
                top: '-10px'
            });
        } else if (srt < 100) {
            $('#headerWrap').removeClass('hScroll').css('paddingTop', '20px');
            $('header>h1>img').attr('src', './images/logo.png').removeClass('imgCenter');
            $('header>ul>li>a').css('color', '#fff');
            $('#headerWrap>header>ul>li>div>span').css("backgroundColor", '#fff');
        }

        // box05 srt

        if(srt >= 3300 && srt <= 4218){
            setTimeout(() => {
                $('#box05>article>h3').fadeIn(600);
            }, 500);
            setTimeout(() => {
                $('#box05>article>.show>span').fadeIn(800);
            }, 1000);
            setTimeout(() => {
                $('#box05>article>.show>p').fadeIn(1000);
            }, 1500);
            setTimeout(() => {
                $('#box05>article>.show>a').fadeIn(1000);
            }, 500);
        }
    });
}

function slid(){
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
}   

function headerHover(){
    $('header>ul>li').hover(function(){
        $(this).children('div').fadeIn(300);
    }, function(){
        $(this).children('div').hide();
    });
}