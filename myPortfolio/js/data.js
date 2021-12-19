function navScroll(){
    // nav // 
 $('nav>ul>li>a').on('click',function(e){
     let str = $(this).attr('href');
    let navPos = $(str).offset().top;
    let windowW = $('#wrap').width();
    // console.log(navPos);
    if(windowW < 980){
        let navW = $('nav').innerWidth();
        // $('nav').hide();
        $('#btn').show();
        $('nav').css('left','-'+navW+'px');
    }
    $('body,html').animate({scrollTop:navPos},1000);
    // resize() 문제 해결
    //  
    return false;
 });
//  aside>ul>li>a
$('aside>ul>li>a').on('click',function(e){
    let str = $(this).attr('href');
    let navPos = $(str).offset().top;
    $('body,html').animate({scrollTop:navPos},1000);

});

$('#top').on('click',function(e){
    $('body,html').animate({scrollTop:0},1000);
});
// top
}

function navBtn(){
    $('#btn').on('click',function(e){
        $(this).hide();
        $('nav').animate({left:0},400);
    });
    $('nav .close').on('click',function(e){
        let navWidth = $('nav').innerWidth();
        console.log(navWidth);
        $('nav').animate({left:'-'+navWidth+'px'},400,function(){
            $('#btn').show();
        });

    })
}

// 
function gallery(){
//  준비하기

//  .left  .right

}