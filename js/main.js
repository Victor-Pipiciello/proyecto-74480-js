const listaCompras = ["papa ", "cebolla ", "lechuga ", "tomate "]
console.log(listaCompras.join(" - "))

function contar(){
    console.log(listaCompras.length)
}

function quitar(){
    listaCompras.pop()
}


let mensajeEntrada = alert("Hola! Esta es tu lista actual de compras: " + listaCompras)


let menu = parseInt(prompt("¿Qué deseas hacer? \n1-contar \n2-quitar \n3-terminar"))

while(menu !== 3) {
    switch(menu) {
        case 1:
            contar()
            break
        case 2:
            quitar()
            break
        default:
            alert("Opcion incorrecta, intente nuevamente")
            break
    }
    
    menu = parseInt(prompt("¿Qué deseas hacer? \n1- Contar \n2- Quitar \n3- Terminar"))

}