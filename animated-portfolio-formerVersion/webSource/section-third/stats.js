
'use strict';
document.addEventListener('DOMContentLoaded', btnDirectionToApp);
document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('nav #whatsappprostats');
    btn.addEventListener('click', statsBtnManaging);
});
function statsBtnManaging() {
    
    let section = document.querySelector('#whatsapp-project');
    let anchor = section.offsetTop;
    var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
    if (isSmoothScrollSupported === true) {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': anchor
        });
    } else {
        window.scrollTo(0, anchor);
    }
}
function btnDirectionToApp(){
    let btn = document.querySelector('#btnFromDescriptToApp');
    btn.addEventListener('click', function(){
        let section = document.querySelector('#converter-app');
        let anchor = section.offsetTop;
        var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
        if (isSmoothScrollSupported === true) {
            window.scrollTo({
                'behavior': 'smooth',
                'left': 0,
                'top': anchor
            });
        } else {
            window.scrollTo(0, anchor);
        }
    })
}