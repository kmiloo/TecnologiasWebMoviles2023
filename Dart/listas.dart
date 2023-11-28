void main(){

  List<int> enteros =[];

  for(int i=0; i<=10; i++){
    enteros.add(i);
  }

  print("\nLista newList: $enteros");


  List<int> listagenerada = List.generate(10, (i) => i+1);
  print("lista generada: $listagenerada");

  
  
}