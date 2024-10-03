const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('students', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: { 
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  dob: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  timestamps: true 
});



console.log(Student === sequelize.models.Student);

module.exports = Student;
