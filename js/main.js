let mensajeEntrada = prompt("Hola! Esta es tu lista actual de compras")

const listaCompras = ["papa", "cebolla", "lechuga", "tomate"]
console.log(listaCompras.join(" - "))

function Contar(){
    console.log(listaCompras.length)
}

function Quitar(){
    listaCompras.pop()
}

let menu = parseInt(prompt("¿Qué deseas hacer? \n1- Contar \n2- Quitar \n3- Terminar"))

while(menu !== 3){
    switch(menu){
        case 1:
            Contar()
            break
        case 2:
            Quitar()
            break
        default:
            alert("Opcion incorrecta, intente nuevamente")
            break
    }
    
    let menu = parseInt(prompt("¿Qué deseas hacer? \n1- Contar \n2- Quitar \n3- Terminar"))

}