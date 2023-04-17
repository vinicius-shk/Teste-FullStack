require('dotenv').config();

const options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: 'Teste_FullStack',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3006,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = options;
