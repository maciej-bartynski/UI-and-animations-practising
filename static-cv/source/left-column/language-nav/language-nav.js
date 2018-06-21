'use strict';
document.addEventListener('DOMContentLoaded', initializeLanguageNavigation);

function initializeLanguageNavigation() {
    let PLBtn = document.querySelector('#PLBtn');
    let ENGBtn = document.querySelector('#ENGBtn');
    PLBtn.addEventListener('click', function () {
        showCVinOtherLanguage('pl');
        highlightActiveLanguage(PLBtn, ENGBtn);
    });
    ENGBtn.addEventListener('click', function () {
        showCVinOtherLanguage('eng');
        highlightActiveLanguage(ENGBtn, PLBtn);
    });
}

function highlightActiveLanguage(activeBtn, otherBtn){
    activeBtn.classList.add('active');
    otherBtn.classList.remove('active');
}

function showCVinOtherLanguage(lang) {
    if (lang === 'pl') {
        changeLang(0);
    } else {
        changeLang(1);
    }
}

function changeLang(x) {
    //title[first]
    let titles = ['O', 'ABOUT'];
    let titlesSpans = [' MNIE', ' ME'];
    let firstTitle = document.querySelector('.left-column_article.about-me h2');
    firstTitle.innerText = titles[x];
    let span = document.createElement('span');
    span.innerText = titlesSpans[x];
    span.style.fontWeight = "bold";
    firstTitle.appendChild(span);
    //title[second]
    let secondTitles = ['MÓJ', 'MY'];
    let secondTitlesSpans = [' CEL', ' GOAL'];
    let secondTitle = document.querySelector('.left-column_article.my-goals h2');
    secondTitle.innerText = secondTitles[x];
    let span2 = document.createElement('span');
    span2.innerText = secondTitlesSpans[x];
    span2.style.fontWeight = "bold";
    secondTitle.appendChild(span2);
    //article[first]
    let partsOfText = [
        ['Jestem samoukiem zdeterminowanymby postawić pierwsze kroki w IT, jako', 'I am a self-taught'],
        [' Front-End Developer', ' Front-End Developer'],
        [' Zajmując się dotąd grafiką komputerową i UX designem, zetknąłem się z CSS i HTML. Technologie webowe zafascynowały mnie - to one kształtują świat i chcę w tym uczestniczyć, albo przynajmniej rozumieć ich procesy. Samodzielnie poznaję',
            ' determined to get into the tech industry. While working with graphic and UX design I came across CSS and HTML. I found web technologies extremely fascinating because they shape the world. And I want to understand the process or even more – participate in it. I am learning'
        ],
        [' JavaScript', ' JavaScript'],
        [' i inne narzędzia. Szukam praktyki, żeby móc rozwijać się pod okiem specjalisty.',
            ' and other different tools on my own. I am looking for an intern to develop my skills under the guidance of a specialist.'
        ]
    ];
    let firstArticle = document.querySelector('.left-column_article.about-me p');
    let currPart = partsOfText[0]
    firstArticle.innerText = currPart[x];
    for (let i = 1; i < 5; i++) {
        let nextPartOfText = document.createElement('span');
        let currentPartOfText = partsOfText[i];
        nextPartOfText.innerText = currentPartOfText[x];
        if (i === 1 || i === 3) {
            nextPartOfText.classList.add('strong');
        }
        firstArticle.appendChild(nextPartOfText);
    }
    //article[second]
    let partsOfSecondText = [
        ['Chcę rozwijać się przez wszystkie etapy ścieżki kariery', 'I want to develop my skills throughout the'],
        [' Front-End Developera', ' Front-End Developer carrier'],
        [' równocześnie poznając technologie Back-Endowe. Za 10 lat chcę posiadać rzetelną wiedzę', ' and at the same time learn new Back-End technologies. In 10 years I want to be a skilled'],
        [' Full-Stack Developera.', ' Full-Stack Developer.']
    ];
    let secondArticle = document.querySelector('.left-column_article.my-goals p');
    let currPartOfSecondText = partsOfSecondText[0];
    secondArticle.innerText = currPartOfSecondText[x];
    for (let j = 1; j < 4; j++) {
        let nextPartOfSecondText = document.createElement('span');
        let currentPartOfSecondText = partsOfSecondText[j];
        nextPartOfSecondText.innerText = currentPartOfSecondText[x];
        if (j === 1 || j === 3) {
            nextPartOfSecondText.classList.add('strong');
        }
        secondArticle.appendChild(nextPartOfSecondText);
    }
}