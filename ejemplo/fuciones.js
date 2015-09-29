var saludo = function (texto){
    alert ("Hola " + texto);

}
function saludando(texto) {
    alert("HOLA " + texto.target.outerText);
}

document.getElementById("btn1").onclick = saludo;
//document.getElementById("btn2").onclick = saludando;

//document.getElementById("btn1").onclick = function (e) {
//    alert("Hola " + e.target.outerText);
//}


//document.getElementById("btn2").onclick = function () {
//    saludando("Hola mundo es el boton2");
//}

//ejemplo de sintaxis de funcion auto invocada//
(function () {
    document.getElementById("btn2").onclick = function () {
        saludando("Hola mundo es el boton2");
    };
    })();

