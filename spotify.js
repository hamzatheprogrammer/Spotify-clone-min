console.log("welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let play = document.getElementById("playbtn");
let myProgressbar = document.getElementById("myProgressbar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let mastersonginfo = document.getElementById('mastersonginfo'); 
let songs = [
    {Songname: "Old skool", filepath: "./songs/1.mp3", coverpath: "./covers/1.jpg"},
    {Songname: "dollar", filepath: "./songs/2.mp3", coverpath: "./covers/2.jpg"},
    {Songname: "so high", filepath: "./songs/3.mp3", coverpath: "./covers/3.jpg"},
    {Songname: "beat", filepath: "./songs/4.mp3", coverpath: "./covers/4.jpg"},
    {Songname: "song", filepath: "./songs/5.mp3", coverpath: "./covers/5.jpg"},
    {Songname: "song", filepath: "./songs/6.mp3", coverpath: "./covers/6.jpg"},
    {Songname: "beat", filepath: "./songs/7.mp3", coverpath: "./covers/7.jpg"},
    {Songname: "beat", filepath: "./songs/8.mp3", coverpath: "./covers/8.jpg"},
]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].Songname;

})
// handling play/pause
play.addEventListener("click", ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.classList.remove("fa-circle-play")
        play.classList.add("fa-circle-pause")
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        play.classList.remove("fa-circle-pause")
        play.classList.add("fa-circle-play")
        gif.style.opacity=0;
    }
})

// handling progress bar

audioElement.addEventListener("timeupdate", ()=>{
    // updating the seekbar
    duration = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = duration
})

// changing the song time according to seek bar

myProgressbar.addEventListener("change", ()=>{
    audioElement.currentTime = (myProgressbar.value * audioElement.duration)/100;
    
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")

    })
}
Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllplays()
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audioElement.src = `songs/${songIndex+1}.mp3`
        // Update the song name here
        mastersonginfo.innerHTML = songs[songIndex].Songname;
        audioElement.currentTime = 0;   
        audioElement.play();
        play.classList.remove("fa-circle-play")
        play.classList.add("fa-circle-pause")
    })
    
})
document.getElementById('forward').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex = 0
    }
    else{
        songIndex +=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    mastersonginfo.innerHTML = songs[songIndex].Songname;
    // mastersonginfo.innerHTML = songs[songIndex].Songname;
        audioElement.currentTime = 0;   
        audioElement.play();
        play.classList.remove("fa-circle-play")
        play.classList.add("fa-circle-pause")
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    mastersonginfo.innerHTML = songs[songIndex].Songname;
        audioElement.currentTime = 0;   
        audioElement.play();
        play.classList.remove("fa-circle-play")
        play.classList.add("fa-circle-pause")
})