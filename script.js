const tracks = [
  {
    title: "Track 01 - Ballerina",
    src: "audio/track1.mp3",
    cover: "album-cover.png",
  },
  {
    title: "Track 02 - Laniakea",
    src: "audio/track2.mp3",
    cover: "album-cover.png",
  },
  {
    title: "Track 03 - Slowly Understanding",
    src: "audio/track3.mp3",
    cover: "album-cover.png",
  },
  {
    title: "Track 04 - Before You Left",
    src: "audio/track4.mp3",
    cover: "album-cover.png",
  },
  {
    title: "Track 05 - Breath In",
    src: "audio/track5.mp3",
    cover: "album-cover.png",
  },
  {
    title: "Track 06 - Carousel",
    src: "audio/track6.mp3",
    cover: "album-cover.png",
  },
  {
    title: "Track 07 - Continuance",
    src: "audio/track7.mp3",
    cover: "album-cover.png",
  },
  {
    title: "Track 08 - Breath out",
    src: "audio/track8.mp3",
    cover: "album-cover.png",
  },
  {
    title: "Track 09 - After You Came",
    src: "audio/track9.mp3",
    cover: "album-cover.png",
  },
  {
    title: "Track 10 - Closing Time",
    src: "audio/track10.mp3",
    cover: "album-cover.png",
  },
  {
    title: "Track 11 - Ballerina - Slowed and Reverbed",
    src: "audio/track11.mp3",
    cover: "album-cover.png",
  },
];
// shuffle button

// play and pause button
const playPauseButton = document.querySelector("#play-pause-btn");
console.log(playPauseButton);

playPauseButton.addEventListener("click", togglePlayback);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function togglePlayback() {
  if (audioPlayer.paused || audioPlayer.ended) {
    audioPlayer.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  } else {
    audioPlayer.pause();
    playPauseImg.src =
      "https://img.icons8.com/?size=100&id=pSwquXkxwLD8&format=png&color=000000";
  }
}

// mute and unmute button
const muteUnmuteButton = document.querySelector("#mute-btn");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
  if (audioPlayer.muted) {
    audioPlayer.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    audioPlayer.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}
