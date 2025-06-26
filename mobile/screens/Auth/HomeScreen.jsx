import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { PieChart, LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const navigation = useNavigation();
  const [hydration, setHydration] = useState(4);
  const [calories, setCalories] = useState(1360);
  const [userName, setUserName] = useState('');
  const [userPhoto, setUserPhoto] = useState(null);

  useEffect(() => {
    carregarDadosUsuario();
    loadData();
  }, []);

  const carregarDadosUsuario = async () => {
    const nome = await AsyncStorage.getItem('userName');
    const foto = await AsyncStorage.getItem('userPhoto');
    if (nome) setUserName(nome);
    if (foto) setUserPhoto(foto);
  };

  const loadData = async () => {
    const storedCalories = await AsyncStorage.getItem('dailyCalories');
    const storedWater = await AsyncStorage.getItem('hydration');
    if (storedCalories) setCalories(Number(storedCalories));
    if (storedWater) setHydration(Number(storedWater));
  };

  const pieData = [
    { name: 'Proteínas', population: 35, color: '#FF6384', legendFontColor: '#333', legendFontSize: 14 },
    { name: 'Carboidratos', population: 45, color: '#36A2EB', legendFontColor: '#333', legendFontSize: 14 },
    { name: 'Gorduras', population: 20, color: '#FFCE56', legendFontColor: '#333', legendFontSize: 14 },
  ];

  const caloricData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [{ data: [1800, 2000, 1900, 2100, 1950, 1850, 2000], strokeWidth: 2 }],
  };

  return (
    <ScrollView style={styles.container}>
      {/* TOPO */}
      <View style={styles.header}>
        {/* Clique no avatar para ver perfil */}
        <TouchableOpacity
          style={styles.userInfo}
          onPress={() => navigation.navigate('PerfilUsuario')}
        >
          <Image
            source={userPhoto ? { uri: userPhoto } : { uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.username}>{userName || 'Usuário'}</Text>
            <Text style={styles.location}>Fortaleza, CE</Text>
          </View>
        </TouchableOpacity>

        {/* Ícone de notificações */}
        <TouchableOpacity onPress={() => navigation.navigate('Notificacoes')}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* GRÁFICOS E METAS */}
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

      <Text style={styles.sectionTitle}>Meta de Hidratação</Text>
      <View style={styles.waterRow}>
        {[...Array(8)].map((_, i) => (
          <TouchableOpacity key={i} onPress={() => setHydration(i + 1)}>
            <View style={[styles.waterCup, { opacity: i < hydration ? 1 : 0.3 }]} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Meta Calórica</Text>
      <ProgressBar
        progress={calories / 2000}
        color="#36A2EB"
        style={styles.progressBar}
      />
      <Text style={styles.kcalText}>{calories} kcal de 2.000 kcal</Text>

      {/* BOTÕES */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('RegistroRefeicoes')}
      >
        <Text style={styles.btnText}>Registrar Refeição</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnSecondary}
        onPress={() => navigation.navigate('PlanosAlimentares')}
      >
        <Text style={styles.btnText}>Ver Planos Alimentares</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: { fontSize: 18, fontWeight: 'bold' },
  location: { fontSize: 14, color: '#777' },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  graphStyle: {
    borderRadius: 10,
  },
  waterRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  waterCup: {
    width: 25,
    height: 50,
    backgroundColor: '#36A2EB',
    borderRadius: 6,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  kcalText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#36A2EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  btnSecondary: {
    backgroundColor: '#FF9800',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
