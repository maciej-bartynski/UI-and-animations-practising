'use strict';
import {rotateCogs} from './synchonize-animations.js';
import {stopRotateCogs} from './synchonize-animations.js';
import {clockIsWorking} from './synchonize-animations.js';
document.addEventListener('DOMContentLoaded', axBtnsInitialize);
document.addEventListener('DOMContentLoaded', axSegmentsInitialize);
document.addEventListener('DOMContentLoaded', cogsRotating);
document.addEventListener('DOMContentLoaded', clockWorking);
document.addEventListener('DOMContentLoaded', closureLightening);
function closureLightening(){
    let clos=document.querySelector('#stringClosure');
    let btn=document.querySelector('#btnZeroOne');
    btn.addEventListener('click', function(){
        clos.classList.toggle('animateOpacity');
    });
}
function axBtnsInitialize(){
    let btns = document.querySelectorAll('.ax-description div div');
    for (let i=0; i<btns.length;i++){
        let eachOne=btns[i];
        eachOne.addEventListener('mouseover', function () {
            showAxDescription(i);
            clockIsWorking();
        })
        eachOne.addEventListener('mouseout', function () {
            hideAxDescription(i)
            clockIsWorking();
        })
    }
}
function axSegmentsInitialize(){
    let sgmnts = document.querySelectorAll('.ax .ax-positioner');
    for (let i=0; i<sgmnts.length;i++){
        let eachOne=sgmnts[i];
        eachOne.addEventListener('mouseover', function () {
            showAxDescription(i);
            clockIsWorking();
        })
        eachOne.addEventListener('mouseout', function () {
            hideAxDescription(i)
            clockIsWorking();
        })
    }
}
function showAxDescription(n){
    let descriptions = document.querySelectorAll('.ax-description span');
    let toShow = descriptions[n];
    toShow.classList.remove('removeToShowAndRead');
}
function hideAxDescription(n){
    let descriptions = document.querySelectorAll('.ax-description span');
    let toShow = descriptions[n];
    toShow.classList.add('removeToShowAndRead');
}
function cogsRotating () {
    let isExplorer = document.querySelector('svg.small-cog');
    let isClassList = isExplorer.classList;
    if(isClassList!==undefined){
        let cogs = document.querySelector('div.svg-positioner');
        cogs.addEventListener('mouseover', rotateCogs);
        cogs.addEventListener('mouseout', stopRotateCogs);
    }
}
function clockWorking () {
    let isExplorer = document.querySelector('svg.small-cog');
    let isClassList = isExplorer.classList;
    if(isClassList!==undefined){
        let clock = document.querySelector('div.svg-ax-positioner');
        clock.addEventListener('mouseover', clockIsWorking);
        clock.addEventListener('mouseout', clockIsWorking);
    }
}