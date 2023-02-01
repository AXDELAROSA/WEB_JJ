"use strict"
//  alert('¡Hola desde un archivo externo!');
//  Este es un mensaje de la consola.

/*  
    #1 .- Conociendo JavaScript

    console.log('Hola CONSOLA');
    var valor_pi;
    valor_pi = "3.1416";
    var publicData  ='Hola';
*/

/* 
    #2 .- Variables
    var: se recomienda utilizarla para declarar variables globales.
    let: se recomienda utilizarla para declarar variables en bloque o en una estructura de datos.
*/
/*var nombre = 'Alejandro';

console.log(nombre)

function saludo(){
    let nombre = 'Alex';
    console.log(nombre)
    
    let edad = 34;
    console.log(edad);
} 

saludo();
*/

/*  #3 .- Constantes: Const es la palabra reservada para declarar una variable con valor constante.
const valor_pi = 3.1416;

// valor_pi=15;
*/

/*  #4 .- Números: 

var edad = 35;

var cantidad = "100"; //variable declarada con comillas la toma como tipo Texto.

var nuevaCantidad = Number(cantidad);

parseInt();
parseFloat();
*/

/*  #5 .- Cádenas de Texto  

var bebida = "agua";

var comida = 'ceviche';

var instruccion = "El platillo se llama 'ceviche' ";

var edad = 34;

var edadTexto = String(edad);
*/

/*  #6  .- Booleanos
var activo = false;

var estado = Boolean(10<9);

/*  # 7 .- Fechas  
var fecha = new Date();
*/


/* #8 .- Símbolos

var simbolo1 = Symbol();
var simbolo2 = Symbol();

var ambiente = Symbol('DEV');
*/

/* #9 .- JSON */

// JSON =>  JavaScript Object Notation
/*
var persona = {nombre: 'Sergio', twitter: 'yacafx'};

var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona
]

var personaJSON = JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJSON)
*/
///////////////////////////////////
//*** Operadores aritméticos
/*
var datoA = 10;
var datoB = 20;

// SUMA +
var suma = datoA + datoB;
console.log('La suma de '+ datoA +' + '+ datoB +' es igual a: ', suma);

// RESTA -
var resta = datoA - datoB;
console.log('La resta de '+ datoA +' - '+ datoB +' es igual a: ', resta);

// MULTIPLICACIÓN *
var multiplicacion = datoA * datoB;
console.log('La multiplicación de '+ datoA +' * '+ datoB +' es igual a: ', multiplicacion);

// DIVISIÓN /
var division = datoA / datoB;
console.log('La división de '+ datoA +' / '+ datoB +' es igual a: ', division);

// MODULO O RESIDUO %
var modulo = datoA % datoB;
console.log('El módulo o residuo de '+ datoA +' % '+ datoB +' es igual a: ', modulo);

// INCREMENTO ++
var incremento = datoA;
incremento++;

//incremento = incremento+1
console.log('El incremento ++ de '+ datoA +' es igual a: ', incremento);


// DECREMENTO --
var decremento = datoA;
decremento--;

//decremento = decremento -1
console.log('El decremento -- de '+ datoA +' es igual a: ', decremento);
*/

//********************************
//*** Operadores relacionales
/*
var datoA = 10;
var datoB = 20;

// MAYOR QUE >
var mayorQue = datoA > datoB;
console.log("Es "+ datoA + " mayor que " + datoB + ": " + mayorQue);

// MENOR QUE <
var menorQue =  datoA < datoB;
console.log("Es "+ datoA + " menor que " + datoB + ": " + menorQue);

// MAYOR O IGUAL QUE >=
var mayorOIgualQue =  datoA >= datoB;
console.log("Es "+ datoA + " mayor o igual que " + datoB + ": " + mayorOIgualQue);

// MENOR O IGUAL QUE <=
var menorOIgualQue =  datoA <= datoB;
console.log("Es "+ datoA + " menor o igual que " + datoB + ": " + menorOIgualQue);

// IGUAL QUE ==
var igualQue =  datoA == datoB;
console.log("Es "+ datoA + " igual que " + datoB + ": " + igualQue);

// NO ES IGUAL QUE O ES DIFERENTE QUE !=
var noEsIgualQue =  datoA != datoB;
console.log("Es "+ datoA + " no es igual o es diferente que " + datoB + ": " + noEsIgualQue);

*/

//********************************
//*** Operadores Lógicos
/*
var datoA = 10;
var datoB = 20;

// OPERADOR Y o AND - &&
var and = (datoA > 10 && datoB > 10)
console.log('El resultado de la evaluación AND es: ' + and);

// OPERADOR O u OR - ||
var or = (datoA > 10 || datoB > 10);
console.log('El resultado de la evaluación OR es: ' + or);

// OPERADOR DE NEGACIÓN o NOT - !
var not = !(datoA > 10)
console.log('El resultado de la evaluación NOT es: ' + not);
*/

//********************************
//*** Operadores de asignación
/*
var datoA = 10;

// ASIGNACIÓN SIMPLE
var igual = datoA;
console.log("El resultado de la asignación simple es: "+ igual);

// SUMAR Y ASIGNAR
var masIgual = 10;

masIgual += datoA;
//masIgual = masIgual + datoA;
console.log("El resultado de la asignación += es: "+ masIgual)

// RESTAR Y ASIGNAR
var menosIgual = 10;
menosIgual -= datoA;
console.log("El resultado de la asignación -= es: "+ menosIgual)


// MULTIPLICAR Y ASIGNAR
var porIgual = 10;
porIgual *= datoA;
console.log("El resultado de la asignación *= es: "+ porIgual)

// DIVIDIR Y ASIGNAR
var entreIgual = 20;

entreIgual /= datoA;

console.log("El resultado de la asignación /= es: "+ entreIgual)
*/

//********************************
//*** Operador negativo
/*
var datoA = 10;
var datoB = -datoA;

console.log("El valor de datoA es "+ datoA +", después del operador negativo datoB: "+ datoB);
*/

//********************************
//*** Operadores de concatenación
/*
var datoA = 10;
var datoB = 20;

var nombre = "Sergio";
var apellido = "Brito";

// CONCATENACIÓN DE NÚMEROS
var concatNumeros = datoA + datoB;
console.log("Los números "+ datoA +" y "+ datoB +" usados como números concatenados hacen una suma igual a: ", concatNumeros);

// CONCATENACIÓN DE CADENAS DE TEXTO
var concatTexto = nombre + " " + apellido ;
console.log("Los textos "+ nombre +" y "+ apellido +" se unen para formar: ", concatTexto);

// CONCATENACIÓN DE NÚMEROS COMO TEXTO
var concatNumComoTxt  = "2"+"8" ;
console.log("Los números 2 y 8 usados como texto se unen para formar: ", concatNumComoTxt);

// CONCATENACIÓN DE TEXTO Y NUMERO
var concatTxtNum = datoA + "8" ;
console.log("El número "+ datoA +" usado como número y 8 como texto se unen para formar: ", concatTxtNum);
*/

//********************************
//*** Operador ternario o condicional
/*
var datoA = 110;
var datoB = 20;

// Condición ? TRUE : FALSE
var resultado = datoA > datoB ? "Si es mayor" : "No es mayor";

console.log("El resultado con el operador ternario u operador condicional es: ", resultado);
*/

//********************************
//*** Operador de tipo de datos
/*
var datoA = 10; // Número

var nombre = "Playa"; // Cadena de texto

var activo = true // Boleano

var persona = {
	edad: 34, // Número
	deporte: 'Correr' // Cadena de texto
} // Objeto

console.log(typeof datoA);
console.log(typeof nombre);
console.log(typeof activo);

console.log(typeof persona);

console.log(typeof persona.edad);
console.log(typeof persona.deporte);
*/

//********************************
//*** Condición IF
/*
var datoA = 110;
var datoB = 20;
var resultado = "Sin datos";

if( datoA > datoB ){
    resultado = "La condición se cumplió";
}

console.log("El resultado de la evaluación if es: ", resultado);

*/
//********************************
//*** Condición IF-ELSE
/*
var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";

if (datoA > datoB){
	resultado = "La condición se cumplió";
} else {
    resultado = "La condición no se cumplió";
}

console.log("El resultado de la evaluación if-else es: ", resultado);
*/

//********************************
//*** Condición IF-ELSE-IF
/*
var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";


if (datoA > datoB){
	resultado = "La primer condición se cumplió";
} else if (datoB == datoA){
    resultado = "La segunda condición se cumplió";
}  else if (datoB == datoA){
    resultado = "La segunda condición se cumplió";
} else if (datoB >= datoA){
    resultado = "La segunda condición se cumplió";
} else if (datoB <= datoA){
    resultado = "La segunda condición se cumplió";
} else if (datoB != datoA){
    resultado = "La segunda condición se cumplió";
} else {
	resultado = "No se cumplieron las condiciones";
}

console.log("El resultado de la evaluación if-else-if es: ", resultado);
*/

//********************************
//*** Condiciones anidadas
/*
var datoA = 110;
var datoB = 20;
var datoC = 5;
var resultado = "Sin datos";

if (datoA > datoB){
    resultado = "La condición se cumplió";
    
    if (datoC < datoB){
		 if (datoC < datoB){
		resultado = "Evaluación anidada verdadera";
        } else { 
            resultado = "No se cumplió la evaluación anidada";
        }
	} else { 
		resultado = "No se cumplió la evaluación anidada";
	}

} else { 
	resultado = "No se cumplió la evaluación";
}

console.log("El resultado de la evaluación anidada es: ", resultado);
*/
//********************************
//*** Estructura SWITCH
/*
// Evaluación con números
var edad = 40;
var resultado = "";

switch (edad) {
    case 10:
		resultado = "La edad es 10 años";
	break;
	case 20:
		resultado = "La edad es 20 años";
	break;
    case 30:
		resultado = "La edad es 30 años";
    break;
    case 40:
		resultado = "La edad es 40 años";
	break;
    default:
    	resultado = "Ningún caso coincide";
    break;
}


console.log("El resultado de la evaluación con números es: "+ resultado)

// Evaluación con cadena de texto
var producto = "Radio";

switch (producto) {
    case "TV":
		resultado = "Se eligió la TV";
	break;
	case "Radio":
		resultado = "Se eligió el Radio ";
	break;
    case "Teléfono":
		resultado = "Se eligió el teléfono ";
	break;
    default:
    	resultado = "No se eligió ningún producto";
    break;
}

console.log("El resultado de la evaluación con texto es: "+ resultado)
*/
/*
var a = 5
var b = 12
var c = 4

if ((b > c) && !(c < a)) {
    console.log('Se ejecutó la primera condición');
} else if (!(b >= a) && (c > !b)) {
    console.log('Se ejecutó la segunda condición');
} else {
    console.log('Se ejecutó el último else')
}
*/

/***** CICLOS *****/
// 
// Ciclos | Loops | Iteradores
// 
// 2 tipos: Definidos e indefinidos
//
// Definidos: Ciclo FOR
//  
// Indefinidos: Ciclo WHILE y Ciclo DO...WHILE
//
/******************/


//********************************
//*** Ciclo FOR | Ciclo Definido
// Repetición = iteración

// COMPONENTES DE UN CICLO FOR
// Contador
// Condición o evaluación
// Paso | incrementador o decrementador

/*
var productos = 5;

for (let contador = 0; contador < productos; contador++) {
    console.log("Producto #"+ contador);
    debugger;
}
*/

//********************************
//*** Ciclo WHILE | Ciclo Indefinido
// Iteración indeterminada o desconocida
/*
var productos = 5; 

while(productos > 0) { 
   	console.log( 'Producto vendido');
   	productos--;
   debugger;
}
*/

//********************************0
//*** Ciclo DO..WHILE | Ciclo Indefinido
// Iteración indeterminada o desconocida
/*
var productos = 5; 

do { 
   	console.log( 'Producto vendido');
   	productos--;
   debugger;
} 
while(productos>=1)
*/

//********************************
//*** Estructura básica de una función

function saludar() {
    var saludo = "Hola Mundo";
    //console.log(saludo);
    return saludo;
}

saludar();