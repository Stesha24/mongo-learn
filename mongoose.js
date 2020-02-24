const mongoose = require("mongoose");

require('./models/contacts');
require('./models/adverts');  

mongoose.set('debug', true);
mongoose.connect("mongodb://localhost:20000/property", { useNewUrlParser: true });

module.exports = mongoose;