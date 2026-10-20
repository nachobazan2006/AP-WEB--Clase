// esta declaracion define una tarea con un nombre y los datos que recibe.
function suma(a, b) {
    return a + b;
}

// la llamada jecuta la función y se guardan los datos devueltos por return.
const resultado = suma(10, 5);
console.log('Resultado de la suma:', resultado);

// los parámetros permiten reutilizar la misma función con otros valores.
console.log('Otra suma:', suma(3, 8));


function calcularPrecioConDescuento(precio, porcentajeDescuento) {
    const descuento = precio * porcentajeDescuento / 100;
    return precio - descuento;
}

const precioOriginal = 12000;
const precioFinal = calcularPrecioConDescuento(precioOriginal, 10);
console.log('Precio original:', precioOriginal);
console.log('Precio con 10% de descuento:', precioFinal);
