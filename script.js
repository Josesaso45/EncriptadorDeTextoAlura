var botonEncriptar = document.querySelector(".btn-encriptador");
var botonDesencriptar = document.querySelector(".btn-desencriptador");
var muneco = document.querySelector("contenedorMuneco");
var contenedor = document.querySelector(".contenedorDeParrafo");
var resultado = document.querySelector(".contenedorResultado");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto (){
    var cajaTexto = document.querySelector(".cajaTexto")
    return cajaTexto.value
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0;i < texto.length; i++){
        if(texto= [i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto= [i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto= [i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto= [i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto= [i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = () =>{
    var contenido = document.querySelector(".contenedorResultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})

