let botones = document.querySelectorAll(".go")
let contenido = document.querySelector(".contenido")
let atras = document.querySelector(".atras")

botones[0].addEventListener("click", function () {


   // contenido.classList.add("slideOutUp")

    let retrasoCambio = setTimeout(function () {
        document.location.href = "./thecontext.html"
    }, 1000)

})
botones[1].addEventListener("click", function () {


    // contenido.classList.add("slideOutUp")
 
     let retrasoCambio = setTimeout(function () {
         document.location.href = "./theculture.html"
     }, 1000)
 
 })
 botones[2].addEventListener("click", function () {


    // contenido.classList.add("slideOutUp")
 
     let retrasoCambio = setTimeout(function () {
         document.location.href = "./thetime.html"
     }, 1000)
 
 })
 botones[3].addEventListener("click", function () {


    // contenido.classList.add("slideOutUp")
 
     let retrasoCambio = setTimeout(function () {
         document.location.href = "./thedetails.html"
     }, 1000)
 
 })
 botones[4].addEventListener("click", function () {


    // contenido.classList.add("slideOutUp")
 
     let retrasoCambio = setTimeout(function () {
         document.location.href = "./moreinfo.html"
     }, 1000)
 
 })
 atras.addEventListener("click", function () {


    // contenido.classList.add("slideOutUp")
 
     let retrasoCambio = setTimeout(function () {
         document.location.href = "./choose.html"
     }, 1000)
 
 })