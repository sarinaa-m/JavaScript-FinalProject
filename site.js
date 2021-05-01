var videoPlayer = document.getElementById('videoPlayer');
var videoLen = document.getElementById('videoLen');

function videoPlay() {
    videoPlayer.play();
}

function videoPause() {
    videoPlayer.pause();
}

// setInterval(function() {
//     videoLen.innerHTML = videoPlayer.currentTime + '/' + videoPlayer.duration;

// }, 100);