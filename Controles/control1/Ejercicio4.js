function iva(cantidad, porcentaje){
    let total = 0;
    if(porcentaje == null || porcentaje == 0){
        total = cantidad*.19;
    }else{
        total = cantidad*(porcentaje/100);
    }
    return total;
}

let cant = prompt("Ingresar cantidad",0);
let porc = prompt("Ingresar porcentaje",0);
do{
    if(cant<0){
        cant = prompt("Ingresar cantidad",0);
    }else if(porc<0){
        porc = prompt("Ingresar porcentaje",0);
    }   
}while(cant<0 ||porc<0);

let total = iva(cant,porc);
alert(total);