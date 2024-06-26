import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

import 'express-async-errors'
import morgan from 'morgan'

// DB
import connectDB from './db/connect.js'

//routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRouter.js'

// middleware
import notFoundMiddleware from './middleware/not_found.js'
import errorHandlerMiddleware from './middleware/error_handler.js'

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}
app.use(express.json())


app.get('/', (req, res) => {
    res.json({msg: 'Welcome!'})
})
app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.use('/api/v1/auth', authRouter)
app.use("/api/v1/jobs", jobsRouter);


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => console.log(`Server runing on ${port}`))
    } catch (error) {
        console.log(error)

    }
}

start()