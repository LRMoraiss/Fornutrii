import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";  // Importa Ionicons
import api from "../../services/api";
import { colors, fonts } from "../../constants/theme";

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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginBottom: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.bold,
    marginTop: 12,
    color: colors.primaryDark,
  },
  value: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.textDark,
  },
  loading: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 18,
    color: colors.textLight,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  backButtonText: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.success,
    marginLeft: 8,
  },
});
