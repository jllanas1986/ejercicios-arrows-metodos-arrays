//1. Funciones flecha

//Convierte la siguiente función en una función flecha:
const saludar = () => {
    return 'Hola';
}

console.log(saludar());

//Convierte la siguiente función en una función flecha en línea:
const division = (a, b) => a / b;

console.log(division(8, 4));

//Convierte la siguiente función en una función flecha:
const miNombre = nombre => `Mi nombre es ${nombre}`

console.log(miNombre('jose'));

//Convierte las siguientes funciones en funciones flecha:
const test2 = () => console.log("Función test 2 ejecutada.");

const test1 = callback => callback()

test1(test2)

//2. Foreach

//Utiliza la siguiente array para resolver los próximos ejercicios:
let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

//Crea un array con la gente mayor de 25 años y muéstralo por consola.
let array = []
gente.forEach((persona) => {
    if (persona.edad > 25) {
        array.push(persona)
    }
});

console.log(array);

//Crea un array con la gente que empieza por J.
gente.forEach((persona) => {
    if (persona.nombre[0] === 'J') {
        console.log(persona);
    }
});



//3. Map

//Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
const genteMas25 = gente.map(persona => {
    if (persona.edad > 25) {
    return persona;
    }
})
console.log(genteMas25);

//Crea un array con la gente que empieza por J.
const peopleJ = gente.map(persona => {
    if (persona.nombre[0] === 'J') {
    return persona;
    }
})
console.log(peopleJ);

//Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
const arrayCuadrado = numbers.map(numero => {
    return numero ** numero
})
console.log(arrayCuadrado);

//4.Filter

//Crea un segundo array que devuelva los impares
const numbersDos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayImpares = numbersDos.filter(numero => {
    if (numero % 2 !== 0) {
        return numero
    }
})
console.log(arrayImpares);

//Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList = [
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }
  ];

  const foodVeggie = foodList.filter(food => {
    if (food.isVeggie === true) {
        return food
    }
}).map(food => food.name).map(food => `que rico ${food} me voy a comer`);
    console.log(foodVeggie);
    
//5. Reduce

//Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
const resultado = numeros.reduce(function callback(valorAnterior, valorActual) {
    return valorAnterior * valorActual
})
console.log(resultado);

//Extras

//Map

//Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
    {
      name: "Pepe",
      role: "The Boss",
      hobbies: ["leer", "ver pelis"],
    },
    {
      name: "Ana",
      role: "becaria",
      hobbies: ["nadar", "bailar"],
    },
    {
      name: "Luis",
      role: "programador",
      hobbies: ["dormir", "comprar"],
    },
    {
      name: "Carlos",
      role: "secretario",
      hobbies: ["futbol", "queso"],
    },
  ];

const frases = staff.map(persona => {
    return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(' y ')}`
})

console.log(frases);

//Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
const otherFoodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
const foodCountry = otherFoodList.map(food => {
    if(food === 'Pizza') {
        return `Como soy de Italia, amo comer ${food}`
    } else if (food === 'Ramen') {
        return `Como soy de Japon, amo comer ${food}`
    } else if (food === 'Paella') {
        return `Como soy de Valencia, amo comer ${food}`
    } else {
        return `Aunque no como carne, el ${food} es sabroso`
    }
})

console.log(foodCountry);

//Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];

const expensiveElements = inventory.filter(element => element.price > 300).map(element => element.name)
console.log(expensiveElements);

//Reduce

//Concatena todos los elementos del array con reduce para que devuelva una sola frase

let sentenceElements = [
    'Me',
    'llamo',
    'Jose',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];

    let unaFrase = sentenceElements.reduce((a, b) => a + b)
    sentenceElements = sentenceElements.join(' ')

    console.log(sentenceElements);
    