import { View, TextInput,  Button,  StyleSheet } from 'react-native'; 
import Result from './Result'; 

const FormIMC = () => { 
    const [peso, setPeso ] = useState('');
    const [altura,setAltura ] = useState('');
    const [imc, setImc ] = useState(null); 

    const calcularIMC = () =>{ 
        if (peso && altura){ 
            const alturaMetros = parseFloat(altura) / 100; 
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2); 
            setImc(imcCalculado);
        }

    };

    return (
        <View style={styles.formContainer}> 
            <TextInput 
            style={styles.input}
            placeholder= "Peso (kg)" 
            keyboardType="numeric" 
            valeu={peso}
            onChangeText={setPeso}
        /> 
            <TextInput 
            style={styles.input}
            placeholder= "Altura (cm0" 
            keyboardType="numeric" 
            valeu={Altura}
            onChangeText={setAltura} 
            /> 
            <Button titl
        </View>
    )
}