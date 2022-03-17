

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Canvas
let wave = new Wave();


//* Button START - STOP
// el('#btn').addEventListener('click', () => {
//     let playStop = false;
//     if (!playStop) {
//         wave.stopStream();
//         // console.log('play');
//         el('#btn').innerHTML = 'START';
//     } else {
//         wave.playStream();
//         // console.log('stop');
//         el('#btn').innerHTML = 'STOP';
//     }
//     playStop = !playStop;
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Press add Class and Remove

const buttonAnimation = (currentKey) => {
    const activeButton = el('.' + currentKey);
    activeButton.classList.add('pressed');

    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Drum click
const numberOfDrumButtons = group('.drumkit').length;
for (let i = 0; i < numberOfDrumButtons; i++) {

    group('.drumkit')[i].addEventListener('click', function () {
        const klickBox = this.innerHTML;
        drumSound(klickBox);
        buttonAnimation(klickBox);
    });
}


const drumKeys = document.addEventListener('keypress', function (event) {
    drumSound(event.key);
    buttonAnimation(event.key);
});
//* Drum kit
const options = { type: 'cubes', colors: ['blue', 'red', 'green'] };
const canvas = elid('canvas');


function drumSound(key) {

    switch (key) {
        case 'q':
            wave.fromElement('q', 'canvas', options);
            el('#q').play();
            break;

        case 'w':
            wave.fromElement('w', 'canvas', options);
            el('#w').play();
            break;

        case 'e':
            wave.fromElement('e', 'canvas', options);
            el('#e').play();
            break;

        case 'r':
            wave.fromElement('r', 'canvas', options);
            el('#r').play();
            break;

        case 't':
            wave.fromElement('t', 'canvas', options);
            el('#t').play();
            break;

        case 'z':
            wave.fromElement('z', 'canvas', options);
            el('#z').play();
            break;

        case 'u':
            wave.fromElement('u', 'canvas', options);
            el('#u').play();
            break;
        default: console.log(key);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Piano kit

const pianoKeys = document.addEventListener('keydown', function (press) { pianoSound(press.key); });


const pianoSound = (key) => {

    switch (key) {
        case 'a':
            wave.fromElement('a', 'canvas', options);
            el('#a').play();
            break;

        case 's':
            wave.fromElement('s', 'canvas', options);
            el('#s').play();
            break;

        case 'd':
            wave.fromElement('d', 'canvas', options);
            el('#d').play();
            break;

        case 'f':
            wave.fromElement('f', 'canvas', options);
            el('#f').play();
            break;

        case 'g':
            wave.fromElement('g', 'canvas', options);
            el('#g').play();
            break;

        case 'h':
            wave.fromElement('h', 'canvas', options);
            el('#h').play();
            break;

        case 'j':
            wave.fromElement('j', 'canvas', options);
            el('#j').play();
            break;
        case 'k':
            wave.fromElement('k', 'canvas', options);
            el('#k').play();
            break;

        default: console.log(key);
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////





































////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//** WAVE.JS */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const main = document.querySelector('main');
// let visuals = ['bars', 'bars blocks'];
// let mainCanvas = document.getElementById('mainCanvas');

// mainCanvas.onclick = () => {
//     mainCanvas.classList.remove('show');
// };

// function canvasClick(e, visual) {
//     mainCanvas.classList.add('show');
//     mainCanvas.height = window.innerHeight;
//     mainCanvas.width = window.innerWidth;

//     wave.fromElement('audio', 'mainCanvas', {
//         type: visual,
//         colors: ['blue', 'red', 'green']
//     });
//     document.getElementById('audio').play();

// }

// visuals.forEach((visual, i) => {

//     let div = document.createElement('div');
//     div.className = 'container';

//     let p = document.createElement('p');
//     p.className = 'name';
//     p.innerText = visual;

//     let canvas = document.createElement('canvas');
//     let id = `canvas_${i}`;
//     canvas.id = id;
//     canvas.onclick = (e) => {
//         canvasClick(e, visual);
//     };

//     div.appendChild(p);
//     div.appendChild(canvas);
//     main.appendChild(div);

//     wave.fromElement('audio', id, {
//         type: visual
//     });

// })
