window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    const title = key.getAttribute('data-title');
    const screen = document.querySelector('.screen');

    key.classList.add('pressed');

    if(!audio) return;
    
    audio.play();
    screen.innerText = `'${title}'`;

    setTimeout(() => 
    key.classList.remove('pressed')
    , 0.2);
})

