import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
   const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    const appTitle = 'Form Styling Demo';
    return MaterialApp(
      title: appTitle,
      home: Scaffold(
        appBar: AppBar(
          title: const Text(appTitle),
        ),
        body: const MyCustomForm(),
      ),
    );
  }
}

class MyCustomForm extends StatelessWidget {
  const MyCustomForm({super.key});

  @override
  Widget build(BuildContext context) {
    
   return MaterialApp(
      home: Scaffold(
        body: Center(
          child: SizedBox(
            width: 200, //largo

            child: ElevatedButton(
              onPressed: () {//al presionarse
                print("¡Hola Mundo!");
              },
              child: const Text('Presionar para Saludar'), //texto del boton
            ),
          ),
        ),
      ),
    );
  }
}


