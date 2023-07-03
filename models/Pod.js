const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pod = sequelize.define(
  'Pod',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // Other model options if needed
  }
);

module.exports = Pod;
