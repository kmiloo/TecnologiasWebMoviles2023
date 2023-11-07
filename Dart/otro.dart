void main(){

  //longitud de palabra
  String mensaje = "asdasd";
  int longitud = mensaje.length;
  print("la longitud es: $longitud");

  //buscar palabra
  String palabra = "asdsad";
  String palabarbuscada = "Dart";
  bool buscar = palabra.contains(palabarbuscada);
  print("la palabra $palabra contiene la palabra buscada $palabarbuscada: $buscar");

  //operadores
  int a = 20;
  int b = 4;
  int c = 5;
  int d = 20;

  double e = 20.55;
  double f = 2.45;

  print("la resta entre  c-d es : ${c -d}\n multiplic${e*f}\n division${a/d}\n division entera${e~/f}\n modulo${b%e}");


  //condicional
  int edad = 25;

  if(edad >=18){
    print("eres mayor de edad");
  }else{
    print("es menor de edad");
  }
  //else if
  //y es &&    o es ||


  //comprobacion de datos
  var valor1 = 5 is String;
  print("$valor1");//resultado false porque no es un string
  //.....................................
  var valor = 5 is! String;
  print(valor); //resutado verdadero















}