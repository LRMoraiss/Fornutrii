import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../constants/theme';
import { styles } from './AdminScreen.styles';

export default function AdminScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel de Administração</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('gestao-pacientes')}
      >
        <Ionicons name="person" size={24} color={colors.white} />
        <Text style={styles.buttonText}>Gerenciar Pacientes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('gestao-planos')}
      >
        <Ionicons name="file-tray" size={24} color={colors.white} />
        <Text style={styles.buttonText}>Gerenciar Planos Alimentares</Text>
      </TouchableOpacity>
    </View>
  );
}
