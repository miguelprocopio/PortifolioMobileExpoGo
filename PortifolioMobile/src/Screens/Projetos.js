import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Card from '../Components/Card';
import { cores } from '../styles/cores';

const projetos = [
  {
    nome: 'Projeto 1',
    descricao: 'Minha Rotina e Cadastro de Usuário',
    url: 'https://github.com/miguelprocopio/Exercicios-PWM-2025.git',
  },
  {
    nome: 'Projeto 2',
    descricao: 'Projeto de Banco de Dados',
    url: 'https://github.com/pedromota001/Projeto-Banco-de-Dados.git',
  },
  {
    nome: 'Projeto 3',
    descricao: 'Jogo Wake Up Mr. West',
    url: 'https://github.com/c3-disciplina-ed2/projeto-jogo-wake-up-mr-west.git',
  },
  {
    nome: 'Projeto 4',
    descricao: 'Meu Portifólio Web',
    url: 'https://github.com/miguelprocopio/Portifolio',
  },
  {
    nome: 'Projeto 5',
    descricao: 'CineAPP',
    url: 'https://github.com/pedromota001/omdbAPI-frontend-pwm',
  },
];

export default function Projetos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Projetos</Text>
      {projetos.map((projeto, index) => (
        <Card key={index}>
          <TouchableOpacity onPress={() => Linking.openURL(projeto.url)}>
            <Text style={styles.nome}>{projeto.nome}</Text>
            <Text style={styles.descricao}>{projeto.descricao}</Text>
          </TouchableOpacity>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: cores.destaque,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  nome: {
    fontSize: 18,
    color: cores.texto,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 14,
    color: cores.secundario,
    marginTop: 4,
  },
});
