var botonMenu = document.getElementById("icono-menu");
var menu = document.querySelector(".menu");

botonMenu.addEventListener("click",function(){
    menu.classList.toggle("menuTrasladado");
})

var botonEnviarFormulario = document.querySelector(".submit");

botonEnviarFormulario.addEventListener("click", function() {
    alert("Validación y envío de formulario en construcción");
})