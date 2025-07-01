/* eslint-disable no-undef */
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ForgotPasswordScreen.styles';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleResetPassword = () => {
    // Implemente a lógica de recuperação de senha aqui
    Alert.alert('Sucesso', 'Um e-mail de recuperação foi enviado');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.subtitle}>Digite seu e-mail para receber o link de recuperação</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail cadastrado"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={handleResetPassword}
      >
        <Text style={styles.buttonText}>Enviar Link</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.linkText}>Voltar para o login</Text>
      </TouchableOpacity>
    </View>
  );
}

