import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas
import WelcomeScreen from '../screens/Onboarding/WelcomeScreen';
import LoginScreen from '../screens/Auth/Login/LoginScreen';
import RegisterScreen from '../screens/Auth/Register/RegisterScreen';
import ForgotPasswordScreen from '../screens/Auth/Recuperar senha/ForgotPasswordScreen';
import HomeScreen from '../screens/Auth/Home/HomeScreen';
import NotificationsScreen from '../screens/Auth/Home/NotificationsScreen';
import CompleteCadastro from '../screens/Auth/Register/CompleteCadastro';
import PlanosAlimentarScreen from '../screens/Auth/Planos/PlanosAlimentarScreen';
import NovoPlanoScreen from '../screens/Auth/Planos/NovoPlanoScreen';
import DetalhesPlanoScreen from '../screens/Auth/Planos/DetalhesPlanoScreen';
import RegistroRefeicaoScreen from '../screens/Auth/Register/RegistroRefeicaoScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="CompleteCadastro" component={CompleteCadastro} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="RegistroRefeicoes" component={RegistroRefeicaoScreen} />
        <Stack.Screen name="PlanosAlimentar" component={PlanosAlimentarScreen} />
        <Stack.Screen name="novo-plano" component={NovoPlanoScreen} /> 
        <Stack.Screen name="detalhes-plano" component={DetalhesPlanoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
