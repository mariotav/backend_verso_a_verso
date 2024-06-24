const request = require('supertest');
const express = require('express');
const areaRouter = require('./path/to/your/router');
const db = require('../util/db');

const app = express();
app.use(express.json());
app.use('/area', areaRouter);

// Mock do db.query
jest.mock('../util/db', () => ({
  query: jest.fn(),
}));

describe('Area Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /area', () => {
    it('should fetch all areas', async () => {
      db.query.mockImplementation((sql, params, callback) => {
        callback(null, [{ id: 1, nome: 'Teste' }]);
      });

      const response = await request(app).get('/area');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([{ id: 1, nome: 'Teste' }]);
    });

    it('should handle db errors', async () => {
      db.query.mockImplementation((sql, params, callback) => {
        callback(new Error('DB Error'));
      });

      const response = await request(app).get('/area');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ erro: 'Erro na consulta de area', detalhes: new Error('DB Error') });
    });
  });

  describe('GET /area/:id', () => {
    it('should fetch a specific area', async () => {
      db.query.mockImplementation((sql, params, callback) => {
        callback(null, { id: 1, nome: 'Teste' });
      });

      const response = await request(app).get('/area/1');

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ id: 1, nome: 'Teste' });
    });

    it('should handle db errors', async () => {
      db.query.mockImplementation((sql, params, callback) => {
        callback(new Error('DB Error'));
      });

      const response = await request(app).get('/area/1');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ erro: 'Erro na consulta de area', detalhes: new Error('DB Error') });
    });
  });

  describe('POST /area', () => {
    it('should create a new area', async () => {
      db.query.mockImplementation((sql, params, callback) => {
        callback(null, { insertId: 1 });
      });

      const response = await request(app).post('/area').send({ nome: 'Nova Area' });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ insertId: 1 });
    });

    it('should handle db errors', async () => {
      db.query.mockImplementation((sql, params, callback) => {
        callback(new Error('DB Error'));
      });

      const response = await request(app).post('/area').send({ nome: 'Nova Area' });

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ erro: 'Erro no cadastro de area!', detalhes: new Error('DB Error') });
    });
  });

  describe('DELETE /area/:id', () => {
    it('should delete an area', async () => {
      db.query.mockImplementation((sql, params, callback) => {
        callback(null, { affectedRows: 1 });
      });

      const response = await request(app).delete('/area/1');

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ affectedRows: 1 });
    });

    it('should handle db errors', async () => {
      db.query.mockImplementation((sql, params, callback) => {
        callback(new Error('DB Error'));
      });

      const response = await request(app).delete('/area/1');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ erro: 'Erro ao deletar area', detalhes: new Error('DB Error') });
    });
  });

  describe('PUT /area', () => {
    it('should update an area', async () => {
      db.query.mockImplementation((sql, params, callback) => {
        callback(null, { affectedRows: 1 });
      });

      const response = await request(app).put('/area').send({ id: 1, nome: 'Area Atualizada' });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ affectedRows: 1 });
    });

    it('should handle db errors', async () => {
      db.query.mockImplementation((sql, params, callback) => {
        callback(new Error('DB Error'));
      });

      const response = await request(app).put('/area').send({ id: 1, nome: 'Area Atualizada' });

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ erro: 'Erro ao atualizar area', detalhes: new Error('DB Error') });
    });
  });
});
