export function toggleMenuTurnOn() {
    let btn = document.querySelector('#toggleMenu');
    btn.addEventListener('click', toggleTheMenu);
}
let boolean = true;
export function toggleTheMenu(){
    let btn = document.querySelector('#toggleMenu');
    let mark = btn.querySelector('span');
    let nav = document.querySelector('nav#main-nav');
    if (boolean===true){
        boolean=false;
        btn.classList.add('fixItAndWait');
        nav.classList.add('toggled');
        mark.innerText="=";
    }else{
        boolean=true;
        btn.classList.remove('fixItAndWait');
        nav.classList.remove('toggled');
        mark.innerText="^";
    }
}