AFRAME.registerComponent('videohandler', {
   init:function() {
      let playing = false;
      let video = document.querySelector("#sizoVideo");
      this.el.addEventListener('click', () => {
           if(!playing) {
               video.play();
            } else {
               video.pause();
               video.currentTime = 0;
            }
            playing = !playing;
      });
   }
 })
