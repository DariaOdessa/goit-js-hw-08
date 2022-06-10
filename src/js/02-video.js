import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const USER_CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
    localStorage.setItem(USER_CURRENT_TIME, data.seconds);    
};

const currentTime = JSON.parse(localStorage.getItem(USER_CURRENT_TIME));

player.setCurrentTime(currentTime).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

