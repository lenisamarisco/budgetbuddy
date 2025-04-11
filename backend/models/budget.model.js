const { type } = require("@testing-library/user-event/dist/cjs/utility/type.js");
const mongoose  = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Budget = new Schema({
  type: {
    type: String, 
    enum: ["income", "outcome"],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true,
    ref: "User"
  },

});

const BudgetModel = mongoose.model('Budget', Budget);
module.exports = BudgetModel