window.onload = function () {
  startCountDown(10, 1000);
}

function startCountDown(i, p, f) {
  var pause = p;
  var countDownObj = document.getElementById("countDown");

  countDownObj.count = function (i) {
    countDownObj.innerHTML = "This domain was abandoned. Redirecting in " + i + " . . . <br>If you need to visit the old site, go to <a href='http://jawe.pw/main'>the main site</a>.";
    if (i == 1) {
      window.location.href = "http://notcammy.me/";
      return;
    }
    setTimeout(function () {
      countDownObj.count(i - 1);
    },
      pause
      );
  }
  countDownObj.count(i);
}
