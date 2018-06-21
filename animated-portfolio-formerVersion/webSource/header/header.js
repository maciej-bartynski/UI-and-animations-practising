'use strict';

document.addEventListener('DOMContentLoaded', initializeNavigation);

function initializeNavigation() {
    showImgTrickForTheFirstTime();
    fireImgTrick();
    document.addEventListener('scroll', function () {
        fixedNav();
    });
}

function fixedNav() {
    let navi = document.querySelector('nav');
    let btnUpDown = document.querySelector('#toggleMenu');
    if (screen.width>991){
        if (window.pageYOffset > 200) {
            navi.classList.add('positionFixed');
            btnUpDown.classList.add('activateThisBtnNow');
        } else if (window.pageYOffset < 200) {
            navi.classList.remove('positionFixed');
            btnUpDown.classList.remove('activateThisBtnNow');
        }
    }else{
        let imag = document.querySelector('.img-positioner');
        let anch = imag.offsetTop;
        let size = anch+200;
        if (window.pageYOffset > size) {
            navi.classList.add('positionFixed');
            btnUpDown.classList.add('activateThisBtnNow');
        } else if (window.pageYOffset < size) {
            navi.classList.remove('positionFixed');
            btnUpDown.classList.remove('activateThisBtnNow');
        }
    }
}

function showImgTrickForTheFirstTime() {
    setTimeout(imageTrick, 18600);
    setTimeout(imageTrick, 19800);
}

function fireImgTrick() {
    let photo = document.querySelectorAll('header img')[0];
    let draw = document.querySelectorAll('header img')[1];
    photo.addEventListener('mouseover', function () {
        imageTrick();
    });
    photo.addEventListener('mouseout', function () {
        imageTrick();
    });
    draw.addEventListener('mouseover', function () {
        imageTrick();
    });
    draw.addEventListener('mouseout', function () {
        imageTrick();
    });
}

function imageTrick() {
    let photo = document.querySelectorAll('header img')[0];
    let draw = document.querySelectorAll('header img')[1];
    photo.classList.toggle('show');
    photo.classList.toggle('hide');
    draw.classList.toggle('hide');
    draw.classList.toggle('rotate');
    photo.classList.toggle('rotate');
    let hiddenTxt = document.querySelectorAll('#curriculum-vitae .nav-background')[0];
    if (hiddenTxt.querySelectorAll('p').length === 0) {
        let p = document.createElement('P');
        let span = document.createElement('SPAN');
        //span.innerText = '@include ';
        span.innerText = 'cześć, jestem ';
        span.style.color = '#0060fa';
        let span2 = document.createElement('SPAN');
        //span2.innerText = 'graphicTools(';
        span2.innerText = 'bartek ';
        span2.style.color = '#0060fa';
        let span3 = document.createElement('SPAN');
        //span3.innerText = 'adIllustrator, adPhotoshop';
        span3.innerText = 'i jestem z humana. ';
        span3.style.color = '#0060fa';
        let span4 = document.createElement('SPAN');
        //span4.innerText = ');';
        span4.innerText = 'trochę koduję jak nikt nie patrzy.';
        span4.style.color = 'green';
        hiddenTxt.appendChild(p);
        p.appendChild(span);
        p.appendChild(span2);
        p.appendChild(span3);
        p.appendChild(span4);
    } else {
        let para = hiddenTxt.querySelector('p');
        hiddenTxt.removeChild(para);
    }
}