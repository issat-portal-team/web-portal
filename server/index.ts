import express from 'express'
import path from 'path'
import { SERVER_PORT } from './config'
import router from './routes'
import {connect} from './model/dbConn'
import { UserController } from './routes/controllers/userController';
import { useExpressServer } from "routing-controllers";
//Connecting to the database
//connect();

const app = express()
const pathToPublic = path.resolve(__dirname, 'public')

app.use(express.static(pathToPublic))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)
useExpressServer(app, {
  // register created express server in routing-controllers
  controllers: [UserController] // and configure it the way you need (controllers, validation, etc.)
});
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port: ${SERVER_PORT}`)
})
