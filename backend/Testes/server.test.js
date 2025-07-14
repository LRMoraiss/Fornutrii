// const request = require('supertest');
// const app = require('../server'); // ou '../index.js', dependendo de onde seu servidor é exportado

// describe('Testando as rotas do back-end', () => {
//   it('deve retornar status 200 para a rota /api', async () => {
//     const response = await request(app).get('/api');
//     expect(response.status).toBe(200);
//     expect(response.body.nome).toBe('API ForNutri'); // Verifica se o nome da API está correto
//     expect(response.body.versao).toBe('1.0.0'); // Verifica a versão da API
//     expect(response.body.ambiente).toBe(process.env.NODE_ENV); // Verifica se o ambiente corresponde à variável de ambiente
//     expect(response.body.docs).toBe(`${response.protocol}://${response.get('host')}/api-docs`); // Verifica o link da documentação
//   });

//   it('deve retornar erro 404 para uma rota não existente', async () => {
//     const response = await request(app).get('/rota-inexistente');
//     expect(response.status).toBe(404);
//   });
// });

// const request = require('supertest'); // ou outro cliente de requisições
// const Server = require('../server'); // O caminho para o seu arquivo server.js

// describe('Testando as rotas do back-end', () => {
//   let server;

//   beforeAll(() => {
//     server = new Server();
//     server.start();
//   });

//   afterAll(() => {
//     server.app.close(); // Fechar a conexão do servidor após os testes
//   });

//   it('deve retornar status 200 para a rota /api', async () => {
//     const response = await request(server.app).get('/api');
//     expect(response.status).toBe(200);
//     expect(response.body.nome).toBe('API ForNutri');
//   });

//   it('deve retornar erro 404 para uma rota não existente', async () => {
//     const response = await request(server.app).get('/rota-inexistente');
//     expect(response.status).toBe(404);
//   });
// });
//     // const express = require('express');
//     // const path = require('path');    

const request = require('supertest');
const Server = require('../server');  // Altere para o caminho correto

describe('Testando as rotas do Backend', () => {
  let server;

  beforeAll(async () => {
    server = new Server();
    await server.start();  // Certifique-se de que o start seja assíncrono, se necessário
  });

  afterAll(() => {
    server.app.close();  // Fecha o servidor após os testes
  });

  it('deve retornar status 200 para a rota /api', async () => {
    jest.setTimeout(10000);  // Aumentando o timeout para 10 segundos
    const response = await request(server.app).get('/api');
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('API ForNutri');
    expect(response.body.versao).toBe('1.0.0');
  });

  it('deve retornar erro 404 para uma rota não existente', async () => {
    const response = await request(server.app).get('/rota-inexistente');
    expect(response.status).toBe(404);
  });

  it('deve criar um novo usuário (POST /api/usuario)', async () => {
    const newUser = { nome: 'Lucas', email: 'lucas@example.com' };
    const response = await request(server.app)
      .post('/api/usuario')
      .send(newUser);
    expect(response.status).toBe(201);
    expect(response.body.nome).toBe(newUser.nome);
  });

  // Outros testes podem ser adicionados conforme necessário
});
// const dbInit = require('./dbInit'); // Certifique-se de que o caminho esteja correto
// const authRoutes = require('./routes/authRoutes');   
