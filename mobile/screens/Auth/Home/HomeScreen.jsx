import React, { useEffect, useState } from "react";
import { styles } from "./HomeScreen.styles";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { PieChart, LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularProgress from "react-native-circular-progress-indicator";

const screenWidth = Dimensions.get("window").width;
const baseURL = "http://10.0.30.106:3000/upload/";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [hydration, setHydration] = useState(4);
  const [calories, setCalories] = useState(1360);
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState(null);
  const [progress, setProgress] = useState(65);

  useEffect(() => {
    carregarDadosUsuario();
    loadData();
  }, []);

  const carregarDadosUsuario = async () => {
    const nome = await AsyncStorage.getItem("userName");
    const foto = await AsyncStorage.getItem("userPhoto");
    if (nome) setUserName(nome);
    if (foto) setUserPhoto(`${baseURL}${foto}`);
  };

  const loadData = async () => {
    const storedCalories = await AsyncStorage.getItem("dailyCalories");
    const storedWater = await AsyncStorage.getItem("hydration");
    if (storedCalories) setCalories(Number(storedCalories));
    if (storedWater) setHydration(Number(storedWater));
  };

  const pieData = [
    {
      name: "Proteínas",
      population: 35,
      color: "#FF6384",
      legendFontColor: "#333",
      legendFontSize: 14,
    },
    {
      name: "Carboidratos",
      population: 45,
      color: "#36A2EB",
      legendFontColor: "#333",
      legendFontSize: 14,
    },
    {
      name: "Gorduras",
      population: 20,
      color: "#FFCE56",
      legendFontColor: "#333",
      legendFontSize: 14,
    },
  ];

  const caloricData = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    datasets: [
      { data: [1800, 2000, 1900, 2100, 1950, 1850, 2000], strokeWidth: 2 },
    ],
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* TOPO */}
        <View style={styles.header}>
          {/* Avatar com Progresso Circular */}
          <View style={styles.avatarContainer}>
            <CircularProgress
              radius={35}
              value={progress}
              inActiveStrokeColor="#E0E0E0"
              activeStrokeColor="#2E7D32"
              inActiveStrokeWidth={5}
              activeStrokeWidth={5}
            >
              <View style={styles.avatarWrapper}>
                {userPhoto ? (
                  <Image
                    source={{ uri: userPhoto }}
                    style={styles.avatar}
                    onError={() => setUserPhoto(null)}
                  />
                ) : (
                  <View style={styles.avatarFallback}>
                    <Ionicons name="person" size={30} color="#fff" />
                  </View>
                )}
              </View>
            </CircularProgress>

            <View style={styles.userInfo}>
              <Text style={styles.greetingText}>
                Bom dia, {userName || "Usuário"}!
              </Text>
              <Text style={styles.subGreeting}>
                Você está {calories < 1600 ? "abaixo" : "dentro"} da meta
              </Text>
            </View>
          </View>

          {/* Notificações */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Ionicons name="notifications-outline" size={26} color="#333" />
          </TouchableOpacity>
        </View>

        {/* CARDS DE ATIVIDADE */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cardsContainer}
        >
          <View style={[styles.activityCard, { backgroundColor: "#E3F2FD" }]}>
            <Ionicons name="water-outline" size={28} color="#1976D2" />
            <Text style={styles.activityCardTitle}>Hidratação</Text>
            <Text style={styles.activityCardValue}>{hydration}/8 copos</Text>
            <Text style={styles.activityCardPercent}>
              {Math.round((hydration / 8) * 100)}%
            </Text>
          </View>

          <View style={[styles.activityCard, { backgroundColor: "#F1F8E9" }]}>
            <Ionicons name="flame-outline" size={28} color="#2E7D32" />
            <Text style={styles.activityCardTitle}>Calorias</Text>
            <Text style={styles.activityCardValue}>{calories}/2000 kcal</Text>
            <Text style={styles.activityCardPercent}>
              {Math.round((calories / 2000) * 100)}%
            </Text>
          </View>

          <View style={[styles.activityCard, { backgroundColor: "#FCE4EC" }]}>
            <Ionicons name="walk-outline" size={28} color="#C2185B" />
            <Text style={styles.activityCardTitle}>Atividade</Text>
            <Text style={styles.activityCardValue}>850 kcal</Text>
            <Text style={styles.activityCardPercent}>85%</Text>
          </View>
        </ScrollView>

        {/* META CALÓRICA */}
        <View style={styles.goalItem}>
          <Text style={styles.goalTitle}>Meta Calórica</Text>
          <ProgressBar
            progress={calories / 2000}
            color="#36A2EB"
            style={styles.progressBar}
          />
          <Text style={styles.kcalText}>{calories} kcal de 2.000 kcal</Text>
        </View>

        {/* GRÁFICOS */}
        <Text style={styles.sectionTitle}>Distribuição de Macronutrientes</Text>
        <PieChart
          data={pieData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="10"
          absolute
        />

        <Text style={styles.sectionTitle}>Histórico Calórico Semanal</Text>
        <LineChart
          data={caloricData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.graphStyle}
        />

        {/* META DE HIDRATAÇÃO */}
        <View style={styles.goalItem}>
          <Text style={styles.goalTitle}>Meta de Hidratação</Text>
          <View style={styles.waterRow}>
            {[...Array(8)].map((_, i) => (
              <TouchableOpacity key={i} onPress={() => setHydration(i + 1)}>
                <View
                  style={[
                    styles.waterCup,
                    { opacity: i < hydration ? 1 : 0.3 },
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* BOTÕES */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.btnSecondary}
            onPress={() => navigation.navigate("PlanosAlimentar")}
          >
            <Text style={styles.btnSecondaryText}>Planos Alimentares</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("RegistroRefeicoes")}
          >
            <Text style={styles.btnText}>Registrar Refeição</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};
