import express from 'express'
import path from 'path'
import { SERVER_PORT } from './config'
import router from './routes'

const app = express()
const pathToPublic = path.resolve(__dirname, 'public')

app.use(express.static(pathToPublic))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port: ${SERVER_PORT}`)
})
