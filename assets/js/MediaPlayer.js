function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || []; 

    this._initPlugins();
}

// it toggles play and pause
MediaPlayer.prototype.play = function () {
    this.media && this.media.paused ? this.media.play() : this.media.pause();
}
// it initializes the plugins
MediaPlayer.prototype._initPlugins = function () {
   this.plugins.forEach(plugin => {
       // we send this as argument
       plugin.run(this);
   });
}

// it mutes the video
MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

// it unmutes the video
MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}

export default MediaPlayer;
