/* eslint-disable no-undef */
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
    textAlign: 'center',
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 32,
    textAlign: 'center',
    alignSelf: 'center',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    fontSize: 16,
    width: '100%',
    maxWidth: 400,       
    alignSelf: 'center',
  },
  primaryButton: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    backgroundColor: '#2E7D32',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: '#2E7D32',
    textAlign: 'center',
    fontWeight: '500',
  },
});