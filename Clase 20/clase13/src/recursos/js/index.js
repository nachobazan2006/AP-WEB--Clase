import { filtrarPorTalle, renderizarCatalogo } from './funciones.js';
import { obtenerDatos } from './obtenerDatos.js';
const contenedor = document.getElementById('contenedor-productos');
const filtro = document.getElementById('filtro-talle');
const estado = document.getElementById('estado-catalogo');
const dialogo = document.getElementById('detalle-producto');
let productosMascotas = [];
function actualizar() {
  const visibles = filtrarPorTalle(productosMascotas, filtro.value);
  renderizarCatalogo(contenedor, visibles);
  estado.textContent = `${visibles.length} productos disponibles`;
}
filtro.addEventListener('change', actualizar);
contenedor.addEventListener('click', evento => {
  const boton = evento.target.closest('button[data-id]');
  if (!boton) return;
  const producto = productosMascotas.find(item => item.id === Number(boton.dataset.id));
  if (!producto) return;
  document.getElementById('titulo-producto').textContent = producto.nombre;
  document.getElementById('descripcion-producto').textContent = producto.descripcion;
  dialogo.showModal();
});
document.getElementById('cerrar-dialogo').addEventListener('click', () => dialogo.close());
estado.textContent = 'Cargando productos…';
try {
  productosMascotas = await obtenerDatos('./recursos/datos/productos.json');
  actualizar();
} catch (error) {
  estado.textContent = error.message;
}

