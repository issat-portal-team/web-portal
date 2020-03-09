import express from 'express'
import path from 'path'
import { SERVER_PORT } from './config'
import * as routes from "./routes";

const app = express()
const pathToPublic = path.resolve(__dirname, 'public')

app.use(express.static(pathToPublic))
// Configure routes
routes.register( app );
app.listen(SERVER_PORT, () => console.log(`Server is running on port: ${SERVER_PORT}`))
