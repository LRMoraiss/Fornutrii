// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const fileUpload = require('express-fileupload');
// const path = require('path');
// const swaggerUi = require('swagger-ui-express');
// const swaggerSpec = require('./swagger/swaggerConfig');
// const dbInit = require('./db/dbInit');

// // Rotas
// const authRoutes = require('./routes/authRoutes');
// const usuarioRoutes = require('./routes/usuarioRoutes');
// const cadastroRoutes = require('./routes/cadastroRoutes');
// const uploadRoutes = require('./routes/uploadRoutes');
// const planosAlimentarRoutes = require('./routes/planosAlimentarRoutes');


// class Server {
//   constructor() {
//     this.app = express();
//     this.port = process.env.PORT || 3000;
//     this.configureMiddlewares();
//     this.routes();
//     this.initDb();
//   }

//   configureMiddlewares() {
//     this.app.use(cors({
//       origin: '*',
//       methods: 'GET,POST,PUT,DELETE,OPTIONS',
//       allowedHeaders: ['Content-Type', 'Authorization'],
//     }));

//     this.app.use(morgan('dev'));
//     this.app.use(express.json());
//     this.app.use(express.urlencoded({ extended: true }));

//     // Uploads de arquivo
//     this.app.use(fileUpload({
//       useTempFiles: true,
//       tempFileDir: '/tmp/',
//       createParentPath: true,
//       limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
//     }));

//     // Servir arquivos estáticos da pasta uploads
//     this.app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//     // Swagger
//     this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//   }

//   routes() {
//     this.app.use('/api/auth', authRoutes);
//     this.app.use('/api/usuario', usuarioRoutes);
//     this.app.use('/api/cadastro', cadastroRoutes);
//     this.app.use('/api/upload', uploadRoutes);
//     this.app.use('/api/planos-alimentar', planosAlimentarRoutes);


//     // Rota padrão
//     this.app.get('/api', (req, res) => {
//       res.json({
//         nome: 'API ForNutri',
//         versao: '1.0.0',
//         ambiente: process.env.NODE_ENV,
//         docs: `${req.protocol}://${req.get('host')}/api-docs`
//       });
//     });

//     // Tratamento de erros
//     this.app.use((err, req, res, next) => {
//       console.error(err.stack);
//       res.status(500).json({ error: 'Erro interno do servidor' });
//     });
//   }

//   async initDb() {
//     try {
//       await dbInit();
//       console.log('Banco de dados inicializado com sucesso');
//     } catch (error) {
//       console.error('Erro ao inicializar banco de dados:', error);
//       process.exit(1);
//     }
//   }

//   start() {
//     this.app.listen(this.port, () => {
//       console.log(`Servidor rodando na porta ${this.port}`);
//       console.log(`Documentação: http://10.0.30.176:${this.port}/api-docs`);
//     });
//   }
// }

// if (require.main === module) {
//   const server = new Server();
//   server.start();
// }

// module.exports = Server;


// require('dotenv').config();
// const request = require('supertest');
// const Server = require('../server');  
// // Altere para o caminho correto
// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const fileUpload = require('express-fileupload');
// const path = require('path');
// const swaggerUi = require('swagger-ui-express');
// const swaggerSpec = require('./swagger/swaggerConfig');
// const dbInit = require('./db/dbInit');

// // Rotas
// const authRoutes = require('./routes/authRoutes');
// const usuarioRoutes = require('./routes/usuarioRoutes');
// const cadastroRoutes = require('./routes/cadastroRoutes');
// const uploadRoutes = require('./routes/uploadRoutes');
// const planosAlimentarRoutes = require('./routes/planosAlimentarRoutes');

// class Server {
//   constructor() {
//     this.app = express();
//     this.port = process.env.PORT || 3000;
//     this.configureMiddlewares();
//     this.routes();
//     this.initDb();  // Chama a inicialização do banco
//   }

//   configureMiddlewares() {
//     this.app.use(cors({
//       origin: '*',
//       methods: 'GET,POST,PUT,DELETE,OPTIONS',
//       allowedHeaders: ['Content-Type', 'Authorization'],
//     }));

//     this.app.use(morgan('dev'));
//     this.app.use(express.json());
//     this.app.use(express.urlencoded({ extended: true }));

//     // Uploads de arquivo
//     this.app.use(fileUpload({
//       useTempFiles: true,
//       tempFileDir: '/tmp/',
//       createParentPath: true,
//       limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
//     }));

//     // Servir arquivos estáticos da pasta uploads
//     this.app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//     // Swagger
//     this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//   }

//   routes() {
//     this.app.use('/api/auth', authRoutes);
//     this.app.use('/api/usuario', usuarioRoutes);
//     this.app.use('/api/cadastro', cadastroRoutes);
//     this.app.use('/api/upload', uploadRoutes);
//     this.app.use('/api/planos-alimentar', planosAlimentarRoutes);

//     // Rota padrão
//     this.app.get('/api', (req, res) => {
//       res.json({
//         nome: 'API ForNutri',
//         versao: '1.0.0',
//         ambiente: process.env.NODE_ENV,
//         docs: `${req.protocol}://${req.get('host')}/api-docs`
//       });
//     });

//     // Tratamento de erros
//     this.app.use((err, req, res, next) => {
//       console.error(err.stack);
//       res.status(500).json({ error: 'Erro interno do servidor' });
//     });
//   }

//   async initDb() {
//     try {
//       await dbInit();
//       console.log('Banco de dados inicializado com sucesso');
//     } catch (error) {
//       console.error('Erro ao inicializar banco de dados:', error);
//       process.exit(1);
//     }
//   }

//   start() {
//     this.app.listen(this.port, () => {
//       console.log(`Servidor rodando na porta ${this.port}`);
//       console.log(`Documentação: http://10.0.30.176:${this.port}/api-docs`);
//     });
//   }
// }

// if (require.main === module) {
//   const server = new Server();
//   server.start();
// }

// module.exports = Server;


// Importando o express
// Importando dependências
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');
const dbInit = require('./db/dbInit');

// Importando as rotas
const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const cadastroRoutes = require('./routes/cadastroRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const planosAlimentarRoutes = require('./routes/planosAlimentarRoutes');

// Definindo a classe Server
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.configureMiddlewares();  // Configuração dos middlewares
    this.routes();  // Configuração das rotas
  }

  // Configuração dos middlewares
  configureMiddlewares() {
    this.app.use(cors({
      origin: '*',
      methods: 'GET,POST,PUT,DELETE,OPTIONS',
      allowedHeaders: ['Content-Type', 'Authorization'],
    }));
    
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Configuração para upload de arquivos
    this.app.use(fileUpload({
      useTempFiles: true,
      tempFileDir: '/tmp/',
      createParentPath: true,
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    }));

    // Servir arquivos estáticos da pasta uploads
    this.app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

    // Swagger - documentação da API
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  // Configuração das rotas
  routes() {
    this.app.use('/api/auth', authRoutes);
    this.app.use('/api/usuario', usuarioRoutes);
    this.app.use('/api/cadastro', cadastroRoutes);
    this.app.use('/api/upload', uploadRoutes);
    this.app.use('/api/planos-alimentar', planosAlimentarRoutes);

    // Rota padrão
    this.app.get('/api', (req, res) => {
      res.json({
        nome: 'API ForNutri',
        versao: '1.0.0',
        ambiente: process.env.NODE_ENV,
        docs: `${req.protocol}://${req.get('host')}/api-docs`
      });
    });

    // Tratamento de erros
    this.app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: 'Erro interno do servidor' });
    });
  }

  // Inicialização do banco de dados
  async initDb() {
    try {
      await dbInit();
      console.log('Banco de dados inicializado com sucesso');
    } catch (error) {
      console.error('Erro ao inicializar banco de dados:', error);
      throw error;  // Lançar o erro para que o servidor não inicie em caso de falha
    }
  }

  // Iniciar o servidor
  async start() {
    try {
      await this.initDb();  // Inicializa o banco de dados antes de iniciar o servidor
      this.app.listen(this.port, () => {
        console.log(`Servidor rodando na porta ${this.port}`);
        console.log(`Documentação da API disponível em: http://localhost:${this.port}/api-docs`);
      });
    } catch (error) {
      console.error('Erro ao iniciar o servidor:', error);
      process.exit(1);  // Encerrar o processo se o banco de dados não for inicializado corretamente
    }
  }
}

// Iniciar o servidor se este arquivo for executado diretamente
if (require.main === module) {
  const server = new Server();
  server.start();
}

module.exports = Server;  // Exportando a classe para testes ou reutilização