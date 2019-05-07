const mongoose = require('mongoose')
const ConnectURL = require('../config.js')

var connectionURL = process.env.connectionURL || ConnectURL.connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
