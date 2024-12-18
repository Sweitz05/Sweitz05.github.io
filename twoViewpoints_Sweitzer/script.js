// References to the video and audio elements
const videoPlayer = document.getElementById('video-player');
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');

// Ensure video and audio play automatically on page load
window.addEventListener('load', () => {
  videoPlayer.muted = false; // Unmute the video
  videoPlayer.play().catch((error) => console.error('Video autoplay blocked:', error));

  audioPlayer.play().catch((error) => console.error('Audio autoplay blocked:', error));
});

// Change audio on video click
videoPlayer.addEventListener('click', () => {
  audioSource.src = 'audio/tselliot.mp3';
  audioPlayer.load();
  audioPlayer.play().catch((error) => console.error('Error playing new audio:', error));
});
