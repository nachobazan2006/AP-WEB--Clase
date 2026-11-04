const contenedor = document.getElementById('contenedor-productos');
let tarjetas = '';
productosMascotas.forEach(producto => {
  tarjetas += `<article><img src="${producto.imagen}" alt="${producto.nombre}"><h2>${producto.nombre}</h2><p>${producto.descripcion}</p><ul><li>Talles: ${producto.talles.join(', ')}</li><li>Precio: $${producto.precio.toLocaleString('es-AR')}</li></ul></article>`;
});
contenedor.innerHTML = tarjetas;
document.getElementById('estado-catalogo').textContent = `${productosMascotas.length} productos disponibles`;
