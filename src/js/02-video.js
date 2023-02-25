import Player from '@vimeo/player';
import { throttle } from 'lodash';    

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

// Tracking the timeupdate event - updating the playback time
player.on('timeupdate', throttle(ev => {

  // Saving playback time to local storage
  localStorage.setItem('videoplayer-current-time', ev.seconds);
}, 1000)
);


// Resume playback from the saved position when the page reloads or from 0.

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0)

