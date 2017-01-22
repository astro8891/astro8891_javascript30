$(document).ready(function () {
    window.addEventListener('keydown', function (e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) return;
        audio.currentTime = 0; //rewind the key to the start, can hit key multiple time
        audio.play();
        key.classList.add('playing');
    });

    function removeTransition(e) {
        if (e.propertyName !== 'transform')
            return;
        this.classList.remove('playing');
        console.log(this);
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});