# Criar pasta mobile e entrar nela
mkdir mobile && cd mobile

# Iniciar projeto Expo (React Native)
npx create-expo-app . --template

# Criar estrutura de pastas
mkdir screens, navigation, context, services, components, assets\fonts, assets\images, screens\Auth, screens\Onboarding, screens\Common, screens\Nutritionist, screens\Trainer -Force

# Criar arquivos principais
touch App.jsx navigation/AppNavigator.jsx context/AuthContext.jsx services/api.js