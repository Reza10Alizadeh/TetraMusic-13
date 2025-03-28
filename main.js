const playPauseBtn = document.querySelector(".play-pause"),
  audio = document.querySelector(".audio"),
  progressBar = document.querySelector("#progress"),
  preloader = document.getElementById("preloader"),
  songNameElement = document.querySelector(".song-name"),
  songArtistElement = document.querySelector(".song-artist"),
  songImageElement = document.querySelector(".current-song img"),
  songs = [
    {
      name: "Nargese Shiraz",
      artist: "Hayedeh",
      src: "music/Hayedeh Nargese Shiraz.mp3",
      img: "cover/IMG_1884.webp",
    },
  ];
let currentSongIndex = 0;
function loadSong(e) {
  let a = songs[e];
  (songNameElement.textContent = a.name),
    (songArtistElement.textContent = a.artist),
    (songImageElement.src = a.img),
    (audio.src = a.src),
    audio.load(),
    (progressBar.value = 0),
    (audio.currentTime = 0);
}
loadSong(currentSongIndex),
  playPauseBtn.addEventListener("click", () => {
    audio.paused
      ? (audio.play(),
        (playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'))
      : (audio.pause(),
        (playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>'));
  }),
  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      let e = (audio.currentTime / audio.duration) * 100;
      progressBar.value = e;
    }
  }),
  progressBar.addEventListener("input", () => {
    let e = (progressBar.value * audio.duration) / 100;
    audio.currentTime = e;
  });
// const nextBtn = document.querySelector(".next-btn");
// nextBtn.addEventListener("click", () => {
//   loadSong((currentSongIndex = (currentSongIndex + 1) % songs.length)),
//     audio.play(),
//     (playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>');
// });
// // const prevBtn = document.querySelector(".prev-btn");
// prevBtn.addEventListener("click", () => {
//   loadSong(
//     (currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length)
//   ),
//     audio.play(),
//     (playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>');
// });
const darkModeToggle = document.getElementById("dark-mode-toggle"),
  body = document.body;
"enabled" === localStorage.getItem("darkMode")
  ? body.classList.add("dark-mode")
  : body.classList.remove("dark-mode"),
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode"),
      localStorage.setItem(
        "darkMode",
        body.classList.contains("dark-mode") ? "enabled" : "disabled"
      );
  }),
  window.addEventListener("load", () => {
    preloader.style.display = "none";
  });
