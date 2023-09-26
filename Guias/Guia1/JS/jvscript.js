///////////////////////////////////////////////////
//1) Crear un algoritmo que solicite al usuario un número entero positivo. Luego, utilizar un
//bucle para calcular la suma de todos los números pares desde 1 hasta el número ingresado
//por el usuario. Mostrar el resultado en el navegador.

let numero;

while (isNaN(numero) || numero % 1 !== 0 || numero < 0){
    numero = prompt('Ingrese un número entero positivo:', '0');
    numero = parseFloat(numero);

    if (isNaN(numero) || numero % 1 !== 0 || numero < 0) {
        alert('Por favor, ingrese un número entero positivo válido.');
    }
}

let suma = 0;
while (numero > 1) {
    if (numero % 2 === 0) {
        suma += numero;
    }
    numero--;
}
alert(`La suma de los numeros pares desde el 1 hasta el numero ingresado es: ${suma}`);


