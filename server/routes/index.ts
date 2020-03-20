import { Router } from 'express'
import loginRouter from './login.route'
import cors from 'cors'

const router = Router()
const corsOptions = {
  origin: 'http://localhost:8080'
}
router.use(cors(corsOptions))
router.use('/login', loginRouter)

export default router
