/*needs to be uncommented out and code below needs to be deleted

const { Schema, model } = require('mongoose');

const beverageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Float,
    required: true,
  },
  in_stock: {
    type: BOOLEAN,
    required: true,
  },
  has_alcohol: {
    type: BOOLEAN,
    required: true,
  },
  image: {
    type: STRING,
  },
});

const Beverage = model('Beverage', beverageSchema);

module.exports = Beverage;

*/

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Beverage extends Model { }

Beverage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    in_stock: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    has_alcohol: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'beverage',
  }
);

module.exports = Beverage;


