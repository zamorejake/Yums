
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
    type: String,
  },
});

const Entree = model('Entree', entreeSchema);

module.exports = Entree;



