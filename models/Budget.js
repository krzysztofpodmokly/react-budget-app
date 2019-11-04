const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  cash: {
    type: Number,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  dueDate: {
    type: String,
    required: true
  }
});

const Budget = mongoose.model('budget', BudgetSchema, 'expenses');

module.exports = Budget;
