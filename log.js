
function mostrar(){

var peso = parseFloat(document.getElementById("peso").value)
var estatura = parseFloat(document.getElementById("estatura").value)
var imc = 0

imc = peso/(estatura*estatura)
    if(imc<18.5){
        alert("Tu imc es bajo, estas desnurtido")
    }
    else if(imc>=18.5 && imc<24.9){
        alert("Tu imc es normal")
    }
    else if(imc>=24.9 && imc<29.9){
        alert("Tienes Sobre peso ")
    }
    else{
        alert("Tienes obesidad")
    }
}