function Calcular(){
    let peso=0,altura=0,imc=0;
    peso = parseFloat(document.getElementById('peso').value);
    altura = parseFloat(document.getElementById('altura').value);
    imc = peso/(altura**2);
    factor = parseFloat(document.getElementById('actividad').value);

    //Nombre
    document.getElementById('nomb').innerHTML = "Resutado para "+document.getElementById('nombre').value;

    //IMC
    document.getElementById('imc').innerHTML = imc;
   
    //Clasificacion
    if (imc < 18.5) {
        document.getElementById('clasif').innerHTML = "Bajo";
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('clasif').innerHTML = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById('clasif').innerHTML = "Sobre Peso";
    } else {
        document.getElementById('clasif').innerHTML = "Obeso";
    }
    
    //Gastro energetico
    document.getElementById('gasto').innerHTML = factor*peso+ "Kcal";

    //Estrado nutricional
    if( 29.9<imc>25 ){
        document.getElementById('estado').innerHTML = "NO necesita atencion especializada";
    }else{
        document.getElementById('estado').innerHTML = "Necesita atencion especializada";
    }
}