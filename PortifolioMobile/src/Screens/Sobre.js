import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Card from '../Components/Card';
import { cores } from '../styles/cores';

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Text style={styles.titulo}>Tecnologias e Módulos Utilizados</Text>
        <Text style={styles.texto}>
          Este aplicativo foi desenvolvido com:
          {'\n'}
          - React Native
          {'\n'}- Expo
          {'\n'}- React Navigation (native-stack)
          {'\n'}- Expo Go para testes
          {'\n'}- Visual Studio Code
          {'\n'}- Estilização com StyleSheet
          {'\n'}- Navegação entre telas com Stack Navigator
          {'\n'}- Componentes reutilizáveis para manter o código limpo
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: cores.destaque,
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    color: cores.texto,
    lineHeight: 24,
  },
});