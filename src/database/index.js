const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restapi', { useNewUrlParser, useMongoClient: true });

module.exports = mongoose