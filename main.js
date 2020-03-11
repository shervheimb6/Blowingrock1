$(document).ready(function(){
    $('.header').height($(window).height());
  })

  let element = document.querySelector("features image");

  function changePic () {
    element.style.width = "50%";
  }

  element.onmouseover = changePic;