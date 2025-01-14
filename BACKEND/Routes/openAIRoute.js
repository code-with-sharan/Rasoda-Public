import express from 'express'
import generateRecipies from "../Controllers/openAIControllers.js"
import authMiddleware from '../middleware/auth.js'

const aiRouter = express.Router()

aiRouter.post("/generate_recipie", authMiddleware,generateRecipies)

export default aiRouter