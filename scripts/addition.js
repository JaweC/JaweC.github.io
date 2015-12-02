        ;(function(){
  function id(v){ return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        stat = id("progstat"),
        img = document.images,
        c = 0,
        tot = img.length;
    if(tot == 0) return doneLoading();

    function imgLoaded(){
      c += 1;
      stat.innerHTML = "<img id=\"logo\" src=\"data/images/loader.gif\" > <br>Wait for it...";
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);
      window.setTimeout(callFadeOut, 7500);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());


// Check for mobile user agent
var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
if (mobile) {
    if (confirm("By the looks of it you're on a mobile device. Do you want to view the mobile-friendly version? (Highly recommended)")) {
          window.location.href = "http://jawe.pw/portable";
} else {
    //Doe iets anders
}             
} else {
//Idk wat dit doet maar hoort erbij lol
}


function callFadeOut() {
var star = document.getElementById("mobilebanner");
star.style.opacity = 1;
star.style.transition = "opacity 0.5s";
star.style.opacity = 0;
      window.setTimeout(removeMobileBanner, 500);
}

      function removeMobileBanner() {
          document.getElementById("mobilebanner").remove();
      }
