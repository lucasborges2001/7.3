function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("resgistro").addEventListener("submit", (event) =>{
    //Prevención de envío del formulario para no refrescar la páginaP
    event.preventDefault();
    //Obtención de los valores de los inputs
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let contrasena1 = document.getElementById("password1").value
    let contrasena2 = document.getElementById("password2").value
    let terminos = document.getElementById("terminos").checked

    // Validación de no vacío
    if(nombre === '' || apellido === '' || email === '' || contrasena1 === '' || contrasena2 === '' || terminos === false){
        showAlertError()
        return
    }
    // Validación de contraseñas iguales
    if (contrasena1 != contrasena2){
        showAlertError()
        return
    }
    // Validación de contraseñas de mínimo 6 caracteres
    if (contrasena1.length < 6){
        showAlertError();
    return
    }
    
    // Está bien
    showAlertSuccess();
})