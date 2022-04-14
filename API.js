
class API{
    static id = 0
    static productos = [] // objects[]
    getAll(){
        if(API.id != 0) return API.productos
        else return {error: 'producto no encontrado'}
    }
    getById(id){
        if(id <= API.id) return API.productos.find(e=>e.id == id)
        else return {error: 'producto no encontrado'}
    }
    add(product){
        const lengthBefore = API.productos.length
        API.id++ 
        const productToAdd = {
            title: product.title, 
            price: product.price, 
            thumbnail: product.thumbnail,
            id: API.id
        }
        API.productos.push(productToAdd)
        if(lengthBefore < API.productos.length) return 'producto agregado correctamente'
        else return {error: 'producto no encontrado'}
    }
    update(id, product){
        if(id <= API.id && API.productos.find(e=>e.id == id) != undefined){
            let productToUpdate = this.getById(id)
            productToUpdate = {
                title : product.title,
                price: product.price,
                thumbnail: product.thumbnail,
                id: id
            }
            this.delete(id)
            API.productos.push(productToUpdate)
            return 'producto actualizado correctamente'
        }else return {error: 'producto no encontrado'}
    }
    delete(id){
        if(id <= API.id){
            API.productos = API.productos.filter(e=>e.id != id)
            return 'producto borrado correctamente'
        }else return {error: 'producto no encontrado'}
    }
}
module.exports = {API}