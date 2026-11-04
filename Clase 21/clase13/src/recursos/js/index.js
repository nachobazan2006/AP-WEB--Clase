import { filtrarPorTalle, renderizarCatalogo } from './funciones.js';
import { obtenerDatos } from './obtenerDatos.js';
import { URL_PRODUCTOS, CLAVE_GUARDADOS } from './config.js';
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
let guardados = [];
try {
  const almacenados = JSON.parse(localStorage.getItem(CLAVE_GUARDADOS) || '[]');
  if (Array.isArray(almacenados)) guardados = almacenados.filter(Number.isInteger);
} catch { guardados = []; }
const resumen = document.getElementById('resumen-carrito');
function actualizarResumen() { resumen.textContent = `Productos guardados: ${guardados.length}`; }
let productoSeleccionado = null;
contenedor.addEventListener('click', evento => {
  const boton = evento.target.closest('button[data-id]');
  if (boton) productoSeleccionado = Number(boton.dataset.id);
});
document.getElementById('guardar-producto').addEventListener('click', () => {
  if (productoSeleccionado === null || guardados.includes(productoSeleccionado)) return;
  guardados.push(productoSeleccionado);
  try { localStorage.setItem(CLAVE_GUARDADOS, JSON.stringify(guardados)); } catch { estado.textContent = 'No se pudo guardar en este navegador'; }
  actualizarResumen();
  dialogo.close();
});
actualizarResumen();
estado.textContent = 'Cargando productos…';
try {
  productosMascotas = await obtenerDatos(URL_PRODUCTOS);
  actualizar();
} catch (error) {
  estado.textContent = error.message;
}

