import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import Classification from './Classification'; // Importa o componente Classification
import IdealWeight from './IdealWeight'; // Importa o componente IdealWeight 
import Result from './Result'; // Importa o componente Result 

export default function FormIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura);
    const pesoemKg = parseFloat();

    if (!alturaMetros || !pesoemKg) {
      alert("Insira valores  para peso e altura.");
      return;
    }

    const imcCalculado = (pesoemKg / (alturaMetros * alturaMetros)).toFixed(2);
    setIMC(imcCalculado);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {imc && (
        <>
          <Text style={styles.result}>Seu IMC: {imc}</Text>
          {/* Adiciona o componente Classification para exibir a classificação do IMC */}
          <Classification imc={parseFloat(imc)} />
          {/* Adiciona o componente IdealWeight para exibir o peso ideal */}
          <IdealWeight altura={parseFloat(altura)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 10,
  },
  input: {
    altura: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});