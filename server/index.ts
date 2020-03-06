import express from 'express'
import path from 'path'
import { SERVER_PORT } from './config'
const app = express()
const pathToPublic = path.resolve(__dirname, 'public')

app.use(express.static(pathToPublic))
app.listen(SERVER_PORT, () => console.log(`Server is running on port: ${SERVER_PORT}`))
