const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a)  Las pizzas que tengan un id impar.
const pizzasImpar = pizzas
  .filter(pizza => pizza.id % 2 !== 0)
  .map(pizza => pizza.nombre)

console.log(`Las pizzas con id impar son ${pizzasImpar[0]}, ${pizzasImpar[1]} y ${pizzasImpar[2]}.`)

console.log('-------------------')


// b) Responder: ¿Hay alguna pizza que valga menos de $600?

pizzas.filter((pizza) => {
  if (pizza.precio < 600) {
    console.log(`Si, la muzzarella. Cuesta $500.`)
  }
})

console.log('-------------------')

// c) El nombre de cada pizza con su respectivo precio.

const nombrePrecio = pizzas.map(({ nombre, precio }) => {
  console.log(`${nombre}: $${precio}`)
})

console.log('-------------------')

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
const ingPizza = pizzas.map(({ nombre, ingredientes }) => {
  console.log(`${nombre}: ${ingredientes}`)
})

console.log('-------------------')






























