import React from 'react'; 
import { text, StyleSheet } from 'react-native'; 

const Result = ({ imc }) => { 
    return ( 
        <Text style ={styles.result}>Seu IMC é: {imc}</Text>
    )
}