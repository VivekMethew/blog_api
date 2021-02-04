require('dotenv').config()
const express = require('express')
const router = require('./routes/routes')
const blogRouter = require('./routes/blogs.router')
const bodyParser = require('body-parser')
const createError = require('http-errors')
const app = express()
const server = require('http').createServer(app)

const port = process.env.PORT || 3000

require('./config/mongoose.connection')()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)
app.use(blogRouter)

app.use((req, res, next) => {
    next(createError(404, "Not Found Route"))
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

server.listen(port, () => {
    console.log('Server running on ', port)
})