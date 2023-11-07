//para ejecutar codigo dart nombrearchivo.dart

void main(){
  print("programa");
 // bool fichamedica = true;
  int edad = 25;
  double estatura = 1.70;
 // num inversion = 10000;//es algo como double int
  String nombre = "Camilo";
  List <String> citas = ["19/01/2002","27/05/2021"];
  List <int> numeros = [1,2,3];
  List <dynamic> otros = ["Hola",true,100];

  //el valor de final no se puede modificar
  final rut = 11111111-1 ;

  //con var no se puede cambiar el valor
  //var nombre2 = "camilo2";
  //nombre2 = "asd";

  //con dynamic se puede cambiar el valor
  dynamic nacionalidad = "chileno";
  nacionalidad = 0;
  
  print("Nombre Paciente:  $nombre");
  print("Nombre Paciente:  $edad");
  print("Nombre Paciente:  $estatura");
  print("Nombre Paciente:  $citas");
  print("Nombre Paciente:  $numeros");
  print("Nombre Paciente:  $otros");
  print("Nombre Paciente:  $rut");
  print("Nombre Paciente:  $nacionalidad");


 /*comentario */
 //comentario

  //
  final double PI = 3.1415;
  // const double e = 2.71;

  // String cita = '''triple comilla''';

  var lista = [1,2,3,4,5,6];

  //saber el tipo de dato
  print(lista.runtimeType);
  //agregar un dato a la lista
  lista.add(8);
  //remueve en la poscicion
  lista.removeAt(7);
  //lista.removeLast(); remueve ultimo


  //con final se puede agregar un numero a la lista con const no
  //const listanumeros = [1,2,3];
  final listanumeros2= [1,2,3];

  listanumeros2.add(4);

  //no puede ser const
  var date = new DateTime.now();
  print("fehca de hoy es: $date");


  print("con decimales:  $citas" +PI.toStringAsFixed(2));

  print("\u1f600]");


}