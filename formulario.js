let nombre = document.getElementById("name-label");
let email = document.getElementById("email-label");
let opciones = document.getElementById("options");
let numCel = document.getElementById("number-label");
let consulta = document.getElementById("textarea-label");
let boton = document.getElementById("submit");
let form = document.getElementById("survey-form");
let parrafoNew = document.getElementById("alert");

/* CODIGO INCOMPLETO */

form.addEventListener("submit", e=>{
    e.preventDefault();

    let entrar = false;
    let regexEmail = /^∖w+([∖.-]?∖w+)*@∖w+([∖.-]?∖w+)*(∖.∖w{2,4})+$/;
    parrafoNew.innerHTML = "";

    /* NOMBRE */
    if(nombre.value.length < 6){
        parrafoNew += "El nombre no es valido <br>";
        entrar = true;
    }

    /* EMAIL */
    if(!regexEmail.test(email.value)){
        parrafoNew += "El email no es valido <br>";
        entrar = true;
    }

    /* NUMERO CEL */
    if(numCel.value.length != 10 ){
        parrafoNew += "El numero de celular no es valido <br>";
        entrar = true;
    }

    /* CONSULTA */
    if(consulta.value.length < 15){
        parrafoNew += "Su consulta es demasiado corta <br>";
        entrar = true;
    }

    if(entrar){
       
        $(document).ready(function() {
            $("#submit").toggleClass("submitTrue")
        });
    }
})
