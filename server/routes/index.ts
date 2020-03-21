import { Router } from 'express'
import loginRouter from './login.route'
import signupRouter from './signup.route'
import cors from 'cors'

const router = Router()
const corsOptions = {
  "origin": "*"
}
router.use(cors(corsOptions))
router.use('/login', loginRouter)
router.use('/signup', signupRouter)


export default router
