const { Sequelize } = require('sequelize');

// Initialize Sequelize with your MariaDB connection details
const sequelize = new Sequelize('users', 'root', 'sneha', {
  host: 'localhost',
  dialect: 'mariadb', 
});

module.exports = sequelize;
