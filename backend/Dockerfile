# Passo 2: Defina a imagem base (neste caso, a imagem oficial do Node.js)
FROM node:18

# Passo 3: Defina o diretório de trabalho dentro do container
WORKDIR /app

# Passo 4: Copie os arquivos package.json e package-lock.json (caso haja) para dentro do container
COPY package*.json ./

# Passo 5: Instale as dependências do Node.js no container
RUN npm install

# Passo 6: Copie todo o restante do código para dentro do container
COPY . .

# Passo 7: Expõe a porta 3000, que é onde o seu backend vai rodar
EXPOSE 3000

# Passo 8: Define o comando para iniciar o servidor (geralmente npm start)
CMD ["npm", "start"]
