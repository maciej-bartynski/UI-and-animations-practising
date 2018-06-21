document.addEventListener('DOMContentLoaded', initializeScaleBtns);
function initializeScaleBtns(){
    let mobile = document.querySelector('#converter-app .mobile');
    let desktop = document.querySelector('#converter-app .desktop');
    let frame = document.querySelector('#converter-app .positioner');
    let btnbelt = document.querySelector('#converter-app .RWDBtns');
    mobile.addEventListener('click', function() {
        scaleTomobile();
        scaleTomobileBtn();
    });
    desktop.addEventListener('click', function() {
        scaleTodesktop();
        scaleTodesktopBtn();
    });
    function scaleTomobile(){
        frame.classList.remove('desktopscrn');
        frame.classList.add('mobilescrn');
    }
    function scaleTodesktop(){
        frame.classList.remove('mobilescrn');
        frame.classList.add('desktopscrn');
    }
    function scaleTomobileBtn(){
        btnbelt.classList.remove('desktopbtn');
        btnbelt.classList.add('mobilebtn');
    }
    function scaleTodesktopBtn(){
        btnbelt.classList.remove('mobilebtn');
        btnbelt.classList.add('desktopbtn');
    }
}