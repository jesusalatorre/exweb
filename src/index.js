const express = require('express')
const bodyParser = require('body-parser')

require('./db/mongoose')

const router = require('./routes')


const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json()) // parsea a json
app.use(router)




app.listen(port, function() {
  console.log('Server up and running on port ' + port)
})
