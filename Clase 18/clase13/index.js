const personas = [
    
    {
        nombre: "Ignacio",
        edad: 20
    },
    {
        nombre: "Lucas",
        edad: 32
    },
    {
        nombre: "Franco",
        edad: 36
    },
]

// pasarle callback a los metodos significa pasarles una funcion
// personas.forEach ((elementoDelArreglo, indice, arreglo)=>{

// console.log(elementoDelArreglo.edad, indice, arreglo)

// })


// const nuevoArregloDePersonas= personas.map((persona, indice, arreglo)=>{

// const nuevaPersona = {
//     ...persona,
//     edad: persona.edad + 1
// }
// return nuevaPersona

// })
// console.log(nuevoArregloDePersonas)

// map para mapear cosas en un nuevo arreglo (asignacion no destructiva)
// const nuevoArregloDePersonas = personas.filter((persona, indice, arreglo)=>{
//     return persona.edad > 20
// })
// console.log(nuevoArregloDePersonas)
const nuevoArregloDePersonas =personas.find((persona, indice, arreglo)=>{

    return persona.edad > 20
})
console.log(nuevoArregloDePersonas)

