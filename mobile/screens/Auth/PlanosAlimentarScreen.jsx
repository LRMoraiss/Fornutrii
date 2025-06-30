import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import api from "../../services/api";
import { colors, fonts } from "../../constants/theme";

export default function PlanosAlimentarScreen() {
  const [planos, setPlanos] = useState([]);
  const navigation = useNavigation();

  const carregarPlanos = async () => {
    try {
      const resposta = await api.get("planos-alimentar");
      setPlanos(resposta.data);
    } catch (erro) {
      console.error("Erro ao carregar planos alimentares:", erro);
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregarPlanos();
    }, [])
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.info}>Duração: {item.duracao} dias</Text>
      <Text style={styles.info}>Calorias: {item.calorias}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.detailsButton]}
          onPress={() =>
            navigation.navigate("detalhes-plano", { planoId: item.id })
          }
        >
          <Text style={styles.buttonText}>Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.newButton}
        onPress={() => navigation.navigate("novo-plano")}
      >
        <Ionicons name="add-circle-outline" size={24} color={colors.white} />
        <Text style={styles.newButtonText}>Novo Plano Alimentar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="arrow-back" size={24} color={colors.primary} />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <FlatList
        data={planos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Nenhum plano alimentar cadastrado
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    backgroundColor: colors.background,
    flex: 1,
  },
  newButton: {
    width: '100%',
    maxWidth: 300,          
    alignSelf: 'center',
    backgroundColor: '#2E7D32',
    padding: 12,            
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  newButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.bold,
    marginLeft: 10,
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    marginTop: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  nome: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.textDark,
    marginBottom: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    width: '100%',
    maxWidth: 300,          
    alignSelf: 'center',
    backgroundColor: '#2E7D32',
    padding: 12,            
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  detailsButton: {
    backgroundColor: colors.primaryLight,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    fontFamily: fonts.regular,
    color: colors.textLight,
    marginTop: 20,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backButtonText: {
    marginLeft: 8,
    fontSize: 18,
    color: colors.primary,
    fontFamily: fonts.bold,
  },
});
