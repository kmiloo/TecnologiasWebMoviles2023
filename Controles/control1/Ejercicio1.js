let puntos = 0;


puntos = prompt("Ingrese sus puntos: ",0);

do{
    if(puntos<0.0 || puntos==0.1 || puntos==0.3||puntos==0.5||puntos==0.7||puntos>0.8){
        puntos = prompt("Error ingrese puntos validos: ",0);
    }

}while(puntos<0.0 || puntos==0.1 || puntos==0.3||puntos==0.5||puntos==0.7||puntos>0.8);

puntos*=350000;

if(puntos == 0.0){
    alert("Rendimiento: Insuficiente Dinero: ",puntos);
}else if(puntos = 0.2){

    alert("Rendimiento: Insuficiente Dinero: ",puntos);
}else if(puntos == 0.4){

    alert("Rendimiento: Aceptable Dinero: ",puntos);
}else if(puntos == 0.6){

    alert("Rendimiento: Meritorio Dinero: ",puntos);
}else if(puntos == 0.8){
    alert("Rendimiento: Excelente Dinero: ",puntos);
}else{
    alert("Error");
}