const express = require('express')
const port = 3000
const app = express()
const prefix='/static'

app.use(prefix, express.static('Pictures'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))