export class Producto {

    titulo: string
    precioUnitario: number
    urlImagen: string 
    descripcion: string

    static fromJSON(jsonProducto): Producto {
        var prod = new Producto()
        return Object.assign(prod, jsonProducto)
    }

}