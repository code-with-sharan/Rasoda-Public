import express from 'express'
import {connectDB} from './config/db.js'
import cors from 'cors'
import userRouter from './Routes/userRoute.js'
import aiRouter from './Routes/openAIRoute.js'

const app = express()
const PORT = 9000

// DB connection
connectDB()

// Middlewares
app.use(express.json()) // whenever there is a 'get' req. from frontend to backend, that will be parsed in json.
app.use(cors())

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/recipie", aiRouter)

app.get("/", (req, res)=>{
    res.send("API working")
})


app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})