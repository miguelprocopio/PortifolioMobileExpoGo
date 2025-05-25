import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Card from '../Components/Card';
import { cores } from '../styles/cores';

export default function ExperienciaProfissional() {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Text style={styles.titulo}>Experiência Profissional</Text>
        <Text style={styles.texto}>
          Ainda não tive oportunidade de atuar profissionalmente na área de tecnologia,
          mas estou me preparando constantemente para isso através de estudos, projetos práticos
          e participação em trabalhos acadêmicos. Meu objetivo é conseguir meu primeiro emprego na
          área em breve e contribuir com soluções reais para desafios do mundo digital.
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