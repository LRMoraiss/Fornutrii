import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import api from "../../../services/api";
import { colors } from '../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './NotificationsScreen.styles';


export default function NotificationsScreen() {
  const [notificacoes, setNotificacoes] = useState([]);
  const navigation = useNavigation(); // hook ativado aqui

  const carregarNotificacoes = async () => {
    try {
      const resposta = await api.get('Notifications');
      setNotificacoes(resposta.data);
    } catch (erro) {
      console.error('Erro ao carregar notificações:', erro);
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregarNotificacoes();
    }, [])
  );

  // Função chamada ao tocar em uma notificação
  const handlePress = (notificacao) => {
    navigation.navigate('DetalhesNotificacao', { notificacao });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.card}>
      <Text style={styles.title}>{item.titulo}</Text>
      <Text style={styles.text}>{item.mensagem}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notificacoes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma notificação</Text>
        }
      />
      
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="arrow-back" size={24} color={colors.primary} />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}