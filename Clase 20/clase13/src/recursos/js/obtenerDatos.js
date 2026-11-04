export async function obtenerDatos(url) {
  const respuesta = await fetch(url);
  if (!respuesta.ok) throw new Error(`No se pudo cargar el catálogo (HTTP ${respuesta.status})`);
  const datos = await respuesta.json();
  if (!Array.isArray(datos)) throw new Error('El catálogo debe ser una lista de productos');
  return datos;
}
