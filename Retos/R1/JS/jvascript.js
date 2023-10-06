

let numero = 0;
do{
    numero = prompt('Ingresar un numero:',0);
    if(numero<0 || isNaN(numero)){
        numero = prompt('Ingresar un numero valido:',0);
    }

}while(numero<1 || isNaN(numero));

if(numero % 2 == 0){
    alert("El numero "+numero +" es par");
}else{
    alert("El numero "+numero+" es impar");
}