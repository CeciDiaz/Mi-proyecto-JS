export class Producto{
    constructor(id, nombre, precio, cantidad, stock, img){
       this.id = id ;
       this.nombre = nombre;
       this.precio = precio;
       this.cantidad = cantidad;
       this.stock = stock;
       this.img = img;
   
   }
getNombre(){
   return this.nombre;
}

getPrecio(){
   return this.precio;
}
agotado(){
   this.stock = false ;
}

}