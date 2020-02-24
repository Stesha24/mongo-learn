const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const options = { discriminatorKey: 'kind' };

const schema = new Schema({
  action: String,
  category: String, 
  address: String,
  photos: [String],
  description: String,
  price: Number,
  contacts: {
    type: Schema.Types.ObjectId,
    ref: 'Contact'
  },
  comfort_options: [String]
}, options);

module.exports = mongoose.model("Advert", schema);