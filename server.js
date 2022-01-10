import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

// middleware
import notFoundMiddleware from './middleware/not_found.js'
import errorHandlerMiddleware from './middleware/error_handler.js'
import connectDB from './db/connect.js'


app.get('/', (req, res) => {
    res.send('Welcome!!!')
})

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