import { Router } from 'express'
import {insertUser,checkUser} from '../model/dbConn'

const router = Router()
router.post('/', (req, res) => {
  insertUser(req.body.username,req.body.email,req.body.password);
})

export default router
