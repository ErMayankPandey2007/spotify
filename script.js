const audio = document.getElementById("audio-player");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const songTitle = document.getElementById("song-title");
const progressBar = document.getElementById('progress-bar');
const songlist=document.getElementById('songsList');

const songs = [
    { name: "song1.mp3", title: "Aashiq Banaya Aapne Himesh Reshammiya,Shreya Ghoshal  Emraan Hashmi,Tanushree." },
    { name: "song2.mp3", title: " Pal Pal " },
    { name: "song3.mp3", title: "Bahli Sohni Baaghi" },
    { name: "song4.mp3", title: "Chahun Main Ya Naa  Aashiqui 2  Aditya Roy Kapur, Shraddha Kapoor" },
    { name: "song5.mp3", title: "Dhoom Machale Song  DHOOM, Esha Deol, John Abraham, Abhishek, Uday, Sunidhi Chauhan, Pritam, Sameer" },
    { name: "song6.mp3", title: "Dhun Song  Saiyaara  Ahaan Panday, Aneet Padda  Mithoon  Arijit Singh" },
    { name: "song7.mp3", title: "Dua Kijiye  Mohsin Khan  Kanika Mann  Sameer Khan  Hindi Sad song" },
    { name: "song8.mp3", title: "Hamari Adhuri Kahani - Lyrical Song  Arjit Singh  Emraan Hashmi, Vidya Balan  Jeet Gannguli" },
    { name: "song9.mp3", title: "Hasi  Hamari Adhuri Kahani  Emraan Hashmi, Vidya Balan  Ami Mishra  Mohit Suri " },
    { name: "song10.mp3", title: "Humnava Full Video - Hamari Adhuri KahaniEmraan Hashmi, Vidya BalanPaponMithoon" },
    { name: "song11.mp3", title: "Kinna Sona Full Video  Marjaavaan  Sidharth M, Tara S  Meet Bros,Jubin N, Dhvani Bhanushali" },
    { name: "song12.mp3", title: "Nachdi Son Of Sardaar 2 128 Kbps" },
    { name: "song14.mp3", title: "Sawan Aaya Hai FULL VIDEO Song  Arijit Singh  Bipasha Basu  Imran Abbas Naqvi" },
    { name: "song15.mp3", title: "Tum Hi Ho Aashiqui 2 Full Song With Lyrics  Aditya Roy Kapur, Shraddha Kapoor" },
    { name: "song16.mp3", title: "करब म रज ज जवन हख द-2023 -#Golu Raja-नय चत परपरक गरद उड रह ह." },
    { name: "song13.mp3", title: "Piya Aaye Na Aashiqui 2 Full Song with Lyrics  Aditya Roy Kapur, Shraddha Kapoor" },
];

let songIndex = 0;

function loadSong(index) {
    audio.src = `music/${songs[index].name}`;
    songTitle.innerText = songs[index].title;
}

playBtn.addEventListener("click", () => {

    audio.play();
});

pauseBtn.addEventListener("click", () => {
    audio.pause();
});

nextBtn.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    audio.play();
});

prevBtn.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    audio.play();
});


audio.addEventListener('timeupdate', function() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});


document.querySelector('.progress-container').addEventListener('click', function(e) {
  const progressContainer = e.currentTarget;
  const clickPosition = e.offsetX;
  const progressPercentage = (clickPosition / progressContainer.offsetWidth) * 100;
  audio.currentTime = (progressPercentage / 100) * audio.duration;
});

// Initial load
loadSong(songIndex);

  // Image list
    const images = ["images/song1.jpg",
"images/song2.jpg","images/song3.jpg","images/song4.jpg","images/song5.jpg","images/song6.jpg","images/song7.jpg","images/song8.jpg","images/song9.jpg","images/song10.jpg","images/song11.jpg","images/song12.jpg","images/song13.jpg","images/song14.jpg","images/song15.jpg","images/song16.jpg",]
    let currentIndex = 0;

    // Function to show image
    function showImage(index) {
      const imgElement = document.getElementById("songsList");
      imgElement.src = images[index];
    }

    // Prev button function
    function prev() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }
      showImage(currentIndex);
    }

    // Next button function
    function next() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      showImage(currentIndex);
    }