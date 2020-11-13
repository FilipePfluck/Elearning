import 'reflect-metadata'
import express from 'express'
import path from 'path'

import './database/connection'

import routes from './routes'

const app = express()

app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
app.use(routes)

app.listen(3333, ()=>{
    console.log('server started on port 3333')   
})