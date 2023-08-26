import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
    const player = new Vimeo(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

console.log(throttle);

    player.on('timeupdate', throttle(function(event) {
       
        localStorage.setItem("videoplayer-current-time", event.seconds)

    }, 1000));

    

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
      
    });
 
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
