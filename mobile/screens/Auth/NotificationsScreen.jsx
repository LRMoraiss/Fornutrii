import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import api from '../api/api';
import { colors, fonts } from '../styles/theme';

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
    flex: 1,
  },
  card: {
    backgroundColor: colors.white,
    padding: 15,
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.textDark,
  },
  emptyText: {
    textAlign: 'center',
    fontFamily: fonts.regular,
    color: colors.textLight,
    marginTop: 20,
  },
});
