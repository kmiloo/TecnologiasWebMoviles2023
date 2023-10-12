function Calcular(){
    let peso=0,altura=0,ims=0;
    peso = parseFloat(document.getElementById('peso').value);
    altura = parseFloat(document.getElementById('altura').value);
    imc = peso/(altura**2);

    document.getElementById('imc').innerHTML = imc;

    if(imc<18.5){
        document.getElementById('clasif').innerHTML = "Bajo";
    }else if(24.9<imc &&imc>18.5){

        document.getElementById('clasif').innerHTML = "Normal";
    }else if(29.9<imc && imc>25){
        document.getElementById('clasif').innerHTML = "Sobre Peso";
    }else{
        document.getElementById('clasif').innerHTML = "Obeso";
    }

    
    
}