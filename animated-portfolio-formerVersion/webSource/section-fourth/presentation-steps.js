'use strict';
document.addEventListener('DOMContentLoaded', initializePresentationContainers);
function initializePresentationContainers(){
    let clickableContainers = document.querySelectorAll('#converter-app div.container');
    let hiddenClues = document.querySelectorAll('#converter-app div.container .hidden-clues');
    let amount = clickableContainers.length;
    for (let i=0; i<amount; i++){
        let el = clickableContainers[i];
        el.addEventListener('click', toggleClues);
        function toggleClues(){
            let clue = hiddenClues[i];
            clue.classList.toggle('showHiddenClues');
        }
    }
}    
