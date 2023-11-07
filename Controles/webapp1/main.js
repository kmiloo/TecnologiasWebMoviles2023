

function generar(){
    let longitud = document.getElementById("longitud").value;
    let mayus = document.getElementById("mayus").checked;
    let minus = document.getElementById("minus").checked;
    let num = document.getElementById("num").checked;
    let esp = document.getElementById("esp").checked;


    let contra = new Array(longitud);
    let min = "abcdefghijkqlmnñopqrstuvwxyz";
    let may = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let nu = "1234567890";
    let es= "!#%&/()=?¡¿'+*¨´{[}]-.,"

    
    

    
    if(mayus==true){
        for(i=0;i<longitud;i++){
            contra[i] =may.charAt(Math.floor(Math.random()*may.length));
        }
        document.getElementById('contr').innerHTML = contra;
    }else if(minus==true){
        for(i=0;i<longitud;i++){
            contra[i] =min.charAt(Math.floor(Math.random()*min.length));
        }
        document.getElementById('contr').innerHTML = contra;
    }else if(num==true){
        for(i=0;i<longitud;i++){
            contra[i] =nu.charAt(Math.floor(Math.random()*nu.length));
        }
        document.getElementById('contr').innerHTML = contra;
    }else if(esp == true){
        for(i=0;i<longitud;i++){
            contra[i] =es.charAt(Math.floor(Math.random()*es.length));
        }
        document.getElementById('contr').innerHTML = contra;
    }



    
    
    


}