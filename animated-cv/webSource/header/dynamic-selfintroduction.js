"use strict";
export function listenForImgRotation(boolean) {
  let ela = document.querySelector('#selfintroA');
  let elb = document.querySelector('#selfintroB');
  let elc = document.querySelector('#selfintroC');
  let eld = document.querySelector('#selfintroD');
  if (boolean === true) {
  ela.innerText='//cześć, jestem bartek';
  elb.innerText='//i jestem z humana.';
  elc.innerText='//trochę koduję';
  eld.innerText='//(jak nikt nie patrzy)'; 
} else {
    ela.innerText = '';
    elb.innerText = '';
    elc.innerText = '';
    eld.innerText = '';
  }
}
