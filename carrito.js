
export class Carrito {
    
    constructor (lista){
        this.lista = JSON.parse(localStorage.getItem("carrito")) || [];
    }

    findAllItems(){
        return this.lista;
    }

    createItem (item) {
        this.lista.push (item)
        localStorage.setItem( "carrito", JSON.stringify(this.lista))
    }

    findOneByIdItem(itemId){
        const item = this.lista.find (element => element.id === itemId)
    
        if (!item) {
            throw new Error("No existe item id:" + itemId)
        }
    
        return item;
    }

    updateItem (itemId, cantidad){
        const item = this.findOneByIdItem(itemId) ;
        const index = this.lista.indexOf (item) ;
        this.lista[index].cantidad = cantidad ;
        if (cantidad <= 0){
            this.lista[index].stock = false
        }
        localStorage.setItem ("carrito", JSON.stringify(this.lista))
    }
    
    deleteItem (itemId){
        const item = this.findOneByIdItem (itemId);
        const index = this.lista.indexOf (item) ;
        this.lista.splice (index, 1);
        localStorage.setItem ("carrito", JSON.stringify(this.lista))
    }
     


}


const carritoFromStorage = JSON.parse(localStorage.getItem("carrito"))

const carrito = new Carrito([])

carrito.createItem()
