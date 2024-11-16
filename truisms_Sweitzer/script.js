// Get references to the videos and the text box
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const textBox = document.getElementById('text-box');

// Array of videos for easy random access
const videos = [video1, video2, video3];

// Track the currently playing video
let currentVideo = video1;

// Flag to track if sound has been unmuted
let soundUnmuted = false;

// Add an event listener to the text box
textBox.addEventListener('click', () => {
    // Unmute sound for all videos on the first click
    if (!soundUnmuted) {
        videos.forEach(video => {
            video.muted = false;
        });
        soundUnmuted = true;
    }

    // Pause the currently playing video and hide it
    currentVideo.pause();
    currentVideo.style.display = 'none';

    // Choose a random video that is not the currently playing one
    let nextVideo;
    do {
        nextVideo = videos[Math.floor(Math.random() * videos.length)];
    } while (nextVideo === currentVideo);

    // Show and play the randomly selected video
    nextVideo.style.display = 'block';
    nextVideo.play();

    // Update the current video reference
    currentVideo = nextVideo;
});
