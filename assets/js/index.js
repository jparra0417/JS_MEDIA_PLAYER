import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("#movie");
const buttonPlay = document.querySelector("#play");
const buttonMute = document.querySelector("#mute");

const player = new MediaPlayer({ el: video , plugins : [ new AutoPlay(), new AutoPause()]});
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

// erify if browser supports serviworker
if('serviceWorker' in navigator){
    // file register the service worker file, catch error
    navigator.serviceWorker.register('./sw.js').catch((err) => console.log("error sw: ", err));
}