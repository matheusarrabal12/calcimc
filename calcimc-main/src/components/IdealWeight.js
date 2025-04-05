import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Componente que calcula e exibe o peso ideal com base na altura
export default function IdealWeight({ height }) {
  const calculateIdealWeight = (height) => {
    const minWeight = (18.5 * (height * height)).toFixed(2);
    const maxWeight = (24.9 * (height * height)).toFixed(2);
    return { minWeight, maxWeight };
  };

  const { minWeight, maxWeight } = calculateIdealWeight(height);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Peso ideal mínimo: {minWeight} kg</Text>
      <Text style={styles.text}>Peso ideal máximo: {maxWeight} kg</Text>
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
  },
});