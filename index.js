import express from 'express'
import hbs from 'hbs'
import path from 'path'

const __dirname = path.resolve()

const app = express()

app.set('views', __dirname + '/layouts')
app.set('view engine', 'html')
app.engine('html')

app.get('/', (rem, res, next) => {
  res.send({success: true})
})

app.use((err, req, res, next) => {
  re.send(err.message)
})

app.listen(8000, () => {
  console.log('App listen on port 8000')
})

