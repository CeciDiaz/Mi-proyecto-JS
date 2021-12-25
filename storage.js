 localStorage.setItem ("carrito", [

    { id : 1, nombre : "Anillo corona rosa" , precio : 30000 , cantidad: 52, stock : true},
    
    { id : 2, nombre : "Anillo solar", precio : 12000 , cantidad: 36, stock : true} , 
    
    { id : 3, nombre : "Anillo serpiente" , precio : 16500 , cantidad: 14, stock : true} , 
    
    { id : 4, nombre : "Anillo doble" , precio : 18000 , cantidad: 20, stock : true } ,
    
    { id : 5, nombre : "Anillo esmeralda", precio : 20000 , cantidad: 15, stock : true} ,
    
    { id : 6, nombre : "Anillo hueso de los deseos", precio : 20500 , cantidad: 33, stock : true } ,
    
    { id : 7, nombre : "Anillo cubico" , precio : 10500 , cantidad: 24, stock : true } ,
    
    { id : 8, nombre : "Anillo corazón azul", precio : 43000 , cantidad: 10, stock : true} ,
    
    { id : 9, nombre : "Anillo espiral", precio : 69000 , cantidad: 7, stock : true } ,
     
    { id : 10, nombre : "Aros Boton Snitch" , precio : 24200 , cantidad: 25, stock : true},
    
    { id : 11, nombre : "Aro gota brillante" , precio : 27900 , cantidad: 21, stock : true},
    
    { id : 12, nombre : "Aro Calabaza Cenicienta" , precio : 24200 , cantidad: 19, stock : true}, 
    
    { id : 13, nombre : "Argolla Brillo y Corazones", precio : 46500 ,cantidad: 8, stock : true},
   
    { id : 14, nombre : "Brazalete en plata Ley de corazón" , precio : 55800 , cantidad: 18, stock : true} ,
    
    { id : 15, nombre : "Brazalete Perlas" , precio : 68900 , cantidad: 13, stock : true},
    
    { id : 16, nombre : "Brazalete doble cadena de serpiente" , precio : 42800 , cantidad: 7, stock : true},
    
    { id : 17, nombre : "Brazalete deslizante tallo de flor" , precio : 74500 , cantidad: 10, stock : true } ,
    
    { id : 18, nombre : "Brazalete Momentos" , precio : 83800 , cantidad: 16, stock : true},
 
])

const carrito = localStorage.getItem( 'carrito' )

console.log( carrito )

localStorage.removeItem()

localStorage.clear()
