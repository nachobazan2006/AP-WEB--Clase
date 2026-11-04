import { productosMascotas } from './productos.js';
import { filtrarPorTalle, renderizarCatalogo } from './funciones.js';
const contenedor = document.getElementById('contenedor-productos');
const filtro = document.getElementById('filtro-talle');
const estado = document.getElementById('estado-catalogo');
function actualizar() {
  const visibles = filtrarPorTalle(productosMascotas, filtro.value);
  renderizarCatalogo(contenedor, visibles);
  estado.textContent = `${visibles.length} productos disponibles`;
}
filtro.addEventListener('change', actualizar);
actualizar();
