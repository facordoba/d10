import express from 'express'
import API from './API.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.set('view engine', 'ejs')

const apiClass = new API()
app.get('/',(req, res)=>{
    res.render('index')
})
app.get('/productos', (req, res)=>{
    res.render('table', {products: apiClass.getAll()})
})

app.post('/',(req, res)=>{
    apiClass.add(req.body)
    res.redirect('/')
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, ()=>{console.log(`listening on port: ${PORT}`)})
server.on('error', error => console.log(`Error en el servidor ${error}`))