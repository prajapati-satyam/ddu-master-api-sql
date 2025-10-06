const express = require('express');
const router = require('./routes/routes');
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})