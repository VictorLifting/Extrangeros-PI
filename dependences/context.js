let btnAudio = document.querySelector(".lenguage")
let Reproducir = document.querySelector(".reproducir")
let btnrepro = document.querySelectorAll(".reproducirI")
let audio
let activado = false;
let activado1 = false;
let botones = document.querySelectorAll(".boton")

function preload() {

    audio = loadSound("./dependences/contextoVasija.m4a")

}

function setup() {
    createCanvas(0,0);

}

//lenguaje 
btnAudio.addEventListener("click", function () {
    activado = !activado

    for (let i = 0; i < botones.length; i++) {

        if (activado) {
            botones[i].classList.add("activated")
            btnrepro[i].classList.remove("activated")

        } else if (activado == false) {
            botones[i].classList.remove("activated")


        }
    }

})

botones[1].addEventListener("click", function () {
    audio.play();
})

//reproducir
Reproducir.addEventListener("click", function () {

    activado1 = !activado1

    for (let i = 0; i < btnrepro.length; i++) {

        if (activado1) {

            btnrepro[i].classList.add("activated")
            botones[i].classList.remove("activated")
        } else if (activado1 == false) {
            btnrepro[i].classList.remove("activated")


        }
    }

})

let play = false;

btnrepro[0].addEventListener("click", function () {

    play = !play;

    if (play) {
        btnrepro[0].src = "./../src/imagenes/pause(2).png"
        audio.play();
    } else if (play == false) {
        btnrepro[0].src = "./../src/imagenes/play(2).png"
        audio.pause();

    }


    //audio.stop();

})


btnrepro[1].addEventListener("click", function () {

    play = false;
    btnrepro[0].src = "./../src/imagenes/play(2).png"
    audio.stop();

})