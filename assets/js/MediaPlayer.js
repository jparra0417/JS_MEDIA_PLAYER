function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

// it toggles play and pause
MediaPlayer.prototype.togglePlay = function () {
    this.media.paused ? this.play() : this.pause();
}

// it plays the video
MediaPlayer.prototype.pause = function () {
    this.media.pause();
}
// it pauses the video
MediaPlayer.prototype.play = function () {
    this.media.play();
}

// it initializes the plugins
MediaPlayer.prototype._initPlugins = function () {
    // limit the amount of variables for the plugins
    const player = {
        play : () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        // creamos el valor virtual con get y set
        get muted() { return this.media.muted },
        set muted(value) { this.media.muted = value }        
    }
    this.plugins.forEach(plugin => plugin.run(player));
}


// toggles mute
MediaPlayer.prototype.toggleMute = function () {
    this.media.muted = !this.media.muted;
}

// it mutes the video
MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}

// it unmutes the video
MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}

export default MediaPlayer;
