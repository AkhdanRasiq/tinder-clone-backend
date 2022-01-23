import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

import Cards from './dbCards.js'

// APP CONFIG
const app               = express()
const port              = process.env.PORT || 8001
const connection_url    = 'mongodb+srv://admin:shinaxe28@cluster0.krdgk.mongodb.net/tinderdb?retryWrites=true&w=majority'

// MIDDLEWARE
app.use(express.json())
app.use(Cors())

// DB CONFIG
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// API ENDPOINT
app.get('/', (req, res) => res.status(200).send('Hello World!'))

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body

    Cards.create(dbCard, (err, data) => {
        if (err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err)
            res.status(500).send(err)
        else
            res.status(200).send(data)
    })
})

// LISTENER
app.listen(port, () => console.log(`listening on localhost: ${port}`))
