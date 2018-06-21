import { toggleTheMenu } from "./toggleMenu";

("use strict");
document.addEventListener("DOMContentLoaded", function() {
  let wid = screen.width;
  if (wid < 991) {
    setViewOnShow();
  }
});
function setViewOnShow() {
  let imag = document.querySelector(".img-positioner");
  let anch = imag.offsetTop;
  var isSmoothScrollSupported =
    "scrollBehavior" in document.documentElement.style;
  if (isSmoothScrollSupported === true) {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: anch
    });
  } else {
    window.scrollTo(0, anch);
  }
}
