import express from 'express'
import hbs from 'hbs'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const __dirname = path.resolve()

const app = express()

app.set('views', __dirname + '/layouts')
app.set('view engine', 'html')
app.engine('html', hbs.__express)

app.use(morgan('combined'))


//parse request body
app.use(bodyParser.urlencoded())

//serve 
app.use('/assets', express.static(__dirname + '/assets'))

app.get('/', (rem, res, next) => {
  res.send({success: true})
})

app.get('/product', (req, res, next) => {
  res.render('product')
})

//handle from GET method
app.get('/add-product', (req, res, next) => {
  res.send(req.query)
})

//handle from POST method
app.post('/add-product', (req, res, next) => {
  console.log('Request', req.body)
  res.send(req.body)
})

app.use((err, req, res, next) => {
  res.render('layouts/product.html')
})

app.listen(8000, () => {
  console.log('App listen on port 8000')
})

