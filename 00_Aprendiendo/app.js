console.log("Hola, mundo!");

const boton = document.getElementById("btnCalcular");

const nombreUsuario = document.getElementById("nombreUsuario").value;

document.getElementById("resultado").style.display = "block";

boton.addEventListener("click", function () {
    console.log("Botón clickeado");
});