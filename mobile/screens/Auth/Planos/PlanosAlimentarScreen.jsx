import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import api from "../../../services/api";
import { colors } from "../../../constants/theme";
import { styles } from './PlanosAlimentarScreen.styles'

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

