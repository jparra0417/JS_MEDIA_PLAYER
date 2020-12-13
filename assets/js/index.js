import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("#movie");
const buttonPlay = document.querySelector("#play");

const player = new MediaPlayer({ el: video , plugins : [ new AutoPlay()]});
buttonPlay.onclick = () => player.play();