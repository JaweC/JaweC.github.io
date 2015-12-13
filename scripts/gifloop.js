var totalCount = 126;
function ChangeIt() {
  document.documentElement.style.overflow = 'hidden';  // firefox, chrome
  document.body.scroll = "no"; // ie only
         
  //Unrelated to gif loop, this is easier to put in here
  document.getElementById("music").volume = 0.5;

  var num = Math.floor(Math.random() * totalCount) + 1;
  var delay = Math.floor(Math.random() * 2500) + 1500;

  document.getElementById('bg').innerHTML = '<img src="data/media/images/summer/' + num + '.gif" /> ';
  setTimeout(arguments.callee, delay);
}