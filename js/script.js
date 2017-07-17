
var btn_one = document.querySelector('#gallery .one');
var btn_two = document.querySelector('#gallery .two');
var btn_three = document.querySelector('#gallery .three');
var btn_four = document.querySelector('#gallery .four');

var images = document.querySelectorAll('#gallery .photos img');
var i = 0; 

btn_one.onclick = one;
function one(){
    images[i].className ='';
    i--;
    
    if (i < 0) {
        i = images.length - 1;
    } 
    
    images[i].className ='showed';
    btn_one.src= "img/pag-on.png";
    btn_two.src= "img/pag-1.png";
    btn_three.src= "img/pag-1.png";
    btn_four.src= "img/pag-1.png";
}

btn_two.onclick = two;
function two(){
    images[i].className ='';
    i++;
    
    if (i >= images.length){
        i = 0;
    } 
    
    images[i].className ='showed';

    btn_one.src= "img/pag-1.png";
    btn_two.src= "img/pag-on.png";
    btn_three.src= "img/pag-1.png";
    btn_four.src= "img/pag-1.png";
}

btn_three.onclick = three;
function three(){
    images[i].className ='';
    i++;

     if (i >= images.length){
        i = 0;
    } 
    
    images[i].className ='showed';

    btn_one.src= "img/pag-1.png";
    btn_two.src= "img/pag-1.png";
    btn_three.src= "img/pag-on.png";
    btn_four.src= "img/pag-1.png";
}

btn_four.onclick = four; 
function four(){
    images[i].className ='';
    i++;

     if (i >= images.length){
        i = 0;
    } 
    
    images[i].className ='showed';

        btn_one.src= "img/pag-1.png";
        btn_two.src= "img/pag-1.png";
        btn_three.src= "img/pag-1.png";
        btn_four.src= "img/pag-on.png";
}
 
setInterval(function() {
    three();
}, 3000);

//Sizes

var m = document.getElementById('m');
var l = document.getElementById('l');
l.className='backImage';
var xl = document.getElementById('xl');
var xxl = document.getElementById('xxl');

var mPic = document.createElement('img');
mPic.setAttribute('src', 'img/M.png');
mPic.classList.add('mPic');

var lPic = document.createElement('img');
lPic.setAttribute('src', 'img/L.png');
lPic.classList.add('lPic');

var xlPic = document.createElement('img');
xlPic.setAttribute('src', 'img/XL.png');
xlPic.classList.add('xlPic');

var xxlPic = document.createElement('img');
xxlPic.setAttribute('src', 'img/XXL.png');
xxlPic.classList.add('xxlPic');

var backgr = document.getElementById('background');
backgr.appendChild(mPic);
backgr.appendChild(lPic);
backgr.appendChild(xlPic);
backgr.appendChild(xxlPic);

m.onclick = sizeOne;
function sizeOne(){

    m.className='backImage';
    l.className='backImageNo';
    xl.className='backImageNo';
    xxl.className='backImageNo';

    mPic.className='activeSize';
    lPic.className='passiveSize';
    xlPic.className='passiveSize';
    xxlPic.className='passiveSize';
}

l.onclick = sizeTwo;
function sizeTwo(){

    m.className='backImageNo';
    l.className='backImage';
    xl.className='backImageNo';
    xxl.className='backImageNo';

    mPic.className='passiveSize';
    lPic.className='activeSize';
    xlPic.className='passiveSize';
    xxlPic.className='passiveSize';
}

xl.onclick = sizeThree;
function sizeThree(){

    m.className='backImageNo';
    l.className='backImageNo';
    xl.className='backImage';
    xxl.className='backImageNo';

    mPic.className='passiveSize';
    lPic.className='passiveSize';
    xlPic.className='activeSize';
    xxlPic.className='passiveSize';
}

xxl.onclick = sizeFour;
function sizeFour(){

    m.className='backImageNo';
    l.className='backImageNo';
    xl.className='backImageNo';
    xxl.className='backImage';

    mPic.className='passiveSize';
    lPic.className='passiveSize';
    xlPic.className='passiveSize';
    xxlPic.className='activeSize';
}

