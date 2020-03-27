import express from 'express'
import path from 'path'

export const app = express()
const pathToPublic = path.resolve(__dirname, 'public')

app.use(express.static(pathToPublic))
