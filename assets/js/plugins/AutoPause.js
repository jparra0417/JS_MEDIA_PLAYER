function AutoPause() {

    this.threshold = 0.25;

    // it manages the intersection observer handler
    this.handlerIntersection = function (entries) {
        this.player && !entries[0].isIntersecting ? this.player.pause() : this.player.play();
    }
    // it manages the visibility handler
    this.handlerVisibility = function () {        
        this.player && document.visibilityState === 'visible' ? this.player.play() : this.player.pause();
    }


    this.run = function (player) {
        this.player = player;
        const config = {
            threshold: this.threshold
        }        
        const observer = new IntersectionObserver(this.handlerIntersection.bind(this), config);
        observer.observe(player.media);
        document.addEventListener('visibilitychange', this.handlerVisibility.bind(this));
    }
}

export default AutoPause;