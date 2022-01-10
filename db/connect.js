import monggose from 'mongoose'

const connectDB = (url) => {
    return monggose.connect(url)
}

export default connectDB