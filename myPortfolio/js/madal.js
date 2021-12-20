
//객체 만들기
function Modal(title, pic, year, text1, text2, text3){
    this.title = title;
    this.pic = pic;
    this.year = year;
    this.text1 = text1;
    this.text2 = text2;
    this.text3 = text3;
}
//프로토타입
Modal.prototype.action=function(){
    //DOM 오프젝트
    let H4 =  document.querySelector('#modal h4');
    let PIC =  document.querySelector('#modal figure img');
    let YEAR = document.querySelector('#modal .year');
    let PROGRAM = document.querySelector('#modal .program');
    let HREF = document.querySelector('#modal .href a');
    let TEXT = document.querySelector('#modal .text02');
    H4.innerHTML = this.title;
    PIC.setAttribute('src', this.pic);
    YEAR.innerHTML = this.year;
    PROGRAM.innerHTML = this.text1;
    HREF.setAttribute('href', this.text2);
    TEXT.innerHTML = this.text3;

}
// 인스턴스
    let modal = [ new Modal('title01', 'images/title1.png', '2001', '프로그램1' ,'https://66tuna.github.io/portfolio/clon1/index.html', 'text01'), 
                  new Modal('title02', 'images/title2.png', '2002', '프로그램2' ,'https://66tuna.github.io/portfolio/clon2/index.html', 'text02'), 
                  new Modal('title03', 'images/title3.png', '2003', '프로그램3' ,'https://66tuna.github.io/portfolio/myPortfolio/index.html', 'text03'), 
                ]
//함수 <- 이벤트
function play(){
    document.querySelector('#modal').style.display = 'block';
    num = this.getAttribute('name');
    modal[num].action();
}
function stop(){
    document.querySelector('#modal').style.display = 'none';
}
//이벤트
let BTN = document.querySelectorAll('#box03 figure>img');
let CLOSE = document.querySelector('#modal p.close');
console.log(BTN);
BTN.forEach(function(IMG){
    IMG.addEventListener('click', play);
});
CLOSE.addEventListener('click', stop);