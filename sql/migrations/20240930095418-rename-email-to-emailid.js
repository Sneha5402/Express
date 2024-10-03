'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('students', 'emailid', 'email');
    await queryInterface.renameTable('students', 'pupils');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('students', 'email', 'emailid');
    await queryInterface.renameTable('pupils', 'students');
  }
};

