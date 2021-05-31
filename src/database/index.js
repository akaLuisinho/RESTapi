const mongoose = require('mongoose');

const url = 'mongodb://localhost/restapi'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, options);

mongoose.set('useCreateIndex', true)

module.exports = mongoose