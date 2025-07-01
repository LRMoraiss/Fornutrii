import React, { useEffect, useState } from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import api from "../../../services/api";
import { colors } from "../../../constants/theme";
import { styles } from './DetalhesPlanoScreen.styles';

export default function DetalhesPlanoScreen({ route }) {
  const { planoId } = route.params;
  const [plano, setPlano] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchPlano() {
      try {
        const response = await api.get(`planos-alimentar`);
        const planoEncontrado = response.data.find((p) => p.id === planoId);
        setPlano(planoEncontrado);
      } catch (error) {
        console.error("Erro ao carregar detalhes do plano:", error);
      }
    }

    fetchPlano();
  }, [planoId]);

  if (!plano) {
    return <Text style={styles.loading}>Carregando...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{plano.nome}</Text>
      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.value}>{plano.descricao || "Não informada"}</Text>

      <Text style={styles.label}>Duração:</Text>
      <Text style={styles.value}>{plano.duracao} dias</Text>

      <Text style={styles.label}>Calorias:</Text>
      <Text style={styles.value}>{plano.calorias}</Text>

      <Text style={styles.label}>Objetivo:</Text>
      <Text style={styles.value}>{plano.objetivo || "Não definido"}</Text>

      <Text style={styles.label}>Distribuição de Macronutrientes:</Text>
      <Text style={styles.value}>
        Proteínas: {plano.proteinas_percent}% {"\n"}
        Carboidratos: {plano.carboidratos_percent}% {"\n"}
        Gorduras: {plano.gorduras_percent}%
      </Text>

      <Text style={styles.label}>Restrições:</Text>
      <Text style={styles.value}>{plano.restricoes || "Nenhuma"}</Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color={colors.success} />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

