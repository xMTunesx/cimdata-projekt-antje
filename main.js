

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Canvas
let wave = new Wave();

// var audioCtx = new AudioContext();
// audioCtx.createMediaElementSource()



//* Button START - STOP
el('#btn').addEventListener('click', () => {
    let playStop = false;
    if (!playStop) {
        wave.stopStream();
        // console.log('play');
        el('#btn').innerHTML = 'START';
    } else {
        wave.playStream();
        // console.log('stop');
        el('#btn').innerHTML = 'STOP';
    }
    playStop = !playStop;
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Press add Class and Remove

buttonAnimation = (currentKey) => {
    const activeButton = el("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Drum click
const numberOfDrumButtons = group('.drumkit').length;
for (let i = 0; i < numberOfDrumButtons; i++) {

    group('.drumkit')[i].addEventListener("click", function () {
        const klickBox = this.innerHTML;
        drumSound(klickBox);
        buttonAnimation(klickBox);
    });
}


const drumKeys = document.addEventListener("keypress", function (event) {
    drumSound(event.key);
    buttonAnimation(event.key);
});
//* Drum kit
const options = { type: "cubes", colors: ["blue", "red", "green"] };
const canvas = elid('canvas');


function drumSound(key) {

    switch (key) {
        case "x":
            const tom1 = new Audio("sounds/drum-1.mp3");
            wave.fromElement('x', 'canvas', options)

            tom1.play();
            break;

        case "w":
            const tom2 = new Audio("sounds/drum-2.mp3");
            tom2.play()
            break;

        case "e":
            const tom3 = new Audio('sounds/drum-3.mp3');
            tom3.play();
            break;

        case "r":
            const tom4 = new Audio('sounds/drum-4.mp3');
            navigator.mediaDevices.getUserMedia({audio: true})
                .then(function (stream) {
                    wave.fromStream(stream,'canvas', options);
                });

            tom4.play();
            break;

        case "t":
            const snare = new Audio('sounds/drum-5.mp3');
            snare.play()
            break;

        case "z":
            const crash = new Audio('sounds/drum-6.mp3');
            crash.play();
            break;

        case "u":
            const kick = new Audio('sounds/drum-7.mp3');
            kick.play().then(console.log(wave));
            break;
        default: console.log(key);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Piano kit

const pianoKeys = document.addEventListener("keydown", function (press) { pianoSound(press.key); });


const pianoSound = (key) => {

switch (key) {
    case "a":
        const sound_1 = new Audio("sounds/A0.mp3");
        sound_1.play();
        break;

    case "s":
        const sound_2 = new Audio("sounds/A1.mp3");
        sound_2.play();
        break;

    case "d":
        const sound_3 = new Audio('sounds/A2.mp3');
        sound_3.play();
        break;

    case "f":
        const sound_4 = new Audio('sounds/A3.mp3');
        sound_4.play();
        break;

    case "g":
        const sound_5 = new Audio('sounds/A4.mp3');
        sound_5.play();
        break;

    case "h":
        const sound_6 = new Audio('sounds/A5.mp3');
        sound_6.play();
        break;

    case "j":
            const sound_7 = new Audio('sounds/A6.mp3');
        sound_7.play();
        break;

    default: console.log(key);
}
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////





































////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//** WAVE.JS */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const main = document.querySelector("main");
// let visuals = ["bars", "bars blocks"];
// let mainCanvas = document.getElementById("mainCanvas");

// mainCanvas.onclick = () => {
//     mainCanvas.classList.remove("show");
// };

// function canvasClick(e, visual) {
//     mainCanvas.classList.add("show");
//     mainCanvas.height = window.innerHeight;
//     mainCanvas.width = window.innerWidth;

//     wave.fromElement("audio", "mainCanvas", {
//         type: visual,
//         colors: ["blue", "red", "green"]
//     });
//     document.getElementById("audio").play();

// }

// visuals.forEach((visual, i) => {

//     let div = document.createElement("div");
//     div.className = "container";

//     let p = document.createElement("p");
//     p.className = "name";
//     p.innerText = visual;

//     let canvas = document.createElement("canvas");
//     let id = `canvas_${i}`;
//     canvas.id = id;
//     canvas.onclick = (e) => {
//         canvasClick(e, visual);
//     };

//     div.appendChild(p);
//     div.appendChild(canvas);
//     main.appendChild(div);

//     wave.fromElement("audio", id, {
//         type: visual
//     });

// })
