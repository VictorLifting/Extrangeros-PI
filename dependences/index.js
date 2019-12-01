let botones = document.querySelectorAll(".go")
let contenido = document.querySelector(".contenido")
let mail= document.querySelector(".input1")

botones[1].addEventListener("click", function () {


    contenido.classList.add("slideOutUp")

    let retrasoCambio = setTimeout(function () {
<<<<<<< HEAD
        document.location.href = "./choose.html"
=======
        document.location.href = "./login.html"
    }, 1000)

})

botones[0].addEventListener("click", function () {


    contenido.classList.add("slideOutUp")

    let retrasoCambio = setTimeout(function () {
        document.location.href = "./pantalla1.html"
>>>>>>> efcbeaf069dd3e66ea3d44123cdf9e18e901068e
    }, 1000)

})

botones[0].addEventListener("click", function () {


    contenido.classList.add("slideOutUp")

    let retrasoCambio = setTimeout(function () {
        document.location.href = "./escoge.html"
    }, 1000)



    

})

