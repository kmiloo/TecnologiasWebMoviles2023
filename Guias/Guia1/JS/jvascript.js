/////////////////////////////////////////////////////////////////////////////////////////////
//1) Crear un algoritmo que solicite al usuario un número entero positivo. Luego, utilizar un
//bucle para calcular la suma de todos los números pares desde 1 hasta el número ingresado
//por el usuario. Mostrar el resultado en el navegador.

// let numero;

// do {
//     numero = prompt('Ingrese un número entero positivo:',0);
//     numero = parseFloat(numero);

//     if (isNaN(numero) || numero % 1 !== 0 || numero < 1) {
//         alert('Por favor, ingrese un número entero positivo válido.');
//     }
// }while (isNaN(numero) || numero % 1 !== 0 || numero < 1)

// let suma = 0;
// while (numero > 1) {
//     if (numero % 2 === 0) {
//         suma += numero;
//     }
//     numero--;
// }
// alert(`La suma de los numeros pares desde el 1 hasta el numero ingresado es: ${suma}`);

/////////////////////////////////////////////////////////////////////////////////////////////
//2)Desarrollar un contador de palabras, solicitando al usuario que ingrese una oración, para
//luego contar cuántas palabras hay en la oración. Mostrar la palabra ingresada y el número
//de palabras en el navegador.

// let oracion, oracion1, oracion2, palabras, num_pal;
// //expresiones regulares
// let espacios = /^\s+|\s+$/g;
// let espacios1 = /[ ]+/g;

// oracion = prompt('Ingrese una oracion:',0);//oracion
// oracion1 = oracion.replace(espacios,"");//se quitan espacios finales e iniciales
// oracion2 = oracion1.replace(espacios1," ");//se quitan espacios dobles

// palabras = oracion2.split(" ");//se separan las palabras
// num_pal = palabras.length;//se cuentan las palabras

//alert(`La oracion ingresada es: ${oracion} y el numero de palabras es: ${num_pal}`);

/////////////////////////////////////////////////////////////////////////////////////////////
//3) Crear un programa que pida al usuario una contraseña. Luego, verificar si la contraseña
//ingresada cumple con ciertos criterios, como tener al menos 8 caracteres, incluir al menos
//una letra mayúscula y un número. Muestra un mensaje en la consola indicando si la
//contraseña es válida o no

let contraseña;

do{
    contraseña = prompt('Ingrese una constraseña:',0);

    if (contraseña.length<8 || !/[A-Z]/.test(contraseña) || !/[0-9]/.test(contraseña)) {
        alert('Su constraseña debera tener:\n-Almenos 8 caracteres\n-Almenos 1 mayuscula\n-Almenos 1 numero.');
    }
}while(contraseña.length<8 || !/[A-Z]/.test(contraseña) || !/[0-9]/.test(contraseña));


