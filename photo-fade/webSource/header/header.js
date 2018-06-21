
import {listenForImgRotation} from './dynamic-selfintroduction.js';
'use strict';
document.addEventListener('DOMContentLoaded', initializeImageTricksHere);
function initializeImageTricksHere() {
    fireImgTrick();
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