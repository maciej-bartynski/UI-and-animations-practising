
'use strict';
document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('nav #tools');
    btn.addEventListener('click', statsBtnManaging);
});
function statsBtnManaging() {
    
    let section = document.querySelector('#sectionToolsAndMaterials');
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