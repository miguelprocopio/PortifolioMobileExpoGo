import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { cores } from '../styles/cores';
import Card from '../Components/Card';

function gerarSenhaAleatoria() {
  const digitos = new Set();
  while (digitos.size < 4) {
    digitos.add(Math.floor(Math.random() * 10));
  }
  return Array.from(digitos).join('');
}

function verificarTentativa(tentativa, senha) {
  let acertos = 0;
  let semiAcertos = 0;

  for (let i = 0; i < 4; i++) {
    if (tentativa[i] === senha[i]) {
      acertos++;
    } else if (senha.includes(tentativa[i])) {
      semiAcertos++;
    }
  }

  return { acertos, semiAcertos };
}

export default function Jogo() {
  const [senha, setSenha] = useState('');
  const [tentativa, setTentativa] = useState('');
  const [historico, setHistorico] = useState([]);
  const [jogoAtivo, setJogoAtivo] = useState(false);

  const iniciarJogo = () => {
    const novaSenha = gerarSenhaAleatoria();
    setSenha(novaSenha);
    setTentativa('');
    setHistorico([]);
    setJogoAtivo(true);
  };

  const handleTentar = () => {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4) {
      Alert.alert('Erro', 'Digite 4 dígitos diferentes.');
      return;
    }

    const resultado = verificarTentativa(tentativa, senha);
    setHistorico([{ tentativa, ...resultado }, ...historico]);
    setTentativa('');

    if (resultado.acertos === 4) {
      Alert.alert('Parabéns!', 'Você acertou a senha!');
      setJogoAtivo(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo Bulls and Cows</Text>

      {!jogoAtivo ? (
        <TouchableOpacity style={styles.button} onPress={iniciarJogo}>
          <Text style={styles.buttonText}>Iniciar Jogo</Text>
        </TouchableOpacity>
      ) : (
        <>
          <TextInput
            style={styles.input}
            maxLength={4}
            keyboardType="numeric"
            value={tentativa}
            onChangeText={(text) => setTentativa(text.replace(/\D/g, ''))}
            placeholder="Digite 4 números diferentes"
            placeholderTextColor="#888"
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={handleTentar}>
              <Text style={styles.buttonText}>Tentar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Senha atual', senha)}
            >
              <Text style={styles.buttonText}>Ver Senha</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>Tentativas:</Text>
          <FlatList
            data={historico}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item }) => (
              <Card>
                <Text style={styles.cardText}>
                  {item.tentativa} - {item.acertos} Bulls, {item.semiAcertos} Cows
                </Text>
              </Card>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: cores.destaque,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: cores.card,
    color: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    backgroundColor: cores.destaque,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 5,
    alignSelf: 'center',
    minWidth: 140,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 18,
    color: cores.secundario,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
  },
});
