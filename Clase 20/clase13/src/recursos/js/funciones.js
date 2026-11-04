export function filtrarPorTalle(productos, talle) {
  if (!talle) return productos;
  return productos.filter(producto => producto.talles.includes(talle.toUpperCase()));
}

export function renderizarCatalogo(contenedor, productos) {
  contenedor.innerHTML = productos.map(producto =>     `<article>
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h2>${producto.nombre}</h2>
      <p>${producto.descripcion}</p>
      <ul><li>Talles: ${producto.talles.join(', ')}</li><li>Precio: $${producto.precio.toLocaleString('es-AR')}</li></ul>
      <button type="button" data-id="${producto.id}">Ver producto</button>
    </article>`).join('');
}
