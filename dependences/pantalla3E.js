let botones = document.querySelectorAll(".go")
let contenido = document.querySelector(".contenido")
let atras = document.querySelector(".atras")

botones[0].addEventListener("click", function () {


   // contenido.classList.add("slideOutUp")

    let retrasoCambio = setTimeout(function () {
        document.location.href = "./elcontexto2.html"
    }, 1000)

})
botones[1].addEventListener("click", function () {


    // contenido.classList.add("slideOutUp")
 
     let retrasoCambio = setTimeout(function () {
         document.location.href = "./cultura2.html"
     }, 1000)
 
 })
 botones[2].addEventListener("click", function () {


    // contenido.classList.add("slideOutUp")
 
     let retrasoCambio = setTimeout(function () {
         document.location.href = "./eltiempo2.html"
     }, 1000)
 
 })
 botones[3].addEventListener("click", function () {


    // contenido.classList.add("slideOutUp")
 
     let retrasoCambio = setTimeout(function () {
         document.location.href = "./detalles2.html"
     }, 1000)
 
 })
 botones[4].addEventListener("click", function () {


    // contenido.classList.add("slideOutUp")
 
     let retrasoCambio = setTimeout(function () {
         document.location.href = "./masinfo.html"
     }, 1000)
 
 })
 atras.addEventListener("click", function () {


    // contenido.classList.add("slideOutUp")
 
     let retrasoCambio = setTimeout(function () {
         document.location.href = "./escoge.html"
     }, 1000)
 
 })