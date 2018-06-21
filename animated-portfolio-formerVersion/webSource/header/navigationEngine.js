//w tej sekcji znajduje się tylko obsługa podświetlania guzików. Kliknięcia
//każdego guzika są opisane w skrypcie odnośnej sekcji.
import {
    showStatsDynamically
} from './../section-third/someMagicTricks.js';

'use strict';
import {toggleMenuTurnOn} from './toggleMenu.js';

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('scroll', function (){
        initializeScrollPositionDetecting();
        initializeMagicTrickOnStatsSection();
    });
    toggleMenuTurnOn();
});
let youAreInArea = [false, false, false];
function setAreasPosibbleToVisit() {
    let posibbleAreas = [];
    let aboutmeArea = document.querySelector('#cv');
    let statsArea = document.querySelector('#whatsapp-project');
    let toolsArea = document.querySelector('#sectionToolsAndMaterials');
    posibbleAreas.push(aboutmeArea, statsArea, toolsArea);
    return posibbleAreas;
};

function initializeScrollPositionDetecting(event) {
    let isCurrentView = setAreasPosibbleToVisit();   
    for (let i = 0; i < isCurrentView.length; i++) {
        let section = isCurrentView[i];
        let anchor = section.offsetTop;
        let totalViewFromUp = anchor - (screen.height / 2);
        let totalViewFromBottom = anchor + (screen.height / 2);
        let pointOfView = window.pageYOffset;
        if (pointOfView > totalViewFromUp && pointOfView < totalViewFromBottom) {
            if (youAreInArea[i] === false) {
                youAreInArea[i] = true;
                enteringAreaAndLighteningButton(i);
                if(i===2){
                    let button=document.querySelector('.turnOnBtn');
                    button.classList.add('beforeIsPressed');
                }
            }
        } else {
            if (youAreInArea[i] === true) {
                youAreInArea[i] = false;
                leavingAreaAndCleaningBtn(i);
                if(i===2){
                    let button=document.querySelector('.turnOnBtn');
                    button.classList.remove('beforeIsPressed');
                }
            }
        }
    }
}

function enteringAreaAndLighteningButton(iter) {
    let btns = [];
    let aboutBtn = document.querySelector('#aboutme');
    let whatsappBtn = document.querySelector('#whatsappprostats');
    let toolsBtn = document.querySelector('#tools');
    btns.push(aboutBtn, whatsappBtn, toolsBtn);
    let btn = btns[iter];
    let classes = btn.classList;
    classes.add('active');
}

function leavingAreaAndCleaningBtn(iter) {
    let btns = [];
    let aboutBtn = document.querySelector('#aboutme');
    let whatsappBtn = document.querySelector('#whatsappprostats');
    let toolsBtn = document.querySelector('#tools');
    btns.push(aboutBtn, whatsappBtn, toolsBtn);
    let btn = btns[iter];
    let classes = btn.classList;
    classes.remove('active');
}

let areTheyShown=false;
function initializeMagicTrickOnStatsSection(){
    let insideStatsArea = document.querySelector('#whatsapp-project .section_right-side');
    let anchr = insideStatsArea.offsetTop;
    let totalViewFrmUp = anchr - (screen.height / 2);
    let totalViewFrmBottom = anchr + screen.height;
    let pointOfViw = window.pageYOffset;
    if (pointOfViw > totalViewFrmUp && pointOfViw < totalViewFrmBottom) {
        if (areTheyShown===false){
            showStatsDynamically();
            areTheyShown=true;
        }
    } else {
        if (areTheyShown===true){
            areTheyShown=false;
        }
    }
}

   