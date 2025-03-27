const pianoKeys = document.querySelectorAll('.piano-keys .key');






pianoKeys.forEach((key) => {
    console.log(key.dataset.key);

    key.addEventListener('click', () => playTune(KeyboardEvent.dataset.key))
})