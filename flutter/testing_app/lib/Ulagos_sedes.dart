import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';


void main() {
  runApp(const MyApp());
}

// Función para lanzar la URL
//se debe agregar "url_launcher: ^6.0.9" en las dependencias de (pubspec.yaml) ejecutar el comando flutter pub get (PLUGINS)
//y agregar import 'package:url_launcher/url_launcher.dart';
_launchURL() async {
   final Uri url = Uri.parse('https://www.ulagos.cl');
   if (!await launchUrl(url)) {
        throw Exception('Could not launch $url');
    }
}


class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme:
            ColorScheme.fromSeed(seedColor: Color.fromARGB(255, 74, 82, 170)),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Sedes Universidad de los Lagos'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            
            // Carta
            Card(
              child: Column(
                children: [
                  //imagen
                  Image.network(
                    'https://cooperativa.cl/noticias/site/artic/20180407/imag/foto_0000001420180407132257.jpg',
                    width: double.infinity, // Ocupa todo el ancho disponible
                    height: 140,
                    fit: BoxFit.cover,// Ajusta el tamaño de la imagen según el espacio disponible
                  ),
                  Container(
                    height: 30,//espacio entre imagen y texto
                    alignment: Alignment.center, //centrando el texto
                    child: const Text("Ulagos Sede Osorno"),
                  ),
                ],
              ),
            ),

           
            Card(
              child: Column(
                children: [
                  
                  Image.network(
                    'https://www.ulagos.cl/wp-content/uploads/2018/08/Chinquihue.jpg',
                    width: double.infinity, // Ocupa todo el ancho disponible
                    height: 140,
                    fit: BoxFit.cover,
                  ),
                  Container(
                    height: 30,
                    alignment: Alignment.center,
                    child: const Text("Ulagos Sede Puerto Montt"),
                  ),
                ],
              ),
            ),
            
            
            Card(
              child: Column(
                children: [
                  Image.network(
                    'https://arquitecturapanamericana.com/wp-content/gallery/universidad-de-los-lagos-chiloe/5f76376db46d31.jpg',
                    width: double.infinity, // Ocupa todo el ancho disponible
                    height: 140,
                    fit: BoxFit.cover,
                  ),
                  Container(
                    height: 30,
                    alignment: Alignment.center,
                    child: const Text("Ulagos Sede Chiloé"),
                  ),
                ],
              ),
            ),

            

           
            // Espacio entre el texto y el botón
            const SizedBox(height: 50),
            
            // Botón
            ElevatedButton(
              onPressed: () {
                // Acciones cuando se presiona el botón
                _launchURL();//se ejecuta funcion para abrir un link
              },
              child: const Text('Más Información'),
            ),
          ],
        ),
      ),
    );
  }
}
