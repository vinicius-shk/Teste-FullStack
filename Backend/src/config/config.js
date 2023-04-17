require('dotenv').config();

const options = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  database: 
    `${process.env.DB_NAME || 'Teste_FullStack'}`,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '1234',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = options;
