import hola from `./productos.js`
import {productosMascotas} from `./productos.js`
import {renderizarCatalogo, filtrarPorTalle} from `./funciones`

const contenedorProductos = document.getElementById(`contenedor-productos`)

renderizarCatalogo(contenedorProductos, productosMascotas)