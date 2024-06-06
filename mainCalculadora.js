let operacionOP = null

function seleccionarOp(operacion) {
    operacionOP = operacion
}

function calcular() {
    var valor1 = parseFloat(document.getElementById("v1").value)
    var valor2 = parseFloat(document.getElementById("v2").value)
    var h3 = document.getElementById("res")
    
    if (isNaN(valor1) || isNaN(valor2)) {
        if (isNaN(valor1)) {
            h3.innerHTML = "El valor 1 no es válido"
            document.getElementById("v1").focus()
        } else {
            h3.innerHTML = "El valor 2 no es válido"
            document.getElementById("v2").focus()
        }
        return
    }

    var resultado
    
    if (operacionOP === '+') {
        resultado = valor1 + valor2
    } else if (operacionOP === '-') {
        resultado = valor1 - valor2
    } else if (operacionOP === '*') {
        resultado = valor1 * valor2
    } else if (operacionOP === '/') {
        if (valor2 !== 0) {
            resultado = valor1 / valor2
        } else {
            resultado = 'Error: División por cero'
        }
    } else {
        h3.innerHTML = 'Seleccione una operación'
        return
    }
    
    h3.innerHTML = resultado;
}
