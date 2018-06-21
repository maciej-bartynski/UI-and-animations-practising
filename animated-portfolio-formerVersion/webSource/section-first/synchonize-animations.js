export function triggerNextAnimation() {
    let isExplorer = document.querySelector('svg.small-cog');
    let isClassList = isExplorer.classList;
    if (isClassList !== undefined) {
        rotateCogs();
    }
    let pointers = document.querySelectorAll('.singleTogglePointer');
    let bars = document.querySelectorAll('.singleToggleBar');
    let names = document.querySelectorAll('.description-row');
    let descriptions = document.querySelectorAll('.toggle-row span');
    for (let i = 0; i < pointers.length; i++) {
        pointers[i].classList.add('singleTogglePointerAnim')
        bars[i].classList.add('singleToggleBarAnim')
        names[i].classList.add('description-rowAnim')
        descriptions[i].classList.add('description-rowAnim')
    }
    setTimeout(lifeAx, 2600);
}

function lifeAx() {
    prepareToggleBars();
    let isExplorer = document.querySelector('svg.small-cog');
    let isClassList = isExplorer.classList;
    if (isClassList !== undefined) {
        stopRotateCogs();
        clockIsWorking();
        setTimeout(clockIsWorking, 3000);
    }
    let segments = document.querySelectorAll('#cv .ax-positioner');
    for (let i = 0; i < segments.length; i++) {
        let containers = segments[i].querySelectorAll('div.container');
        let upperContainer = containers[0];
        let middleContainer = containers[1];
        let lowerContainer = containers[2];
        let middles = middleContainer.querySelectorAll('div');
        let bottom = lowerContainer.querySelectorAll('span');
        let span = upperContainer.querySelector('span');
        let point = middles[1];
        let date = bottom[0];
        let name = bottom[1];
        let btn = bottom[2];
        span.classList.add('axAnimation');
        point.classList.add('axPointAnimation');
        date.classList.add('dateAnim');
        name.classList.add('nameAnim');
        btn.classList.add('descAnim');
        setTimeout(axBtns, 3000);
    }
}

function axBtns() {
    let btns = document.querySelectorAll('.ax-description div');
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.add('btnAnimation');
    }
}
export function rotateCogs() {
    let cogs = document.querySelector('div.svg-positioner');
    let smallCog = cogs.querySelector('svg.small-cog');
    let bigCog = cogs.querySelector('svg.big-cog');
    smallCog.classList.toggle('rotate-direction');
    bigCog.classList.toggle('rotate-oposite-direction')
}
export function stopRotateCogs() {
    let cogs = document.querySelector('div.svg-positioner');
    let smallCog = cogs.querySelector('svg.small-cog');
    let bigCog = cogs.querySelector('svg.big-cog');
    smallCog.classList.toggle('rotate-direction');
    bigCog.classList.toggle('rotate-oposite-direction')
}

export function clockIsWorking() {
    let clock = document.querySelector('div.svg-ax-positioner');
    let surface = clock.querySelector('.svg-ax-clock');
    let pointer = clock.querySelector('.svg-clock-pointer');
    let clockCog = clock.querySelector('.clock-small-cog');
    surface.classList.toggle('clockSpinner');
    pointer.classList.toggle('clockPointerSpinner');
    clockCog.classList.toggle('rotate-direction');
    clockCog.classList.toggle('clockCogPosition');
}

function prepareToggleBars() {
    let pointers = document.querySelectorAll('.singleTogglePointer');
    let bars = document.querySelectorAll('.singleToggleBar');
    for (let i = 0; i < pointers.length; i++) {
        let bar = bars[i];
        let pointer = pointers[i];
        let clickIter = 0;
        bar.addEventListener('click', function () {
            pointer.classList.remove('singleTogglePointerAnim');
            bar.classList.remove('singleToggleBarAnim');
            pointer.classList.toggle('click-pointer');
            bar.classList.toggle('click-bar-pointer');
            if (clickIter > 0) {
                pointer.classList.toggle('clickB-pointer');
                bar.classList.toggle('clickB-bar-pointer');
            }
            if (clickIter === 0) {
                clickIter++;
            }
            let isExplorer = document.querySelector('svg.small-cog');
            let isClassList = isExplorer.classList;
            if (isClassList !== undefined) {
                startCogMachine();
            }
        })
    }
}

function startCogMachine() {
    setTimeout(rotateCogs, 1000);
    setTimeout(rotateCogs, 3300);
}