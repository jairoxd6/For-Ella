// audio.js
const audioElement = document.querySelector('audio');

function playAudio() {
  audioElement.play()
    .catch(error => {
      console.error('Failed to play audio:', error);
    });
}

window.addEventListener('click', playAudio, { once: true });
window.addEventListener('touchstart', playAudio, { once: true });