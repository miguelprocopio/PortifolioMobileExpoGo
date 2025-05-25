import React from 'react';
import { View, StyleSheet } from 'react-native';
import { cores } from '../styles/cores';

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.card,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 16,
    borderWidth: 2,
    borderColor: '#00bfff',
  },

});