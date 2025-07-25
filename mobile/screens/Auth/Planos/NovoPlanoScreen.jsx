import React, { useState } from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../../services/api';
import { styles } from './NovoPlanoScreen.styles'

export default function NovoPlanoScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [duracao, setDuracao] = useState('');
  const [calorias, setCalorias] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [proteinas, setProteinas] = useState('');
  const [carboidratos, setCarboidratos] = useState('');
  const [gorduras, setGorduras] = useState('');
  const [restricoes, setRestricoes] = useState('');

  const handleSalvar = async () => {
  if (!nome || !duracao || !calorias) {
    return Alert.alert('Erro', 'Preencha nome, duração e calorias!');
  }

  try {
    await api.post('planos-alimentar', {
      nome,
      descricao,
      duracao: parseInt(duracao),
      calorias: parseInt(calorias),
      objetivo,
      proteinas_percent: parseInt(proteinas) || 0,
      carboidratos_percent: parseInt(carboidratos) || 0,
      gorduras_percent: parseInt(gorduras) || 0,
      restricoes
    });

    // Redireciona diretamente para a tela de planos após salvar
    navigation.navigate('PlanosAlimentar'); 
  } catch (error) {
    console.error(error);
    Alert.alert('Erro', 'Falha ao salvar plano.');
  }
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Novo Plano Alimentar</Text>

      <TextInput
        placeholder="Nome do plano"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Descrição"
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        placeholder="Duração (dias)"
        style={styles.input}
        value={duracao}
        onChangeText={setDuracao}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Calorias diárias"
        style={styles.input}
        value={calorias}
        onChangeText={setCalorias}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Objetivo"
        style={styles.input}
        value={objetivo}
        onChangeText={setObjetivo}
      />

      <TextInput
        placeholder="% Proteínas"
        style={styles.input}
        value={proteinas}
        onChangeText={setProteinas}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="% Carboidratos"
        style={styles.input}
        value={carboidratos}
        onChangeText={setCarboidratos}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="% Gorduras"
        style={styles.input}
        value={gorduras}
        onChangeText={setGorduras}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Restrições / Observações"
        style={styles.input}
        value={restricoes}
        onChangeText={setRestricoes}
      />

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar Plano</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

