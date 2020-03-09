import express from 'express'
import path from 'path'
import { SERVER_PORT } from './config'
import { LoginRoute } from './routes'

class Server {
    public app :express.Application
    private pathToPublic : string
    constructor () {
      this.app = express()
      this.pathToPublic = path.resolve(__dirname, 'public')
      this.app.use(express.static(this.pathToPublic))
      this.routes()
    }

    public start ():void{
      this.app.listen(SERVER_PORT, () => {
        console.log(`Server is running on port: ${SERVER_PORT}`)
      })
    }

    public routes ():void{
      this.app.use('/login', new LoginRoute().router)
    }
}

const server = new Server()
server.start()
