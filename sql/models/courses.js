const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const course = sequelize.define('courses', {

  course_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  marks: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

}, {
  timestamps: true 
  
});



console.log(course === sequelize.models.course);

module.exports = course;
