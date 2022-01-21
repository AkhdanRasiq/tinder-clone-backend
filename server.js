import express from 'express'
import mongoose from 'mongoose'

// APP CONFIG
const app = express()
const port = process.env.PORT || 8001

// MIDDLEWARE

// DB CONFIG

// API ENDPOINT
app.get('/', (req, res) => res.status(200).send('Hello World!'))

// LISTENER
app.listen(port, () => console.log(`listening on localhost: ${port}`))
