// Arreglos: guardan varios valores en un mismo lugar.
const numeros = [1, true, 'hola', 4, 5, 7];

console.log('Primer elemento:', numeros[0]);
console.log('Cantidad de elementos:', numeros.length);

// El bucle recorre las posiciones del arreglo desde 0 hasta length - 1.
for (let i = 0; i < numeros.length; i++) {
    console.log(`Elemento en la posición ${i}:`, numeros[i]);
}

// Un arreglo también puede contener otros arreglos.
const numerosAnidados = [1, 2, [2, 5], [1, [2]]];
console.log('Elemento dentro de arreglos:', numerosAnidados[3][1][0]);

// Objetos agrupan datos relacionados usando pares propiedad: valor.
const persona = {
    nombre: 'Andrés',
    edad: 20,
    estudia: true,
    redes: ['Instagram', 'TikTok', 'YouTube'],
    otros: {
        mascotas: 2
    }
};

console.log('Nombre:', persona.nombre);
console.log('Primera red social:', persona.redes[0]);
console.log('Cantidad de mascotas:', persona.otros.mascotas);

// Ejemplo relacionado con el catálogo de Huellitas:
const productos = [
    { nombre: 'Correa', precio: 12000 },
    { nombre: 'Alimento para perro', precio: 8500 },
    { nombre: 'Juguete', precio: 3200 }
];

console.log('Productos del catálogo:');
for (let i = 0; i < productos.length; i++) {
    console.log(`${productos[i].nombre}: $${productos[i].precio}`);
}
