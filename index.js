let pause = document.getElementById("pause");
let playup = document.getElementsByClassName("fa-solid fa-circle-play");

let bottom = document.getElementById("bottom");
bottom.style.display = "none";
let main = document.getElementById("main");
main.style.display = "none";

let times = document.getElementsByClassName("time");

let progress = document.getElementById("songprogress");

let play = document.getElementById("play");
pause.style.display = "none";

let back = document.getElementById("back");
let go = document.getElementById("go");

let songurl = [
  "song-1.mp3",
  "song-2.mp3",
  "song-3.mp3",
  "song-1.mp3",
  "song-2.mp3",
  "song-3.mp3",
  "song-1.mp3",
  "song-2.mp3",
  "song-3.mp3",
];

let explore = document.getElementById("expo");
explore.addEventListener("click", function () {
  bottom.style.display = "";
  main.style.display = "";
  document.getElementById("explore").style.display = "none";
});

// let times = document.getElementsByClassName('time');

// console.log(playup[0].id);
let audio;

for (let i = 0; i < playup.length; i++) {
  // audio.pause();
  playup[i].addEventListener("click", function () {
    if (audio !== undefined && audio.currentTime > 0) {
      audio.pause();
      play.style.display = "none";
      pause.style.display = "";
    }
    audio = new Audio(songurl[i]);

    // times[i].textContent = parseInt(audio.duration);

    audio.addEventListener("timeupdate", function () {
      slider = parseInt((audio.currentTime / audio.duration) * 100);
      times[i].textContent = (audio.currentTime / 60).toFixed(2);
      progress.value = slider;
      //   back.addEventListener('click', function(){
      //       console.log(audio.currentTime);
      //   })
    });

    audio.play();
    play.style.display = "none";
    pause.style.display = "";

    pause.addEventListener("click", function () {
      audio.pause();
      play.style.display = "";
      pause.style.display = "none";
    });

    play.addEventListener("click", function () {
      audio.play();
      play.style.display = "none";
      pause.style.display = "";
    });
  });

  back.addEventListener("click", function () {
    audio.currentTime = audio.currentTime - 0.7;
    progress.value = parseInt((audio.currentTime / audio.duration) * 100);
  });
  go.addEventListener("click", function () {
    audio.currentTime = audio.currentTime + 0.7;
    progress.value = parseInt((audio.currentTime / audio.duration) * 100);
  });
}

let songitems = document.getElementsByClassName("songItem");

console.log(songitems);


let search = document.getElementById("searchin");
function appearance(){
    console.log(search.value);
    if (search.value === "") {
      for (let index = 0; index < songitems.length; index++) {
        songitems[index].style.display = "";
      }
    } else {
      for (let index = 0; index < songitems.length; index++) {
          if(songitems[index].firstElementChild.textContent.includes(search.value)){
              songitems[index].style.display = "";
          }else{
              songitems[index].style.display = "none";
          }
      }
    }
}
