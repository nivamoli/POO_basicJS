/* 
PARADIGMAS (Más populares)
- Estructurado, Funcional, orientado a objetos 

No todos los lenguajes permiten usar cualquier paradigma.

POO nos permite tener un mejor orden. 

Los objetos guardan atributos y métodos para que construirlos sea un poco más sencillo y tengan funcionalidades. 

Las clases, son objetos que nos permiten definir atributos y métodos por defecto para que la creación de nuevos objetos sea más sencilla (es como tener un molde para facilitar la creación de instancias de estos.)

*/ 

// OBJETOS LITERALES E INSTANCIADOS
// LITERALES: objetos que definimos con llaves:

let objLiteral = {
  nombre: 'Nico',
  apellido: 'Valencia'
}

// INSTANCIADOS: objetos que se definen a partir de una función constructora o clase

function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellid0 = apellido;
}

let nico = new Persona('Nico', 'Valencia')
// Creamos una instancia del objeto Persona con la palabra reservada new

// ARRAYS Y MÉTODOS (objetos literales)

let Natalia = {
  name: 'Natalia',
  age: 20, 
  cursos_aprobados: [
    'Curso de Introduccion al marketing',
    'Curso de Responsive design'
  ], 
  aprobarCurso(nuevoCursito) {
    this.cursos_aprobados.push(nuevoCursito);
  }

}

console.log(Natalia.age)
// podemos acceder a las propiedades con la notación de puntos

let newCourse = Natalia.cursos_aprobados.push('Curso Marketing');

console.log(Natalia.cursos_aprobados);

Natalia.aprobarCurso('Curso de CSS');

console.log(Natalia.cursos_aprobados);

// OBJETOS INSTANCIADOS Y MÉTODOS

function Student(nombre, edad, cursos_aprobados) {
  this.nombre = nombre,
  this.edad = edad, 
  this.cursos_aprobados = cursos_aprobados
  // 1ERA FORMA MÉTODOS 
  // this.aprobarCurso = function (nuevoCursito) {
  // this.cursos_aprobados.push(nuevoCursito)
}

Student.prototype.aprobarCurso = function(nuevoCursito) {
  this.cursos_aprobados.push(nuevoCursito)
  console.log(this.cursos_aprobados)
}

let juanita = new Student('Juanita', 'edad', ['CSS', 'PHP', 'Golang'])

console.log(juanita.cursos_aprobados)

juanita.aprobarCurso('POO JS');

console.log(juanita.cursos_aprobados)

/* 
CLASES 
- Las clases en JS no son como en otros lenguajes, simplemente es una sintax sugar (sintaxis más amigable) para trabajar con prototipos

*/

class Student2 {
  constructor(nombre, edad, cursos_aprobados) {
    this.nombre = nombre, // this hace referencia a nuestra clase
    this.edad = edad, 
    this.cursos_aprobados = cursos_aprobados
  }

  aprobarCurso(nuevoCursito) {
    this.cursos_aprobados.push(nuevoCursito) // aquí this sigue haciendo referencia a nuestro prototipo (clase stundent2())
  }
}

const miguel = new Student2('Miguel', 23, ["Python", "Inteligencia artificial"])

console.log(miguel.cursos_aprobados)
console.log(miguel.aprobarCurso('Data science'))
console.log(miguel.cursos_aprobados)

/* 
PARA TRABAJAR CON MUCHOS PARÁMETROS 
- Definimos, en el método constructor, los parámetros dentro de un objeto:
*/

class Student3 {
  // podemos dar valores por defecto a los parámetros
  constructor({nombre, edad, cursos_aprobados = [], email}) { // no importa en que orden definamos los parámetros nunca va a haber problemas. 
    this.nombre = nombre,
    this.edad = edad, 
    this.email = email,
    this.cursos_aprobados = cursos_aprobados
  }

  aprobarCurso(nuevoCursito) {
    this.cursos_aprobados.push(nuevoCursito) // aquí this sigue haciendo referencia a nuestro prototipo (clase stundent2())
  }
}

const orlando = new Student3({
  nombre: 'Orlando',
  email: 'or@gmail.com', // no importa si no está en orden, los parámetros se van a mostrar correctamente.
  edad: 26,
  cursos_aprobados: [
    "Diseño gráfico", 
    "Manejo de la ansiedad"
  ]
}) //se pasan los parámetros en un objeto

console.log(orlando)