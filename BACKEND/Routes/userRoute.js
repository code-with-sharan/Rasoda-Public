import express from 'express'
import {loginUser, registerUser, verifyEmailOtp, forgot_password, reset_password} from '../Controllers/userControllers.js'

const userRouter = express.Router()

userRouter.post("/login", loginUser)
userRouter.post("/register", registerUser)
userRouter.post("/verifyEmailOtp", verifyEmailOtp)
userRouter.post("/forgot_password", forgot_password)
userRouter.post("/reset_password/:token", reset_password)

export default userRouter