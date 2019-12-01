let campos = document.querySelectorAll(".input1");
let boton = document.querySelectorAll("#button1");

console.log(campos);


boton[0].addEventListener("click", function () {

    if(campos[0].value.length < 5){
        alert('El nombre ebe tener mas de 5 caractres');
        return;
    }

    if(campos[1].value.includes('@') === false){
        alert('El correo n tienen el formato requerido');
        return;
    }

    if(campos[1].value.includes('.com') === false){
        alert('El correo n tienen el formato requerido');
        return;
    }

    if(! (campos[2].value === campos[3].value)){
        alert('Las contraseñas son diferentes');
        return;
    }

    document.location.href = "./pantalla1.html";    


    
})