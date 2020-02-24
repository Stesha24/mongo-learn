const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Advert = mongoose.model('Advert');
const options = { discriminatorKey: 'kind' };

const schema = new Schema({
  house: {
    yearOfBuild: Number,
    ceilingHeight: Number,
    parkingType: String,
    houseType: String,
    delivered: Boolean
  }
}, options);

module.exports = Advert.discriminator('Apartment', schema);