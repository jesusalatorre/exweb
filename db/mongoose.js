const mongoose = require('mongoose')

var connectionURL = 'mongodb+srv://jesus_alatorre:chuchu@cluster0-bo0at.mongodb.net/test?retryWrites=true'



mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
