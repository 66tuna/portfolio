function slidr(){
    for(let i=0; i<3; i++){
        $('#box01 ul>li').eq(i).css({
            backgroundImage:  `url('./images/slid${i+1}.jpg')`,
            
        });
    }
    // let liW = $('#box01 ul>li').innerWidth();
    // $('#box01 ul').css('marginLeft', `-${liW*2}px`);

}