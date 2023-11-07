let nombre = prompt("Ingrese su nombre de usuario: ",0);

do{
    if(nombre.length < 6){
        nombre = prompt("Error el nombre no cumple con los requisitos indicados: ",0);
    }
}while(nombre.length < 6);

