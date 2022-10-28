function formulario(){
    let nombre, email, telefono, textarea, regex, validar, mostrar;

    nombre = document.getElementById("name-in").value;
    email = document.getElementById("email-in").value;
    telefono = document.getElementById("number-in").value;
    textarea = document.getElementById("textarea-label").value;
    mostrar = document.getElementsByClassName("ventanaEmergente");
    validar = [];
    regex = /\w+@\w+\.+[a-z]/;

    console.log("Hello Wolrd");
   
    if(nombre === "" || email === "" || telefono === "" || textarea === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    if(nombre.length > 25 || nombre.length < 7 || !isNaN(nombre)){
        alert("El nombre y el apellido es incorrecto");
        return false;
    } else{
        validar.push(true);
    }
    if(email.length > 30 || email.length < 7 || !regex.test(email)){
        alert("Email no valido");
        return false;
    } else{
        validar.push(true);
    }
    if(telefono.length != 10 || isNaN(telefono)){
        alert("Numero de telefono invalido");
        return false;
    } else{
        validar.push(true);
    }
    if(textarea.length > 250 || textarea.length < 20){
        alert("Consulta no valida");
        return false;
    } else{
        validar.push(true);
    }

    for(let i = 0; i > validar.length; i++){
        console.log(validar[i]);
        if(validar[i] === true){
            mostrar.style.visibility="visible !important";
        }
    }

    debugger;
    
}