

---

## 🚀 **Passo a Passo de Instalação com Comandos**

### **1. Backend: Node.js + MongoDB + JWT + Express**

#### 1.1 **Criando e Configurando o Backend**

1. **Criar diretório do backend**:

   ```bash
   mkdir backend
   cd backend
   ```

2. **Inicializar o projeto Node.js**:

   ```bash
   npm init -y
   ```

3. **Instalar dependências necessárias**:

   ```bash
   npm install express mongoose dotenv cors bcryptjs jsonwebtoken nodemailer
   ```

4. **Instalar dependências para desenvolvimento (nodemon)**:

   ```bash
   npm install --save-dev nodemon
   ```

5. **Estrutura de Diretórios**:
   Agora, crie a estrutura de pastas para seu projeto backend:

   ```bash
   mkdir src
   cd src
   mkdir controllers middlewares models routes
   ```

6. **Criar o arquivo principal `app.js`**:
   No diretório `src`, crie o arquivo `app.js`:

   ```bash
   touch app.js
   ```

7. **Criar o arquivo de servidor `server.js`**:
   No diretório `src`, crie o arquivo `server.js`:

   ```bash
   touch server.js
   ```

---

#### 1.2 **Configurar o `.env`**

1. **Criar o arquivo `.env` na raiz do backend**:
   Este arquivo conterá as variáveis de ambiente (como o MongoDB URI e a chave secreta JWT).

   No diretório raiz do seu projeto, crie o arquivo `.env`:

   ```bash
   touch .env
   ```

2. **Adicionar variáveis de ambiente** no arquivo `.env`:

   ```plaintext
   MONGO_URI=mongodb://localhost:27017/nome_do_banco
   JWT_SECRET=sua_chave_secreta
   ```

   * **MONGO\_URI**: A URL de conexão com o MongoDB (se for usar o MongoDB Atlas, pegue a URL de lá).
   * **JWT\_SECRET**: A chave secreta para assinar os tokens JWT.

--
2. **Rodar o backend**:

   ```bash
   npm run dev
   ```

O servidor agora estará rodando na porta `3333`.

---

### **2. Frontend: React Native com Expo Go**

#### 2.1 **Criar o diretório e inicializar o projeto com Expo**

1. **Criar o diretório do frontend**:

   ```bash
   mkdir frontend
   cd frontend
   ```

2. **Inicializar o projeto React Native com Expo**:

   ```bash
   expo init .
   ```

   Escolha um template como **blank**.

#### 2.2 **Instalar Dependências Necessárias**

Instale as dependências que você usará no frontend:

```bash
npm install axios react-navigation react-navigation-stack react-navigation-tabs @react-native-async-storage/async-storage
```

Além disso, para garantir que as dependências de navegação funcionem corretamente, instale as dependências específicas do Expo para navegação:

```bash
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
```

---

#### 2.3 **Rodar o Frontend no Expo Go**

1. **Rodar o aplicativo**:

   ```bash
   npm start
   ```

2. **Escanear o QR code** com o **Expo Go** no seu dispositivo para rodar o app. Caso queira rodar no emulador, use:

   * Para Android:

     ```bash
     expo start --android
     ```
   * Para iOS:

     ```bash
     expo start --ios
     ```

## 🧑‍💻 **Comandos Resumidos**

### **Backend**

1. **Criar o diretório e inicializar o Node.js**:

   ```bash
   mkdir backend
   cd backend
   npm init -y
   npm install express mongoose dotenv cors bcryptjs jsonwebtoken nodemailer
   npm install --save-dev nodemon
   ```

2. **Rodar o servidor com Nodemon**:

   ```bash
   npm run dev
   ```

### **Frontend**

1. **Criar o diretório e inicializar o React Native com Expo**:

   ```bash
   mkdir frontend
   cd frontend
   expo init .
   ```

2. **Instalar dependências**:

   ```bash
   npm install axios react-navigation react-navigation-stack react-navigation-tabs @react-native-async-storage/async-storage
   expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
   ```

3. **Rodar o app no Expo Go**:

   ```bash
   npm start
   ```

---


