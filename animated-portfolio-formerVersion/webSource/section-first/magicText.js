'use strict';
import {triggerNextAnimation} from './synchonize-animations';
document.addEventListener('DOMContentLoaded', initializeMagicText);
let iterator = 0;

function initializeMagicText() {
    setTimeout(setMagicText, 100);
}

function setMagicText() {
    let leftColumn = document.querySelector("#cv .section_left-side");
    let lines = leftColumn.querySelectorAll(".spanLine");
    let strings = [
        ['const ', 'maciejBartyński ', ' = { }'],
        ['} '],
        ['_frontEnd', ': ', 'true', ', '],
        ['_tel', ': ', '784 482 159', ', '],
        ['_mail', ': ', 'maciek.bartynski@gmail.com', ', '],
        ['_gitHub', ': ', 'bartek-z-humana', ', ', '//@'],
        ['_linkedIn', ': ', 'maciej bartyński', ', ','//@'],
        ['_tools', ': ','JavaScript6 + (S)CSS3 + HTML5'],
        ['myCVpresentation', '(); ', ' // watch! >>>'],
    ];
    let lineIterator = 0;
    let wordIterator = 0;
    let characterIterator = 0;
    magicSpan();

    function magicSpan() {
        if (lineIterator === 9) {
            setLinksToGitHAndLinkedIn();
            triggerNextAnimation();
        } else if (lineIterator < 9) {
            let line = lines[lineIterator];
            if (lineIterator === 1) {
                line = lines[7];
                let enterObj = lines[0].querySelectorAll('.spanColor')[2];
                enterObj.innerText = ' = {'
            } else if (lineIterator > 1 && (lineIterator < 8) === true) {
                let liIter = lineIterator - 1
                line = lines[liIter];
            } else if (lineIterator > 8) {
                let liItera = lineIterator + 1;
                line = lines[liItera];
            }
            let array = strings[lineIterator];
            let word = array[wordIterator];
            let span = document.createElement('span');
            span.classList.add('spanColor');
            line.appendChild(span);
            span.innerText = word[0];
            setThisSpan();

            function setThisSpan() {
                characterIterator++;
                let i = characterIterator;
                let x = word[i];
                if (x === " ") {
                    span.innerText = span.innerText + '\u00a0';
                } else {
                    span.innerText = span.innerText + x;
                }

                if (i < word.length - 1) { //nast. litera
                    if (lineIterator === 8 && i === 1) {
                        setTimeout(setThisSpan, 250);
                    } else {
                        setTimeout(setThisSpan, 30);
                    }
                } else if (wordIterator === array.length - 1) { //nast. array (linia)
                    lineIterator++;
                    wordIterator = 0;
                    characterIterator = 0;
                    if (lineIterator === 1) {
                        setTimeout(magicSpan, 300);
                    } else if (lineIterator === 2) {
                        setTimeout(magicSpan, 500);
                    } else if (lineIterator === 8) {
                        setTimeout(magicSpan, 500);
                    } else {
                        setTimeout(magicSpan, 100);
                    }
                } else if (i === word.length - 1 || i === word.length) { //nast. wyraz
                    wordIterator++;
                    characterIterator = 0;
                    setTimeout(magicSpan, 100);
                }
            }
        } 
    }
}

function setLinksToGitHAndLinkedIn(){
    let lines=document.querySelectorAll('.spanLine');
    let gitLine = lines[4];
    let gitBtn = gitLine.querySelectorAll('.spanColor')[4];
    gitBtn.style.cursor="pointer";
    let linLine = lines[5];
    let linBtn = linLine.querySelectorAll('.spanColor')[4];
    linBtn.style.cursor="pointer";
    gitBtn.addEventListener('click', goToGitHref);
    linBtn.addEventListener('click', goToLinHref);


    function goToGitHref(){
        window.open('https://github.com/bartek-z-humana');
    }

    function goToLinHref(){
        window.open('https://www.linkedin.com/in/maciej-barty%C5%84ski-417089155/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bm1vkCWZuT5GC04I9yU%2Fuug%3D%3D');
    }
}