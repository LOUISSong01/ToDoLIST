var morning = new Howl({
  src: ["music/morningjazz.mp3"],
});

var musicicon = document.querySelector("#music-icon");
var playbtn = document.querySelector("#btnplay");
playbtn.addEventListener("click", function () {
  musicicon.classList.add("fa-spin");
  morning.play();
});

var pausebtn = document.querySelector("#pausebtn");
pausebtn.addEventListener("click", function () {
  morning.pause();
  musicicon.classList.remove("fa-spin");
});

var stopbtn = document.querySelector("#stopbtn");
stopbtn.addEventListener("click", function () {
  morning.stop();
  musicicon.classList.remove("fa-spin");
});
