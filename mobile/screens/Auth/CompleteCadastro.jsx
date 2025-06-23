import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function CompleteCadastro() {
  const navigation = useNavigation();

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [foto, setFoto] = useState(null); // Para upload da foto, pode usar expo-image-picker
  const [questionario, setQuestionario] = useState({
    // Exemplo de perguntas, adapte conforme necessário
    atividadeFisica: '',
    alergias: '',
    objetivo: '',
  });

  const handleSalvar = async () => {
    if (!peso || !altura || !idade) {
      Alert.alert('Erro', 'Por favor, preencha os campos obrigatórios');
      return;
    }
    // Aqui você pode salvar no backend ou localStorage o cadastro completo do usuário
    // Por simplicidade, vamos marcar o cadastro como completo no AsyncStorage
    await AsyncStorage.setItem('cadastroCompleto', 'true');
    // Opcional: salvar peso, altura, idade, foto e questionário no AsyncStorage ou backend

    Alert.alert('Sucesso', 'Cadastro completo!');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  // Aqui você pode implementar a função para escolher foto usando expo-image-picker

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Complete seu Cadastro</Text>

        <TextInput
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
          style={styles.input}
        />
        <TextInput
          placeholder="Altura (cm)"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
          style={styles.input}
        />
        <TextInput
          placeholder="Idade"
          keyboardType="numeric"
          value={idade}
          onChangeText={setIdade}
          style={styles.input}
        />

        {/* Aqui o botão para escolher foto - implementa depois com expo-image-picker */}
        <TouchableOpacity style={styles.btnFoto} onPress={() => Alert.alert('Funcionalidade', 'Implementar escolha de foto')}>
          <Text style={styles.btnText}>Escolher Foto</Text>
        </TouchableOpacity>
        {foto && <Image source={{ uri: foto }} style={styles.fotoPreview} />}

        {/* Questionário simplificado */}
        <TextInput
          placeholder="Atividade física"
          value={questionario.atividadeFisica}
          onChangeText={text => setQuestionario({...questionario, atividadeFisica: text})}
          style={styles.input}
        />
        <TextInput
          placeholder="Alergias alimentares"
          value={questionario.alergias}
          onChangeText={text => setQuestionario({...questionario, alergias: text})}
          style={styles.input}
        />
        <TextInput
          placeholder="Objetivo (ex: perder peso, ganhar massa)"
          value={questionario.objetivo}
          onChangeText={text => setQuestionario({...questionario, objetivo: text})}
          style={styles.input}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSalvar}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { padding: 20, paddingBottom: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  btnFoto: {
    backgroundColor: '#2E7D32',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fotoPreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#2E7D32',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
