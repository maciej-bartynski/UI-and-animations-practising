'use strict';
import {initializeMobileLabel} from './mobileDescription.js';
document.addEventListener('DOMContentLoaded', initializePowerLines);
document.addEventListener('DOMContentLoaded', cogtest);

function cogtest(){
    let btn = document.querySelector('#sectionToolsAndMaterials .turnOnBtn');
    btn.addEventListener('click', function () {
        animateMachineStart();
        let isExplorer = document.querySelector('svg.small-cog');
    let isClassList = isExplorer.classList;
    if(isClassList===undefined){
        (function warningUsers(){
            let warnin = document.querySelector('#sectionToolsAndMaterials .turnOnPositioner span');  
            warnin.innerText = 'W TEJ PRZEGLĄDARCE WIĘKSZOŚĆ ELEMENTÓW NIE WYŚWIETLI SIĘ :-(';
        })();
    }
    });
}

function animateMachineStart(){
    let isExplorer = document.querySelector('svg.small-cog');
    let isClassList = isExplorer.classList;
    let btn = document.querySelector('#sectionToolsAndMaterials .turnOnBtn');
    let cog = document.querySelector('#sectionToolsAndMaterials .turning-on-positioner');
    btn.classList.toggle('press');
    cog.classList.toggle('press');
    setTimeout(function(){
        initializeMobileLabel();
        startFirstSegmentOfPowerLines();
    }, 2500);
    function startFirstSegmentOfPowerLines(){
        let vpower = document.querySelector('#sectionToolsAndMaterials .vp-between.vp-first .inside');
        vpower.classList.toggle('animateThisElement');
        setTimeout(startNextPowerLine, 100);
        function startNextPowerLine(){
            let hpower = document.querySelector('#sectionToolsAndMaterials .hp-between.hp-first .inside');
            hpower.classList.toggle('animateThisElement');
            setTimeout(startResistance, 100);
            function startResistance () {
                let resistor = document.querySelector('#sectionToolsAndMaterials .elementRectangular');
                resistor.classList.toggle('animateThisElement');
                setTimeout(nextPLine, 2000);
                function nextPLine(){
                    let hpowerB = document.querySelector('#sectionToolsAndMaterials .hp-between.hp-second .inside');
                    hpowerB.classList.toggle('animateThisElement');
                    setTimeout(startSteamEngineAtLeast, 100);
                    function startSteamEngineAtLeast () {
                        let stEng = document.querySelector('#sectionToolsAndMaterials .elementSteamEngine');
                        stEng.classList.toggle('animateThisElement');
                        setTimeout(startWhatIsVisible, 400);
                        function startWhatIsVisible () {
                            let sEng = document.querySelector('#sectionToolsAndMaterials .elementSteamEngine');
                            let cicle = sEng.querySelector('.maincogsteam');
                            let elA = sEng.querySelector('.maincorb');
                            let elB = sEng.querySelector('.lessercorb');
                            let elC = sEng.querySelector('.frontier');
                            if(isClassList!==undefined){
                                cicle.classList.toggle('animateThisElement');
                                elA.classList.toggle('animateThisElement');
                                elB.classList.toggle('animateThisElement');
                                elC.classList.toggle('animateThisElement'); 
                            }
                            setTimeout(nextStepInto, 1000);
                            function nextStepInto () {
                                let track = document.querySelector('#sectionToolsAndMaterials .track');
                                track.classList.toggle('animateThisElement');
                                setTimeout(startIsVisible, 400);
                                function startIsVisible () {
                                    let ftrack = document.querySelector('#sectionToolsAndMaterials .filledtrack');
                                    ftrack.classList.toggle('animateThisElement');
                                    setTimeout(sphereShine, 2000);
                                    function sphereShine () {
                                        let sphere = document.querySelector('#sectionToolsAndMaterials .spherestation');
                                        sphere.classList.toggle('onshow');
                                        sphere.classList.toggle('animateThisElement');
                                        setTimeout(lastOne, 3000);
                                        function lastOne(){
                                            let vpower = document.querySelector('#sectionToolsAndMaterials .vp-between.vp-second .inside');
                                            vpower.classList.toggle('animateThisElement');
                                            setTimeout(startPowerLines, 100);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function initializePowerLines() {
    let trigger = document.querySelector('#sectionToolsAndMaterials #btnForMobileUsers');
    trigger.addEventListener('click', startPowerLines);
}

function startPowerLines() {
    let trigger = document.querySelector('#sectionToolsAndMaterials #btnForMobileUsers');
    let br = document.createElement('span');
    br.innerText='Wystartowała uproszczona animacja dla małego ekranu. Zobacz ją na większym!';
    br.style.width='90%';
    trigger.innerText='';
    br.style.whiteSpace ='normal';
    trigger.appendChild(br);
    trigger.style.width='100%';
    let powerAreas = document.querySelectorAll('#sectionToolsAndMaterials  .functionalRowOfTools');
    let amount = powerAreas.length;
    triggerThePowerApocalypse(powerAreas, amount);
}

function triggerThePowerApocalypse(areas, num) {
    let amount = num;
    let iter = 0;
    nextPowerArea();

    function nextPowerArea() {
        let area = areas[iter];
        iter++;
       
        let firstLine = area.querySelector('.vp.first');
        firstLine.classList.toggle('vpturnon');
        setTimeout(secondLine, 100);

        function secondLine() {
            let secondLine = area.querySelector('.hp.first');
            secondLine.classList.toggle('hpturnon');
            setTimeout(firstTool, 100);

            function firstTool() {

                let isExplorer = document.querySelector('svg.small-cog');
                let isClassList = isExplorer.classList;
                
                let firstToolIcon = area.querySelector('.firstt');
                let firstToolName = area.querySelector('.firstn');
                if(isClassList!==undefined){
                    firstToolIcon.classList.toggle('bturnon');
                }
                
                firstToolName.classList.toggle('bturnon');
                //klasa z opacity dla: napis i SVG
                setTimeout(thirdLine, 500);

                function thirdLine() {
                    let thirdLine = area.querySelector('.hp.second');
                    thirdLine.classList.toggle('hpturnon');
                    setTimeout(secondTool, 100);

                    function secondTool() {
                        let secondToolIcon = area.querySelector('.secondt');
                        let secondToolName = area.querySelector('.secondn');
                        if(isClassList!==undefined){
                        secondToolIcon.classList.toggle('bturnon');
                        }
                        secondToolName.classList.toggle('bturnon');
                        //klasa z opacity dla Napis iSVG
                        setTimeout(fourthLine, 500);
                        function fourthLine(){
                            let fourthLine = area.querySelector('.hp.third');
                            fourthLine.classList.toggle('hpturnon');
                            setTimeout(fifthLine, 100);
                            function fifthLine(){
                                let fifthLine = area.querySelector('.vp.second');
                                fifthLine.classList.toggle('vpturnon');
                                if (iter < amount) {
                                    setTimeout(nextPowerArea, 100);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}