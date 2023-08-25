
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








