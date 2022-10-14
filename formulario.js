let nombre = $("#name-label").val();
let email = $("#email-label").val();
let numCel = $("#number-label").val();
let boton = $("#submit");
let form = $("#survey-form");
let error = $("#alerta");
var mostrarBtn = [];

function validarCampos(){
    let regexEmail = /^∖w+([∖.-]?∖w+)*@∖w+([∖.-]?∖w+)*(∖.∖w{2,4})+$/;
    let errorMensaje = [];

    if(nombre == null || nombre == undefined || nombre == ""){
            errorMensaje.push("Ingrese su nombre");
            mostrarBtn.push(false);
    }
    else if (nombre != undefined && nombre.length > 6){
        errorMensaje.push("Ingrese su nombre");
        mostrarBtn.push(false);
    }

    if(email === null || email === "" || !regexEmail.test("email")){
        errorMensaje.push("Ingrese su email");
        mostrarBtn.push(false);
    }

    if(numCel.length != 10 || numCel === null || numCel === ""){
        errorMensaje.push("Ingrese su numero de telofono");
        mostrarBtn.push(false);
    }

    error.innerHTML = errorMensaje.join(', ');

    for(let i = 0; i > mostrarBtn.length; i++){
        if(mostrarBtn[i] === false){
            alert("NO SE HA ENVIADO CORRECTAMENTE SU CONSULTA");
        }
    }
}


