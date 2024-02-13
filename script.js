const yesBtn = document.getElementById("yes");

const noBtn = document.getElementById("no");

const yayText = document.getElementById("yay")

const yayText1 = document.getElementById("yay1");

const can1 = document.getElementById("can1")

const can = document.getElementById("can")

const can2 = document.getElementById("can2")

const after = document.getElementById("after")

const before = document.getElementById("before")



noBtn.addEventListener("click", () => {

  yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;

  yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;

  can.style.display = "block";

  can2.style.display = "none";

  can1.style.display = "block";

  yayText.style.display = "none";

  yayText1.style.display = "none";

});

yesBtn.addEventListener("click", () => {

  yayText.style.display = "block";

  yayText1.style.display = "block";

  can.style.display = "none";

  can1.style.display = "none";

  can2.style.display = "none";

  yesBtn.style.width = `70px`;

  yesBtn.style.height = `50px`;

  after.style.display = "block";

  before.style.display = "none";

});

function playAudio() {
    var audio = document.getElementById("myAudio");
    var audio2 = document.getElementById("myAudio2");
    audio.play();
    audio2.pause();
  }

function pauseAudio() {
    var audio = document.getElementById("myAudio");
    var audio2 = document.getElementById("myAudio2");
    audio.pause();
    audio2.play();
}


