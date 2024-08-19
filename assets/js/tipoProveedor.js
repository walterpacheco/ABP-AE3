// assets/js/TipoProveedor.js
import { Proveedor } from './Proveedor.js';

export class TipoProveedor extends Proveedor {
    constructor(nombre, articulo, precio, pais, esInternacional) {
        super(nombre, articulo, precio);
        this.pais = pais;
        this.esInternacional = esInternacional;
    }

    getInfoProveedor() {
        const tipo = this.esInternacional ? "Internacional" : "Nacional";
        return `Proveedor: ${this.nombre}, País: ${this.pais}, Tipo: ${tipo}, Artículo: ${this.articulo}, Precio: $${this.precio}`;
    }
}
