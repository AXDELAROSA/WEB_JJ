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

//********************************0
//*** Control de ciclos
// break | continue
/*
var contador = 0 
var cuenta = 0;

for(contador = 0;contador<= 20;contador++) { 
    if(contador == 5){
        break
    }
   if (contador % 2 == 0) { 
      continue;
   } 
   cuenta++;
   debugger;
} 

console.log("Hay" + cuenta + " números impares");
*/

//********************************
//*** Estructura básica de una función
/*
function saludar() {
    var saludo = "Hola Mundo";
    //console.log(saludo);
    return saludo;
}

saludar();
*/

//********************************
//*** Parámetros de una función
/*
function saludar(nombre, edad) {
	console.log('Hola: ', nombre);
	console.log('Edad: ', edad);
	var resultado = nombre + " tiene " + edad + " años";
	return resultado;
}

var mensaje = saludar("yacaFx", 34);

console.log(mensaje)
*/

//********************************
//*** Inicialización de parámetros
/*
function contar(cantidad = 20) {
	console.log('Total: ', cantidad);
}

contar(100);
*/

//********************************
//*** Parámetros REST
/*
//function cocinar(ingrediente1,ingrediente2,...masIngredientes) {
function cocinar(...masIngredientes) {
    // console.log('Ingrediente1: ', ingrediente1);
    // console.log('Ingrediente2: ', ingrediente2);
    console.log("masIngredientes", masIngredientes);
}

cocinar("Pollo", "Tomate", "Arroz", "Frijoles", "Pescado", "Chile");
*/

//********************************
//*** Parámetros SPREAD
/*
function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros) {
    console.log('Ingrediente1: ', ingrediente1);
    console.log('Ingrediente2: ', ingrediente2);
    console.log('Ingrediente3: ', ingrediente3);
    console.log('Otros: ', otros)
}
var ingredientesBase = ["Pollo", "Tomate"];
cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile");
*/

//********************************
//*** Función Anonima
/*
// (
//     function(){
//         var mensaje = "Hola de nuevo";
//         console.log(mensaje);
//     }
// )()

var saludar = function(nombre){
    var mensaje = "Hola " + nombre;
    return mensaje;
}
*/
//********************************
//*** Calllbacks
/*
function calcular(datoA, datoB, sumarCB, restarCB) {
    var suma = datoA + datoB
    var restar = datoA - datoB;
    sumarCB(suma);
    restarCB(restar);
}

calcular(2, 3,
    function(resultado){
        console.log('Suma', resultado)
    },
    function(resultado){
        console.log('Resta', resultado)
    }
)

// calcular(d1, d2, func, func)
*/

//********************************
//*** Función Arrow | Fat Arrow | Lambda
/*
var saludar = nombre => "Hola " + nombre;

console.log(saludar("Alex"));

var sumar = cantidad => cantidad + 10
console.log(sumar(10));

var calcular = (datoA, datoB) => datoA + datoB
console.log(calcular(10, 15));

var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA + datoB + datoC;
}
console.log(generar(10, 15));

var validar = () => {
    return 'Validación correcta';
}
console.log(validar())
*/

//********************************
//*** Uso del operador this
/*
const boton = document.querySelector('.boton');

// boton.addEventListener('click', function () {
//     console.log(this.innerHTML);
// })

boton.addEventListener('click', () => {
    console.log(this)
    this.location = "http://www.google.com";
})
*/

//********************************
//*** Eventos del mouse
// Con esta línea se hace una asociación entre HTML y JavaScript
// y viene desde la pestaña de INDEX en la etiqueta:
// <div class="boton">
/*
const boton = document.querySelector('.boton'); 

boton.addEventListener('click', function () {
    console.log("El boton se ha pulsado");
})

boton.addEventListener('mouseover', function () {
    console.log("El mouse esta sobre el botón");
})

boton.addEventListener('mouseout', function () {
    console.log("El mouse esta fuera del botón");
})
*/

//********************************
//*** Eventos del teclado
// keydown  .-  Al soltar presionar la tecla
// keypress .-  Mientras está presionada la tecla
// keyup    .-  Al soltar la tecla
/*
window.addEventListener("keydown", function (event) {
	console.log('Pulsando tecla');
    //console.log(event.keyCode)
	console.log(String.fromCharCode(event.keyCode))
})
window.addEventListener("keypress", function (event) {
	console.log('Tecla pulsada')
})
window.addEventListener("keyup", function (event) {
	console.log('Tecla liberada')
})
*/

//********************************
//*** Carga de documento
/*
window.addEventListener('load', function() {
  console.log('El contenido de la ventana se ha cargado');  
});
*/

//********************************
//*** Eventos multimedia
/*
const video = document.querySelector('.bostonVideo');

video.addEventListener("play", function () {
    console.log('El video ha iniciado');
});

video.addEventListener("pause", function () {
    console.log('El video se ha pausado');
});

video.addEventListener("seeking", function () {
    console.log('Se esta buscando en el video', this.currentTime);
});

video.addEventListener("ended", function () {
    console.log('El video ha terminado');
});
*/

//*** Temporizadores o timers
//********************************
// setInterval  .- Permite que se ejecute la acción cada cierto intervalo
// setTimeout   .- Permite que se ejecute sólo una vez la acción

//  var temporizador = setInterval(function () {
//      setColor();
//  }, 2000);  // se cambia el color de la pantalla cada 2 segundos, está expresada en milisegundos.
/*
 setTimeout(function () {
     setColor();
 }, 3000);

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor() {
    clearInterval(temporizador)
}
*/

//********************************
//*** Ventana de alerta
/*
const video = document.querySelector('.bostonVideo');

video.addEventListener("play", function () {
   alert("MENSAJE \n\n El video ha iniciado");
});

video.addEventListener("pause", function () {
   alert("MENSAJE \n\n El video se ha pausado");
});

video.addEventListener("ended", function () {
   alert("MENSAJE \n\n El video ha terminado");
});
*/

//********************************
//*** Ventana de confirmación
/*
const video = document.querySelector('.bostonVideo');
video.addEventListener("ended", function () {
    let resultado = confirm("¿Deseas ver el video nuevamente?");
    console.log(resultado);
    if (resultado) {
        video.play();
    }else {
        window.location = "http://www.google.com";
    }

});
*/

//********************************
//*** Ventana para ingreso de datos
/*
const video = document.querySelector('.bostonVideo');
video.addEventListener("ended", function () {
   let email = prompt("Escribe tu correo para ver mas videos",  "data@info.com");
  
   if (email == null || email == "") {
        console.log("Sin datos");
    } else {
        console.log(email);
    }
});
*/

//********************************
//*** Propiedades númericas
/*
console.log("MAX_VALUE: ", Number.MAX_VALUE); //Número positivio más largo posible que puede utilizar JavaScript.
console.log("MIN_VALUE: ", Number.MIN_VALUE); //Número positivio más bajo posible que puede utilizar JavaScript.
console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);
console.log("NEGATIVE_INFINITY: ", Number.POSITIVE_INFINITY);
console.log("NaN: ", Number.NaN);   // Para saber si un valor que estamos manejando es un número.
*/

//********************************
//*** Métodos númericos
/*
var numero = "10.301";
var numero_int = 10;

console.log('Number: ', typeof numero,' // ', typeof Number(numero));
console.log('parseInt: ',  parseInt(numero));
console.log('parseFloat: ', Number.parseFloat(numero));
console.log('isNaN: ', isNaN(numero));
console.log('isNaN: ', isNaN(numero_int));
console.log('isInteger: ', Number.isInteger(numero));
console.log('isInteger: ', Number.isInteger(numero_int));
*/

//********************************
//*** Propiedades númericas de instancias
/*
var numero = 2.5;
console.log("toExponential: ", numero.toExponential(4));
console.log("toFixed: ", numero.toFixed(2));
console.log("toPrecision: ", numero.toPrecision(6));
console.log("toString: ", typeof numero.toString());
*/

//********************************
//*** Creando cadena de texto
/*
var pais = 'México';
var comida = new String("Ceviche");
*/

//********************************
//*** Medir una cadena de texto
/*
var mensaje = "Estoy aprendiendo JavaScript";
console.log("La cadena de texto tiene [" + mensaje.length + "] letras");
*/

//********************************
//*** Métodos búsqueda | Parte 1
/*
var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";
var resultado;
//  Cuando la búsqueda arroje un -1 significa que no se encontró ninguna coincidencia de 
//  la palabra buscada.

// indexOf      :   Busca la primera incidencia donde se encuentra la palabra buscada.
//resultado = mensaje.indexOf("aprendiendo");

// lastIndexOf  :   Busca la última aparición donde se encuentra la palabra buscada.
//resultado = mensaje.lastIndexOf("aprendiendo");

// search       :   Es la posición donde se encuentra el texto en la variable.
//resultado = mensaje.search("aprendiendo");

// search | Expresión regular
resultado = mensaje.search(/ja/i);
console.log(resultado);
*/

//********************************
//*** Métodos búsqueda | Parte 2
/*
var mensaje = "Estoy aprendiendo JavaScript y estoy Aprendiendo mucho";
var resultado;

// match:
// resultado = mensaje.match(/aprendiendo/gi);///gi);
// substr:
// resultado = mensaje.substr(6,11);
// substring:
// resultado = mensaje.substring(6,17);
// charAt:
 resultado = mensaje.charAt(0); // En éste método la cuenta inicia en 0
console.log(resultado);
*/

//********************************
//*** Métodos búsqueda | Parte 3
//  Todos los métodos son sensibles a mayúsculas.
/*
var mensaje = "Estoy aprendiendo JavaScript";
var resultado;

// startsWith   -   si inicia con.
//resultado = mensaje.startsWith("Es");

//var textoEn =  mensaje.indexOf("JavaScript")
//resultado = mensaje.startsWith("Ja", textoEn);

// endsWith
//resultado = mensaje.endsWith("JavaScript");

// includes
//resultado = mensaje.includes("JavaScript");
//resultado = mensaje.includes("JavaScript", 6);
resultado = mensaje.includes("Estoy", 6);
console.log(resultado);
*/

//********************************
//*** Métodos de generación, reemplazo y separación
/*
//var mensaje = "Estoy aprendiendo JavaScript";
//var mensaje = "Estoy-aprendiendo-JavaScript";
var mensaje = "      Estoy aprendiendo JavaScript        ";
var resultado;

// repeat
//resultado = mensaje.repeat(200);

// replace
//resultado = mensaje.replace("JavaScript", "a programar");

// slice
//resultado = mensaje.slice(6);
//resultado = mensaje.slice(6, mensaje.length)
//resultado = mensaje.slice(6, mensaje.length-6)
//resultado = mensaje.slice(6, 11)

// split
//resultado = mensaje.split(" ");
//resultado = mensaje.split("-");

// trim
resultado = mensaje.trim();
console.log(resultado);
*/

//********************************
//*** Métodos de transformación
/*
var mensaje = "Estoy aprendiendo JavaScript";
var mensaje2 = " y Programación";
var total = 123456;

var resultado;

//resultado = total.toString();
//resultado = mensaje.toLowerCase();
//resultado = mensaje.toUpperCase();

//resultado = mensaje.concat(mensaje2);
//resultado = mensaje.concat(mensaje2, ' y tengo muchas ideas');
resultado = mensaje.concat(mensaje2, ' y tengo muchas ideas', ' 123', ' 123', ' 123', ' 123', ' 123', ' 123', ' 123');
console.log(resultado);
*/

//********************************
//*** Plantillas y literales
/*
var lenguaje = 'JavaScript';
var lenguaje2 = 'HTML';
var lenguaje3 = 'CSS';

//var mensaje = 'Me gusta ' + lenguaje;
var mensaje = `Me gusta ${lenguaje} y su integración con ${lenguaje2}.`;

//console.log(mensaje);

//---- Mensaje multilinea
 var mensajeMultilinea = `
    Hola mundo,
 	estoy aprendiendo
 	${lenguaje} y me gusta
 	como se integra con ${lenguaje2} y ${lenguaje3}.`;

console.log(mensajeMultilinea);
*/

//********************************
//*** Creando tu primer arreglo
/*
var platillos = [ "ceviche", "tacos", "pasta"];

var bebidas = new Array( "Jamaica", "Chicha Morada", "Pozol" );

console.log(platillos, bebidas)
console.log(typeof platillos, bebidas)
console.log(Array.isArray(platillos), bebidas)
*/

//********************************
//*** Medir y acceder a un arreglo
/*
var platillos = ["Ceviche", "Tacos", "Pasta"]; //, "tostadas"];
console.log("Hay "+ platillos.length + " platillos en el menú.");

var platillos = ["Ceviche", "Tacos", "Pasta", "Tostadas"];
console.log("Hay "+ platillos.length + " platillos en el menú.");

var platillo = platillos[1];
console.log("El platillo seleccionado es: ", platillo)

var platillo = platillos[platillos.length -1];
console.log("El platillo seleccionado es: ", platillo)
*/

//********************************
//*** Arreglos multidimensionales | Arreglo de arreglos
/*
var platillos = ["Ceviche", "Tacos", "Pasta"];
var paises = ["Perú", "México", "Italia"];

var menu = [ platillos, paises ];

console.log(menu)
console.log( menu[0][1] )
console.log( menu[1][1] )
*/

//********************************
//*** Operaciones básicas de un arreglo
/*
var platillos = ["ceviche", "tacos", "pasta"];
console.log('Antes:', platillos);

//platillos.push("Tostadas");
//platillos.push("Queso");

//platillos.pop();
//platillos.pop();

var mensaje = platillos.join();
console.log( mensaje);

//console.log('Después:', platillos);
*/

//********************************
//*** Generación de arreglos con split() from() y of()
/*
//--- split()
//var mensaje = "ceviche,tacos,pasta";
//var platillos = mensaje.split(',');

//--- Array.from();
//var platillosHTML = document.querySelectorAll('.platillos p')
//var platillosHTML = Array.from(document.querySelectorAll('.platillos p'))
//var platillos = platillosHTML.map( platillo => platillo.textContent )

//--- Array.of();
var platillos = Array.of("ceviche", "tacos", "pasta");

//console.log(platillos)
//console.log(platillosHTML)
console.log(platillos)
*/

//********************************
//*** Ordenando un arreglo
/*
var platillos = ["Ceviche", "Tacos", "Pasta"];
console.log('Antes: ', platillos);

platillos.sort(); 
console.log('Ordenado: ', platillos);

platillos.reverse(); 
console.log('Después: ', platillos);

 platillos.reverse(); 
 console.log('Reversa de nuevo: ', platillos);
 */

//********************************
//*** Desestructuración de arreglos
/*
//var platillos = ["ceviche", "tacos", "pasta"];
var platillos = ["ceviche", "tacos", "pasta", "tostadas"];

// var platillo1 = platillos[0];
// var platillo2 = platillos[1];
// var platillo3 = platillos[2];

// var platillo1 = null;
// var platillo2 = null;
// var platillo3 = null;
// var platillo4 = null;

//[platillo1, platillo2, platillo3] = platillos;
var [platillo1, platillo2, platillo3, platillo4] = platillos;


//console.log(platillo1, platillo2, platillo3)
console.log(platillo1, platillo2, platillo3, platillo4)
*/

//********************************
//*** Iterando arreglos con for...in
/*
var platillos = ["ceviche", "tacos", "pasta"];
// for ( let platillo in platillos) {
//     console.log(platillos[platillo])
// }

for ( let i in platillos) {
    console.log(platillos[i])
}
*/

//********************************
//*** Iterando arreglos con forEach
/*
var platillos = ["ceviche", "tacos", "pasta"];

//platillos.forEach( platillo => console.log(platillo) )

platillos.forEach( (platillo, index) => console.log(index, platillo) )
*/

//********************************
//*** Buscando en un 
/*
var platillos = ["ceviche", "tacos", "pasta"];
//var pElegido = platillos.find( platillo => platillo == "pasta");
//var pElegido = platillos.find( platillo => platillo == "tostadas");

var menu = [
    {nombre: 'Ceviche', precio: 20, pais: 'Perú'},
    {nombre: 'Tacos', precio: 10 , pais: 'México'},
    {nombre: 'Pasta', precio: 50, pais: 'Italia'}
];

var pElegido = menu.find( platillo => platillo.nombre == 'Tacos');
console.log(pElegido)
*/

//********************************
//*** Busqueda de índice de elementos
/*
 var platillos = ["ceviche", "tacos", "pasta"];

 var menu = [{          nombre: 'Ceviche',
                        precio: 20,
                        pais: 'Perú'
            }, {
                        nombre: 'Tacos',
                        precio: 10,
                        pais: 'México'
            },{
                        nombre: 'Pasta',
                        precio: 50,
                        pais: 'Italia'
            }]

// //var numPlatillo = null;
// //var numPlatillo = platillos.findIndex( platillo => platillo == 'tacos' );
var numPlatillo = menu.findIndex( platillo => platillo.nombre == 'Pasta' );
console.log("Platillo número: ", numPlatillo);
*/

//********************************
//*** Filtrar arreglos
/*
var menu = [{
                nombre: 'Ceviche',
                precio: 20,
                pais: 'Perú'
            },{
                nombre: 'Tacos',
                precio: 10,
                pais: 'México'
            },{
                nombre: 'Pasta',
                precio: 50,
                pais: 'Italia'
            },{
                nombre: 'Quesadillas',
                precio: 15,
                pais: 'México'
        }];

var resultado = null;
//resultado =  menu.find(platillo => platillo.pais == 'México');
resultado =  menu.filter(platillo => platillo.pais == 'México');

console.log(resultado);
*/

//********************************
//*** Validación de elementos de un arreglo
/*
var resultado = null;

var menu = [{
        nombre: 'Ceviche',
        precio: 20,
        pais: 'Perú'
    },
    {
        nombre: 'Tacos',
        precio: 10,
        pais: 'México'
    },
    {
        nombre: 'Pasta',
        precio: 50,
        pais: 'Italia'
    },
    {
        nombre: 'Quesadillas',
        precio: 15,
        pais: 'México'
    }
]

// resultado = menu.some( platillo => platillo.precio <= 10);
// console.log('¿Hay platillos abajo de 20? ', resultado);

resultado = menu.every( platillo => platillo.precio <= 60);
console.log('¿Todos los platillos cuestan menos de 10? ', resultado);
*/

//********************************
//*** Obteniendo datos con fetch
/*
var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var posts = null;

boton.addEventListener('click', function () {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => {
        posts = data;
        mostrarDatos(posts)
    })
});

function mostrarDatos(posts) {
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}*/

//********************************
//*** Trabajando con promesas
/*
var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var contBanderas = document.getElementById('banderas');

boton.addEventListener('click', function () {
    getPosts()
        .then(data => data.json())
        .then(posts => {
            mostrarDatos(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then(countries => {
            mostrarBanderas(countries);
        });
});

function getPosts() {
    return fetch('http://jsonplaceholder.typicode.com/posts');
}

function getCountries() {
    return fetch('https://restcountries.com/v2/all');
}

function mostrarBanderas(countries) {
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    })
}

function mostrarDatos(posts) {
    contBanderas.innerHTML = '';
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}*/


//********************************
//*** Manejo de errores
/*
var boton = document.getElementById('boton');
var mensajes = document.getElementById('mensajes');
var contenedor = document.getElementById('contenedor');
var contBanderas = document.getElementById('banderas');

boton.addEventListener('click', function () {
    getPosts()
        .then(data => data.json())
        .then(posts => {
            mostrarDatos(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then(countries => {
            mostrarBanderas(countries);
        })
        .catch(error => {
             mensajes.classList.toggle('hide');
             mensajes.innerHTML = error;
             setTimeout(() => mensajes.classList.toggle('hide'), 6000);
        })
});

function getPosts() {
    return fetch('http://jsonplaceholder.typicode.com/posts');
}

function getCountries() {
    return fetch('https://restcountries.com/v2/all');
}

function mostrarBanderas(countries) {
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    })
}

function mostrarDatos(posts) {
    contBanderas.innerHTML = '';
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}*/

//********************************
//*** Trabajando con Clases
//*** Objetos, sus métodos y sus propiedades
/*
class Pantalla {
    constructor(marca, modelo, pulgadas) {
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }
    encendido() {
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }

    volumen() {
        console.log(`El volumen se ha modificado`);
    }

    info() {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
    }

    set peso(value) {
        this.kgs = value.trim();
    }

    get peso() {
        return this.kgs;
    }
}

// const tvSala = new Pantalla();
// const tvHabitacion = new Pantalla();

const tvSala = new Pantalla('Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('Origin', 'Artemis', 80);

// function Pantalla(marca, modelo, pulgadas) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.pulgadas = pulgadas;
// }


// Pantalla.prototype.encendido = function () {
//     console.log(`La pantalla ${this.marca} se ha encendido`);
// };


// Pantalla.prototype.volumen = function () {
//     console.log(`El volumen se ha modificado`);
// };

// Pantalla.prototype.info = function () {
//     console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
// }

// const tvSala = new Pantalla('Master', 'Oasis', 55);
// const tvHabitacion = new Pantalla('Origin', 'Artemis', 80);*/

//********************************
//*** Herencia de  metódos y propiedades
/*
class Producto {
    constructor(numSerie) {
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }

    static get infoTienda() {
    //get infoTienda() {
        console.log(`Productos de la tienda Patito Inc`);
    }

    set garantia(value) {
        this.tiempoGarantia -= value;
    }

    get garantia() {
        return this.tiempoGarantia;
    }
}

class Pantalla extends Producto  {
    constructor(numSerie, marca, modelo, pulgadas) {
        super(numSerie)
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido() {
        this.garantia = 1;
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }

    volumen() {
        console.log(`El volumen se ha modificado`);
    }

    info() {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
    }

    set peso(value) {
        this.kgs = value.trim();
    }

    get peso() {
        return this.kgs;
    }
}

const tvSala = new Pantalla('13579','Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('24680','Origin', 'Artemis', 80);*/


//********************************
//*** Manejo de errores
/*
try {
    // var array = new Array(10000000000);
    // var x = y;
    decodeURIComponent("http://%ominio.com");
} catch (error) {
    console.log(error.message)
    console.log(error.name)
}*/

//********************************
//*** Errores personalizados
/*
var valor1 = 10;
var valor2 = 20;

try {
    if (valor1 > valor2) {
        console.log(`Mensaje de validación: ${valor1} si es mayor que ${valor2}`);
    } else {
        throw new Error(`${valor1} no es mayor que ${valor2} :(`)
    }

} catch (error) {
    console.log(error);
}*/

//********************************
//***  Depurando tu código
/*
class Producto {
    constructor(numSerie) {
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }

    static get infoTienda() {
        console.log(`Productos de la tienda Patito Inc`);
    }

    set garantia(value) {
        this.tiempoGarantia -= value;
    }
    get garantia() {
        return this.tiempoGarantia;
    }
}

class Pantalla extends Producto {
    constructor(numSerie, marca, modelo, pulgadas) {
        super(numSerie)
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido() {
        this.garantia = 1;
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }

    volumen() {
        console.log(`El volumen se ha modificado`);
    }

    info() {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
    }

    set peso(value) {
        this.kgs = value.trim();
    }

    get peso() {
        return this.kgs;
    }
}

const tvSala = new Pantalla('135679', 'Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('24680', 'Origin', 'Artemis', 80);
*/

//********************************
//***  Uso de debugger

var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var contBanderas = document.getElementById('banderas');

boton.addEventListener('click', function () {
    getPosts()
        .then(data => data.json())
        .then(posts => {
            mostrarDatos(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then(countries => {
            mostrarBanderas(countries);
        });
});

function getPosts() {
    return fetch('http://jsonplaceholder.typicode.com/posts');
}

function getCountries() {
    return fetch('https://restcountries.eu/rest/v2/all');
}

function mostrarBanderas(countries) {
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    })
}

function mostrarDatos(posts) {
    contBanderas.innerHTML = '';
    posts.map((post, i) => {
        
        debugger;
        
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}