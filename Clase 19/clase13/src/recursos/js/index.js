import { productosMascotas } from './productos.js';
import { filtrarPorTalle, renderizarCatalogo } from './funciones.js';
const contenedor = document.getElementById('contenedor-productos');
const filtro = document.getElementById('filtro-talle');
const estado = document.getElementById('estado-catalogo');
const dialogo = document.getElementById('detalle-producto');
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
actualizar();
