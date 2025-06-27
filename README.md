
# 🥗 App for Nutri

## 📋 Sobre o Projeto

O **App for Nutri** é uma aplicação mobile voltada para nutricionistas e pacientes, permitindo o gerenciamento de perfis, objetivos alimentares, restrições, dados de saúde (peso, altura, idade) e upload de foto de perfil. O sistema oferece uma experiência intuitiva para cadastro, login e acompanhamento dos dados, com segurança baseada em autenticação JWT.

O projeto é dividido em:

- **Backend**: API REST em Node.js com Express e PostgreSQL.
- **Frontend Mobile**: Aplicativo desenvolvido com React Native e Expo Go.

---

## 🚀 Tecnologias Utilizadas

### 🔧 Backend
- Node.js
- Express
- PostgreSQL
- JWT (JSON Web Token)
- Dotenv
- Bcrypt
- Morgan
- CORS
- Swagger (para documentação da API)
- Upload de imagens com `express-fileupload`

#### 📦 Dependências instaladas:

```
npm install cors express dotenv jsonwebtoken bcrypt morgan pg swagger-ui-express swagger-jsdoc
```

#### 📦 Dependência para upload de imagem:

```
npm install --save expo-image-picker
```

---

### 📱 Frontend (Mobile)

- React Native
- Expo Go
- JavaScript (JSX)
- Axios
- AsyncStorage
- React Navigation
- Upload de Imagens com `expo-image-picker`

#### 📦 Dependências instaladas:

```
npm install
npm install expo-image-picker
```

---

## ⚙️ Configuração Inicial

### 🔧 Atualize os IPs locais

Para rodar o app corretamente, você deve trocar o IP para o da sua máquina nos seguintes arquivos:

1. **mobile/services/api.js**
2. **backend/routes/uploadRoutes.js**
3. **backend/swagger/swaggerConfig.js**

Substitua por exemplo:

```
http://192.168.0.xxx:3000
```

Por:

```
http://SEU_IP_LOCAL:3000
```

Descubra seu IP com:

```
# Windows:
ipconfig

# Linux/Mac:
ifconfig
```

---

## ▶️ Como Rodar o Projeto

### 🔙 Backend

1. Acesse a pasta do backend:

```
cd backend
```

2. Rode o servidor:

```
node index.js
```

O backend ficará disponível na porta `3000`.

---

### 📲 Frontend (Mobile)

1. Em outro terminal, acesse o diretório mobile:

```
cd mobile
```

2. Inicie o app com Expo:

```
npm start
```

3. Escaneie o QR code com o aplicativo **Expo Go** no seu celular.

---

## 📚 Documentação da API

Acesse a documentação Swagger da API após iniciar o backend:

```
http://SEU_IP_LOCAL:3000/api-docs
```

---

## 📸 Upload de Foto de Perfil

- O app usa `expo-image-picker` para selecionar uma foto do usuário durante o cadastro.
- A imagem é enviada ao backend e salva fisicamente em uma pasta local, enquanto o caminho é armazenado no banco PostgreSQL.

---

## ✅ Funcionalidades

- Cadastro de usuário com dados nutricionais
- Upload de foto
- Login com JWT
- Perfil do usuário
- Edição de dados
- Validação de token expirado
- Logout automático
- SplashScreen de carregamento
- Interface amigável e responsiva

---

## 🧑‍💻 Desenvolvido por

João Oliveira – [TCE Ceará](mailto:joao.oliveira@tce.ce.gov.br)
