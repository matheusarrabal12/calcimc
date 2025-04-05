import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Componente que recebe o IMC como prop e exibe a classificação correspondente
export default function Classification({ imc }) {
  const getClassification = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc <= 24.9) return "Peso normal";
    if (imc >= 25 && imc <= 29.9) return "Sobrepeso";
    if (imc >= 30 && imc <= 34.9) return "Obesidade grau 1";
    if (imc >= 35 && imc <= 39.9) return "Obesidade grau 2";
    if (imc >= 40) return "Obesidade grau 3 (obesidade mórbida)";
    return "IMC inválido";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Classificação: {getClassification(imc)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});