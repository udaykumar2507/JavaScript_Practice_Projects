
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlbutton = document.getElementById("ctrlIcon");
let icon = ctrlbutton.querySelector("i");

let isPlaying = false;

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}


function playpause() {
    if (!isPlaying) {
        song.play();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        isPlaying = true;
    } else {
        song.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        isPlaying = false;
    }
}
if (song.play()){
    setInterval(()=>{
        progress.value=song.currentTime; 
    },500);
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");

}

