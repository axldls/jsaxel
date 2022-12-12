// // const numeros = [1,2,3,4,5,6,7];
// // let resultado1 = numeros[2] + numeros[5];
// // console.log(resultado1)

// //recorrido del array

// const numeros = [1,2,5,4,9];
// for (let i=0; i<numeros.length; i++) {
//     alert(numeros[i])
// // }
// const usuarios = ["ana","maria","jose","lucas","miguel","matias"]
// let nuevousuario = ""
// do {
//     if (nuevousuario !== ""){
//         alert("el nombre esta en uso")
//     }
//     nuevousuario = prompt("ingrese nombre de usuario porfavor")
// } while (usuarios.includes(nuevousuario));
// usuarios.push(nuevousuario);
// // alert("el nombre de usuario "+nuevousuario+" se creo correctamente");
// const objeto1 = {id:1, nombre: "arroz"};
// const array = [objeto1, {id:2, nombre: "fideos"}]
// array.push({id:3, nombre: "pan"})
// console.log(array)
// const productos = 
// [{id:1, nombre:"Zapatillas", precio:"100"},
// {id:1, nombre:"Remeras", precio:"200"},
// {id:1, nombre:"Medias", precio:"400"},
// {id:1, nombre:"Camperas", precio:"350"},];
// for (const productos of productos) {
//     console.log(productos.id)
//     console.loh(productos.nombre)
//     console.log(productos.precio)
// }
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = number(precio);
        this.vendido = false;
    }
    sumarIva(){
        this.precio = this * 1.21;
    }
}
const productos = [];

const producto1 = new Producto("Medias", 55);
const producto2 = new Producto("Zapatillas", 500);

productos.push(producto1, producto2);
for (const producto of productos) {
    producto.sumarIva();
}
console.log(productos)