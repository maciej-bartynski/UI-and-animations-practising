'use strict';

export function showStatsDynamically() {
    let shadowContainers = document.querySelectorAll('#whatsapp-project .stats');
    for (let i = 0; i < shadowContainers.length; i++) {
        let el = shadowContainers[i];
        el.classList.toggle('growingShadowAnimation');
        let elmnt = el.querySelector('.stats_stats-presentation span');
        let array = [323, 4, 39, 125, 5001, 143];
        let txt = array[i];
        txt = txt.toString();
        setInnerTextMagically(i, elmnt);
    }

    function setInnerTextMagically(i, el) {
        let elemet = document.querySelectorAll('#iplusplus');
        let element = elemet[i];
        element.classList.toggle('animaPlu')
        let iter = 0;
        checkIfRenew();

        function checkIfRenew() {
            let txt = iter.toString();
           
            if (i===4){
                iter=iter+10;
            }else{
                iter++;
            }
            el.innerText = txt;
            let array = [324, 5, 40, 126, 5001, 144];

            if (iter < array[i]) {
                if(i===0){
                    setTimeout(function () {
                        checkIfRenew(i, el);
                    },5)
                }else if(i===1){
                    setTimeout(function () {
                        checkIfRenew(i, el)
                    },800)
                }else if (i===2){
                    setTimeout(function () {
                        checkIfRenew(i, el)
                    },50)
                }else if (i===3){
                    setTimeout(function () {
                        checkIfRenew(i, el)
                    }, 13)
                }else if(i===4){
                    setTimeout(function () {
                        checkIfRenew(i, el)
                    }, 6)
                }else if(i===5){
                    setTimeout(function () {
                        checkIfRenew(i, el)
                    },13)
                }
            } else if (iter >= array[i]) {
                let elemet = document.querySelectorAll('#iplusplus');
                let element = elemet[i];
                element.classList.toggle('animaPlu')
            }
        }
    }
}