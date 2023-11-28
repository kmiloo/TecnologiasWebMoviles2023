void main(){

  var op1 = operacion(5,5,suma);
  var op2 = operacion(30, 25, resta);

  print(op1);
  print(op2);

}

int operacion (int a, int b, Function func){ //=> func(a-b);
  return func(a,b);
}
int suma(int a, int b){//=> a+b    funciones abreviadas
  return a+b;
}
int resta(int a, int b)=> a-b;