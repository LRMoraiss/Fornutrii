import React, { useEffect, useState } from 'react';
import { styles } from './HomeScreen.styles';
import {
  View,
  Text,
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
import { SafeAreaView } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;
const baseURL = 'http://172.26.28.58:3000/upload/';

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
    console.log('Nome do usuário:', nome);
    console.log('Foto do usuário:', foto);
    if (nome) setUserName(nome);
    if (foto) setUserPhoto(`${baseURL}${foto}`);
  }

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

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        {/* TOPO */}
        <View style={styles.header}>
          {/* Avatar */}
          <TouchableOpacity
            style={styles.userInfo}
            onPress={() => navigation.navigate('PerfilUsuario')}
          >

            <Image
              source={{ uri: userPhoto }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                marginRight: 10,
                backgroundColor: '#ddd', // ajuda a ver se o espaço existe
              }}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.username}>{userName || 'Usuário'}</Text>
              <Text style={styles.location}>Fortaleza, CE</Text>
            </View>
          </TouchableOpacity>

          {/* Notificações */}
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Ionicons name="notifications-outline" size={26} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Gráficos */}
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

        {/* Metas */}
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

        {/* Botões */}
        <TouchableOpacity
          style={styles.btnSecondary}
          onPress={() => navigation.navigate('PlanosAlimentar')}
        >
          <Text style={styles.btnText}>Ver Planos Alimentares</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('RegistroRefeicoes')}
        >
          <Text style={styles.btnText}>Registrar Refeição</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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


