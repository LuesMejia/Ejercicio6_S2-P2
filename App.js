
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const imagen1 = require('./assets/client1.jpg');
const imagen2 = require('./assets/hero-template.jpg');


//import foto from './assets/adaptive-icon.png';

export default function App() {
  return (
   <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Nombre Completo: Luesbelin Julieth Mejia Garcia</Text>
      <Text style={styles.texto}>Número de cuenta: C12515194</Text>
      <Text style={styles.texto}>Carrera: Certificado en Desarrollo y Diseño Web</Text>
      
      <Text style={styles.descripcion}>
        Me apasiona el diseño web, la programación y la fotografía.
        También disfruto leer sobre ciencia y explorar nuevos lugares.
      </Text>

      <Text style={styles.experiencia}>
        El certificado me ha ayudado a aprender buenas prácticas en diseño 
        y a mejorar mis conocimientos en desarrollo web.
      </Text>

      <View style={styles.imagenes}>
        <Image source={imagen1} style={styles.img} />
        <Image source={imagen2} style={styles.img} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#88CFE0', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 16,
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
  },
  experiencia: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  imagenes: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  img: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
});