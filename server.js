const express = require('express')
const {API} = require('./api')
const handlebars = require('express-handlebars')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', handlebars.engine());
app.set('views engine', 'handlebars');
app.set('views', './views')

const apiClass = new API()

app.get('/',(req, res)=>{
    res.render('index.handlebars')
})

app.get('/productos', (req, res)=>{
    console.log(apiClass.getAll())
    res.render('table.handlebars', {products: apiClass.getAll()})
})

app.post('/',(req, res)=>{
    apiClass.add(req.body)
    res.redirect('/')
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, ()=>{console.log(`listening on port: ${PORT}`)})
server.on('error', error => console.log(`Error en el servidor ${error}`))