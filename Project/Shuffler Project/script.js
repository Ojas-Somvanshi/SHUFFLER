console.log("hello world");

let index = 0;
let audioElement = new Audio('2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let song = [
    {songName: "Let Me Love You", filePath: "1.mp3", coverPath: "o.jfif" },
    {songName: "The Prison Song", filePath: "2.mp3", coverPath: "o.jfif" },
    {songName: "Aja We(Imran Khan)", filePath: "3.mp3", coverPath: "o.jfif" },
    {songName: "Let Me Down Slowly", filePath: "4.mp3", coverPath: "o.jfif" },
    {songName: "Bad Habits", filePath: "5.mp3", coverPath: "o.jfif" },
    {songName: "Pata chalega", filePath: "6.mp3", coverPath: "o.jfif" },
    {songName: "Kehndi Hunde Si", filePath: "7.mp3", coverPath: "o.jfif" },
    {songName: "High School", filePath: "8.mp3", coverPath: "o.jfif" },
    {songName: "Hone Aitbaar", filePath: "9.mp3", coverPath: "o.jfif" },
]

songItems.forEach((element , i)=>{
element.getElementsByTagName("img")[0].src = song[i].coverPath;
element.getElementsByClassName('songName')[0].innerText = song[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

    }

})


audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    //parseInt integer me deta;
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeALLPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeALLPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${index + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(index>9){
        index=0
    }
    else{
        index+=1;
    }
    audioElement.src = `${index + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(index<0){
        index=0
    }
    else{
        index-=1;
    }
    audioElement.src = `${index + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})