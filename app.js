import express from 'express'
import routerTestimoniosAp from './routers/testimoniosAPIRouter.js'
import routerTestimonios from './routers/testimoniosRouter.js'
const app = express()

app.use(express.static('assets'))
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use('/api/', routerTestimoniosAp)

app.use('/', routerTestimonios)

app.listen(80, function () {
    console.log("Server ON!")
})

