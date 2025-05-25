import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Card from "../Components/Card";
import { cores } from "../styles/cores";

export default function ExperienciaAcademica() {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Text style={styles.titulo}>Experiência Acadêmica</Text>
        <Text style={styles.texto}>
          Atualmente, sou estudante de Tecnologia e estou cursando Ciência da
          Computação na Unicap. Tenho aprendido sobre:
          {"\n"}- Redes de Computadores
          {"\n"}- Testes e Qualidade de Software
          {"\n"}- Ciência das Redes
          {"\n"}- Programação Web e Mobile
          {"\n"}- Análise de Algoritmos
          {"\n"}- Inteligência Artificial
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
    fontWeight: "bold",
    color: cores.destaque,
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    color: cores.texto,
    lineHeight: 24,
  },
});
