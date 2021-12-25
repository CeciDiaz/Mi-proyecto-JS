/*
 let nombre = prompt ("Ingrese su nombre" ) ;

 alert("Bienvenido " + nombre)

 localStorage.setItem ("nombre", nombre)

//switch(opcion){}
*/


import { productos } from "./producto.js" ;

import { Carrito } from "./carrito.js";

import { Producto } from "./data.js";

//import { renderList } from "./render.js";


for (const producto of productos) {
    //console.log (producto)
}

  const carrito = new Carrito();

console.log(carrito.findAllItems()) 
//const productos = carrito.findAllItems();

//renderList("productos-lista", productos)



 //const productosDiv = document.getElementById("productos")
 //console.log (productosDiv)
/*
 let Boton = document.querySelector("#boton")

 Boton.addEventListener("click", function(){
     if (localStorage.getItem"theme") == 
 }
  
 )
 */

 let div = document.getElementById("id")

