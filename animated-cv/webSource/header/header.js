
import {listenForImgRotation} from './dynamic-selfintroduction.js';
'use strict';

document.addEventListener('DOMContentLoaded', fireWhenIframeIsOpenedB);
function fireWhenIframeIsOpenedB(){
    let i = 0;
    document.addEventListener('mouseover', function(){
        i++;
        if(i===1){
        initializeNavigation();
        }
    });
}
function initializeNavigation() {
    showImgTrickForTheFirstTime();
    fireImgTrick();
}

function showImgTrickForTheFirstTime() {
    setTimeout(imageTrick, 18600);
    setTimeout(function () {listenForImgRotation(true)}, 19000);
    setTimeout(imageTrick, 19800);
    setTimeout(function () {listenForImgRotation(false)}, 19900);
}

function fireImgTrick() {
    let photo = document.querySelectorAll('header img')[0];
    let draw = document.querySelectorAll('header img')[1];
    photo.addEventListener('mouseover', function () {
        imageTrick();
        listenForImgRotation(true);
    });
    photo.addEventListener('mouseout', function () {
        imageTrick();
        listenForImgRotation(false);
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
}