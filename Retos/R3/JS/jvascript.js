function Propina(){
    let numero = parseFloat(document.getElementById('boleta').value);
    let porcentaje = parseFloat(document.getElementById('porcentaje').value);
    let propina = numero*(porcentaje/100);
    document.getElementById('resultado').innerHTML = Math.trunc(propina);
    document.getElementById('total').innerHTML = Math.trunc(numero+propina);
    
}