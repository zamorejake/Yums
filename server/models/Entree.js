/*needs to be uncommented out and code below needs to be deleted

const { Schema, model } = require('mongoose');

const entreeSchema = new Schema({
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
  allergy: {
    type: BOOLEAN,
    required: true,
  },
  image: {
    type: STRING,
  },
});

const Entree = model('Entree', entreeSchema);

module.exports = Entree;

*/

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Entree extends Model { }

Entree.init(
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
    allergy: {
      type: DataTypes.JSON,
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
    modelName: 'entree',
  }
);

module.exports = Entree;
