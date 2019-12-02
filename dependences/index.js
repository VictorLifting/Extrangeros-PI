let botones = document.querySelectorAll(".go")
let contenido = document.querySelector(".contenido")
let mail= document.querySelector(".input1")

botones[1].addEventListener("click", function () {


    contenido.classList.add("slideOutUp")

    let retrasoCambio = setTimeout(function () {
        document.location.href = "./choose.html"
    }, 1000)



    
})

botones[0].addEventListener("click", function () {


    contenido.classList.add("slideOutUp")

    let retrasoCambio = setTimeout(function () {
        document.location.href = "./escoge.html"
    }, 1000)



    

})

