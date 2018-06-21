'use strict';
export function initializeMobileLabel() {
    console.log('iam showed');
    let labels = document.querySelectorAll('#sectionToolsAndMaterials .classBelt');
    let amount = labels.length;
    for (let i = 0; i < amount; i++) {
        labels[i].addEventListener('click', function (event) {
            let label = labels[i];
            setInnerTextes(label, event);
        })
    }
    let hiddenLabel = document.querySelector('.lampAndText');
    hiddenLabel.addEventListener('click', hideThisLabel);
}

function hideThisLabel() {
    let hiddenLabel = document.querySelector('.lampAndText');
    hiddenLabel.style.top = "0";
    hiddenLabel.classList.remove('andPyk');
}

function setInnerTextes(label, e) {
    let descr = document.querySelector('#sectionToolsAndMaterials .section_left-side .dcr');
    let title = document.querySelector('#sectionToolsAndMaterials .section_left-side .titl');
    let name = label.querySelector('.classToolNameSpan');
    let fname = name.innerText;

    title.innerText = fname;
    let array = ['Jak powiedział mi nauczyciel front-endu z DevArmy: jeśli jakaś technologia nie ma przynajmniej 1000 problemów na stack-overflow, nawet nie zaczynaj jej używać. Święta racja. Nie będe zaczynał. Chyba że we własnych projektach, robionych przeze mnie-dla mnie. W tych używam wszystko, co wpadnie mi w ręce. I znajduję problemy, o których nie śniło się założycielom stacka.',
        'Potrzebujesz szybko ogarnąć problem? Artykuły na ten temat są zbyt zawiłe, a te proste nie traktują sprawy zbyt dokładnie? Dlatego jest w3schools. Proste rozwiązania, łatwe przykłady. Tu zrozumiesz podstawę. Potem możesz szukać dalej.',
        'Ważne dokumentacje i bardzo pomocny walidator kodu HTML. To tutaj dowiedziałem się, że semantyczne yolo brzmi: \'you only main once\' (co zresztą nie do końca jest prawdą w HTML 5.2)',
        'Overapi.com - wszystkie eventy i operacje na DOM, które naprawdę sa Ci potrzebne.',
        '\'DLACZEGO TEN DIV NIE CHCE SIĘ OSTYLOWAĆ?\' Są tylko dwa rozwiązania. Pierwsze: sprawdź, czy twój problem jest na CSS-Tricks. Drugie: użyj \'!important\'. Po czym miej wyrzuty sumienia i nie zaśnij w nocy. Około trzeciej wstań z łóżka, wróć do komputera, usuń importanta i zacznij szukać problemu na CSS-Tricks.',
        'Bardzo przydatna strona. Przede wszystkim generuję tutaj cienie. Box-shadow to - z punktu widzenia google material design - BARDZO ważna część projektowania strony www. Dlatego należy zrobić to porządnie.',
        'Wszystkie zasady UXa które musisz znać, wyłożone prosto, krótko i przejrzyście. Jeśli projektujesz wg własnych pomysłów, to nie miej ich (tych pomysłów) póki nie zapoznasz się z tym dokumentem choć pobieżnie.',
        '5000 wersji zapamiętało Visual Studio Code, nim w końcu nauczyłem się przechowywać zmiany na zdalnym repo.',
        'Jeśli zastanawiasz się, dlaczego jest tu bash-konsola, skoro obok jest też bash-terminal, to... zajrzyj zakładki bash-terminala',
        'No dobrze, może jest na to lepszy sposób, ale ja go nie znam i poradziłem sobie po swojemu, żeby nie tracić czasu. W konsoli basha startuję watchera, by nie musieć cały czas \'buildować\' zmian w projekcie. Tylko że wtedy konsola jest zajęta nasłuchem i nie mogę wpisywać innych komend. Dlatego w Visual Studio Code mam drugą konsolę basha, z której korzystam.',
        'Ironia losu: zanim mentorzy z DevArmy pokazali mi Visual Studio Code, kodowałem w Notepadzie++. Zanim pewien doktor neurobiologii z Wydziału Filologicznego (tak) pokazał mi Notepada, napisałem pierwszą stronę w... notatniku (Aż 10! podstron, na których przechowywałem swoje próby literackie z czasów liceum). Dopiero później dowiedziałem się, że wykładowcy z Informatyki PWr zalecają (przynajmniej na memach) kodowanie w notatnikach i notepadach, nim przejdzie się na VSC. By otrzaskać się z poprawnym syntaxem... Czy jestem mistrzem składni? No nie wiem. Ale z pewnością nauczyłem się cierpliwości w wyszukiwaniu średników. Życie bez lintera...',
        'Korzystam z Developer Tools w każdej przeglądarce, którą zainstalowałem: Opera, Firefox, Explorer, Edge, Chrome... Dlaczego więc wymieniłem tylko Explorera? Fakt, te narzędzia nie różnią się za bardzo od pozostałych. Chodzi raczej o samą przeglądarkę. Aby nauczyć się stosować cross-browserowe rozwiazania, uczyniłem z Explorera główne narzędzie testowania kodu. Nauczyłem się , że ZAZWYCZAJ jeśli coś działa w Explorerze, to zadziała też gdzie indziej. Nie znaczy to, że rezygnuję z możliwości ES6 na rzecz uruchamiania strony www na kalkulatorach parowych. Należy raczej sądzić, że szukając alternatyw dla szybkich rozwiązań, poznaję istotę tychże szybkich rozwiązań. Tak było np. z metodą .forEach, która w większości przeglądarek działa na obiektach podobnych do Array, pobranych z drzewa DOM. Dopiero szukanie alternatywy dla Explorera (w postaci pętli FOR) skłoniło mnie do zastanowienia, czym naprawdę jest forEach, jak działa i jaka rządzi nim logika. Dlatego w mojej nauce programowania, IE-DevTools są takie ważne.',
        'Genialne narzędzie, by poukładać sobie złożony problem w głowie. Jeśli przeklikasz w skupieniu dowolny kurs na Codecademy, zdobędziesz solidne podstawy do dalszej nauki danego języka. O ile zatrzymasz się nad każdym ćwiczeniem, wykonasz je kilka razy i rozszerzysz wiedzę o inne źródła. Codecademy jednak zawsze powinno być pierwszym krokiem w nauce programowania w ogóle. Najpierw bowiem trzeba pojąć ogólną logikę rządzącą systemem, zanim zacznie się uczyć składni poszczególnych procesów.',
        'Od 2015 roku, EcmaScript6 ciągle nie jest zaimplementowany we wszystkich przeglądarkach. Dlatego gdy nie jestem pewien, czy mogę zastosować jakieś rozwiązanie, sprawdzam na caniuse.com',
        'Ten przemiły facet świetnie tłumaczy rozmaite zagadnienia związane z web-developingiem i front-endem. Między innymi od niego nauczyłem się stawiać projekt przy pomocy npm-ów, z pełnym zapleczem paczek wspierających pracę.',
        'Można szukać na w3schools, można ćwiczyć na Codecademy. Ale kto chce poważnie wziąć się do roboty, nie uniknie czytania dokumentacji. Trudny język? Nie szkodzi. Trudne języki uczą logiki.',
        'Ile godzin spędziłem na próbie uruchomienia AJAXa w moim konwerterze, zanim zorientowałem się, że Chrome po prostu nie traktuje dwóch plików na jednym komputerze tak, jakby były na jednym serwerze. Od tamtej pory korzystam z XAMPP.',
        'Organizatorzy naprawdę solidnych kursów front-endu. Zaczynają miło, przyjemnie, CSSem, by uśpić czujność humanistów-kursantów. A potem nagle rety MYK!!!!!! i zaczyna się realne programowanie w JavaScript, nie pójdziesz do domu dopóki nie ogarniesz. Nim się zorientujesz co robisz, przestajesz być \'kolesiem z humana\'. Poza tym strona ich szkoły jest dla mnie swoistym poligonem: jakoś tak lubię grzebać w niej devToolsami, szukając inspiracji.',
        'O tym dowiedziałem się w DevArmy. Z paczkami modułów pracuje się lepiej i wygodniej. Bez nich - to jak pisać w notatniku.',
        'To tylko przykład strony, od której zaczynałem eksplorowanie zagadnienia drzewa DOM.'
    ]
    let pointer = 0;
    let belt = e.currentTarget;
    let belts = document.querySelectorAll('#sectionToolsAndMaterials .classBelt');
    for (let x = 0; x < belts.length; x++) {
        if (belts[x] === belt) {
            pointer = x;
        }
    }
    descr.innerText = array[pointer];
    showMobileDescription(label, e);
}


function showMobileDescription(label, e) {
    let leftArea = document.querySelector('#sectionToolsAndMaterials .section_left-side');
    let anchor = leftArea.offsetTop;
    let targetAnchor = label.offsetTop;
    let correctHeight = (targetAnchor - anchor) + 14;
    let hiddenLabel = document.querySelector('.lampAndText');
    hiddenLabel.style.top = correctHeight + 'px';
    stylizeHiddenLabel(hiddenLabel, e);
}

function stylizeHiddenLabel(el, e) {
    let light = el.querySelector('.icona');
    let track = el.querySelector('.iconb');
    if (el.classList.contains('andPyk') === true) {
        el.classList.remove('andPyk');
        track.classList.remove('powerToThis');
        light.classList.remove('powerToLightt');
    }
    setTimeout(addClasses, 1)

    function addClasses() {
        el.classList.add('andPyk');
        track.classList.add('powerToThis');
        light.classList.add('powerToLightt');
    }
}