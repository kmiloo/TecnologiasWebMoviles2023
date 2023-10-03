do{
    let nota1 = prompt('Ingrese nota 1:',0);
    var nota11 = parseFloat(nota1);
}while(nota11 <1 || nota11 > 7);
do{
    let nota2 = prompt('Ingrese nota 2:',0);
    var nota22 = parseFloat(nota2);
}while(nota22<1||nota22>7);

do{
    let nota3 = prompt('Ingrese nota 3:',0);
    var nota33 = parseFloat(nota3);
}while(nota33<1||nota33>7);


let promedio = nota11*.4 +nota22*.3 +nota33*.3;

if(promedio < 3.95){
    alert("ah reprobado la asignatura");
} else if(3.95<promedio && promedio<4.94){
    alert("debe dar examen");
}else{
    alert("se exime de la asignatura");
}