import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../Components/Card';
import { cores } from '../styles/cores';
import { Image } from 'react-native';


export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.titulo}>Bem-vindo ao meu portfólio!</Text>
        <Image
          source={require('../../assets/fotoPerfil.jpg')}
          style={styles.foto}
          resizeMode="cover"
        />
        <Text style={styles.subtitulo}>Explore meus projetos e habilidades</Text>
      </Card>



      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre')}>
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Projetos')}>
        <Text style={styles.buttonText}>Projetos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ExperienciaAcademica')}>
        <Text style={styles.buttonText}>Experiência Acadêmica</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ExperienciaProfissional')}>
        <Text style={styles.buttonText}>Experiência Profissional</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Jogo')}>
        <Text style={styles.buttonText}>Jogo Bulls and Cows</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    color: cores.texto,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    color: cores.secundario,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: cores.destaque,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 12,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  foto: {
    width: 100,          
    height: 100,        
    borderRadius: 50,    
    marginVertical: 16,
    borderWidth: 2,
    borderColor: '#00bfff',
    alignSelf: 'center',
},

});
