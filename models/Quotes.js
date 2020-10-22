const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema of the img stored in database
const QuoteSchema = new Schema({
  quote: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Quote", QuoteSchema);
