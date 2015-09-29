var saludo = function (texto){
    alert ("Hola " + texto);

}
function saludando(texto) {
    alert("HOLA " + texto.target.outerText);
}

document.getElementById("btn1").onclick = saludo;
document.getElementById("btn2").onclick = saludando;

//document.getElementById("btn1").onclick = function (e) {
//    alert("Hola " + e.target.outerText);
}
