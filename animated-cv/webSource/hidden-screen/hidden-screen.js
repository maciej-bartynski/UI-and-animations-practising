'use strict';
document.addEventListener('DOMContentLoaded', sectionSecondInitialize);
function sectionSecondInitialize() {
    let mobileDetecting=screen.width;
    if (mobileDetecting>800===true){
        let btn = document.querySelector('#thisEngine');
        btn.addEventListener('click', sectionBtnManaging);
    }else{
        btn.innerText="Dla większych ekranów jest tu coś jeszcze!";
    }
}
function sectionBtnManaging() {
    let btn = document.querySelector('#thisEngine');
    btn.style.animation='none';
    let classes = btn.classList
    if (classes.contains('active') === true) {
        classes.remove('active');
        removeSection();
        btn.innerText="Jak działa CV++?"
    } else if (classes.contains('active') === false) {
        classes.add('active');
        createSection();
        btn.innerText="<<<"
    }
}
function createSection() {
    let firstAnchor = document.querySelector('#cv');
    let newSection = document.createElement('section');
    newSection.classList.add('this-engine-section');
    let isExplorer = document.querySelector('svg.small-cog');
    let isClassList = isExplorer.classList;
    if (isClassList !== undefined) {
        newSection.classList.add('not-for-IE');
    }
    newSection.classList.add('this-engine-animation');
    createContentForThis(newSection);
    firstAnchor.appendChild(newSection);
}
function removeSection() {
    let firstSection = document.querySelector('#cv');
    let insideSections = firstSection.querySelectorAll('.this-engine-section');
    let iter = insideSections.length - 1;
    let newSection = insideSections[iter];
    newSection.classList.remove('this-engine-animation');
    newSection.classList.add('controllClass');
    setTimeout(function () {
        firstSection.removeChild(newSection);
    }, 1000)
}
function createContentForThis(newSection) {
    let leftColumn = document.createElement('DIV');
    leftColumn.classList.add('engine-section_left-side');
    newSection.appendChild(leftColumn);

    let rightColumn = document.createElement('DIV');
    rightColumn.classList.add('engine-section_right-side');
    newSection.appendChild(rightColumn);
    let divA = document.createElement('DIV');
    leftColumn.appendChild(divA);
    for (let i = 0; i < 35; i++) {
        let span = document.createElement('span');
        span.innerText = i + 1 + '.';
        span.classList.add('classBack');
        divA.appendChild(span);
    }
    let invisibleDiv = document.createElement('DIV');
    invisibleDiv.classList.add('txt');
    divA.appendChild(invisibleDiv);
    for (let i = 0; i < 8; i++) {
        let tab = ['<!-- ', 'Lewa kolumna:', 'setTimeout() + funkcja rekurencyjna: -->',
            '//dodaj kolejną literę do wyrazu, odlicz czas, powtórz',
            '//',
            '//jeśli to ostatnia litera w wyrazie, dodaj kolejny wyraz do linii, i wróć do dodawania liter',
            '//',
            '//jeśli to ostatni wyraz w linii, dodaj kolejną linię, dodaj wyraz w tej linii i wróć do dodawania liter',
            '//', '//', '//'
        ]
        let span = document.createElement('span');
        span.classList.add('inTxt');
        span.innerText = tab[i];
        invisibleDiv.appendChild(span);
    }
    //to jest prawa kolumna;
    let divB = document.createElement('DIV');
    divB.classList.add('includedToThis');
    rightColumn.appendChild(divB);
    for (let i = 0; i < 35; i++) {
        let span = document.createElement('span');
        span.innerText = i + 1 + '.';
        span.classList.add('classBack');
        divB.appendChild(span);
    }
    let invisibleDivForB = document.createElement('DIV');
    invisibleDivForB.classList.add('txt');
    divB.appendChild(invisibleDivForB);
    for (let i = 0; i < 11; i++) {
        let tab = ['<!-- Prawa kolumna - góra: oś czasu', '(SVG: własne projekty)', '+ pozycjonowanie absolutne/relatywne + animacje @keyframes -->',
            '//ostatnia litera poprzedniej animacji odpala animację TEJ sekcji',
            '//',
            '//zegar + zębatka: dwa pliki SVG rotowane w przeciwnych kierunkach (animate: iteration + counter-iteration)',
            '//',
            '//\'opadające\' podpisty osi czasu to technologia CSS-transition na właściwość \'weight\', przy jednoczesnym \'overflow: visible\'. Gdy pole tekstowe ma szerokość ZERO, nie mieszczący się tekst jest ustawiony pionow. Przy poszerzaniu się pola, kolejne litery opadają na swoje miejsca.',
            '//', '//', '//'
        ]
        let span = document.createElement('span');
        span.classList.add('inTxt');
        span.innerText = tab[i];
        invisibleDivForB.appendChild(span);
    }
    //horizontal
    let divC = document.createElement('DIV');
    divC.classList.add('includedToThis');
    rightColumn.appendChild(divC);
    let divD = document.createElement('DIV');
    divD.classList.add('includedToThis');
    rightColumn.appendChild(divD);
    //drugie okno
    for (let i = 0; i < 35; i++) {
        let span = document.createElement('span');
        span.innerText = i + 1 + '.';
        span.classList.add('classBack');
        divD.appendChild(span);
    }
    let invisibleDivForD = document.createElement('DIV');
    invisibleDivForD.classList.add('txt');
    divD.appendChild(invisibleDivForD);
    for (let i = 0; i < 12; i++) {
        let tab = ['<!-- Pr. kol. dół: switches', 'SVG (animacja: transform) + @keyframes', '+ pozycjonowanie absolutne/relatywne -->',
        '//',    
        '//funkcja setTimeout() dodaje kolejnym switchom klasę CSS z animacją. Keyframes animacji to pozycje absolutne lub relatywne, symulujące ruch przełącznika',
            '//',
            '//Rotacja zębatek nie działa w przeglądarkach nie obsługujących metody \'classList\' dla elementów SVG (np. Explorer),',
            'Aby skrypt nie został przerwany, if/else wykrywa wartość boolean dla listy klas elementu SVG. Jeśli:',
            'classList.length===0',
            '(co oznacza że przeglądarka nie umie pobrać classList) metoda if/else każe przeskoczyć ten etap skryptu.',
            '!!! NACIŚNIĘCIE SWITCHA !!!', 'naciśnięcie uruchamia animację SVG - właściwość \'delay\' symuluje reakcję \'silnika blokady\' na event'
        ]
        let span = document.createElement('span');
        span.classList.add('inTxt');
        span.innerText = tab[i];
        invisibleDivForD.appendChild(span);
    }
    //stopka
    let divFoot = document.createElement('DIV');
    divFoot.classList.add('includedToThis');
    rightColumn.appendChild(divFoot);
    let spanFoot = document.createElement('SPAN');
    divFoot.appendChild(spanFoot);
    spanFoot.innerText = 'WSZYSTKIE ELEMENTY TEJ STRONY /W TYM KRZYWE SVG, ANIMACJE I SKRYPTY/ SĄ WŁASNEGO PROJEKTU I WYKONANIA - ŻADNA CZĘŚĆ NIE POCHODZI Z SZABLONÓW ANI GOTOWYCH FRAGMENTÓW KODU';
    spanFoot.style.fontFamily="Courier New, Courier, monospace";
    spanFoot.style.fontWeight="bold";
    divFoot.style.display="flex";
    divFoot.style.flexDirection="column";
    divFoot.style.alignItems="flex-start";
    divFoot.style.justifyContent="center";
    divFoot.style.padding="0.3rem 1rem 1rem 1rem";
    divFoot.style.width="100%";
    divFoot.style.overflowY="scroll";
    spanFoot.style.width="100%";
}