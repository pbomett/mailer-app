const Sequelize = require('sequelize')

module.exports = new Sequelize('mailer', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
  });
  

  