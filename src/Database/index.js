import mongoose from 'mongoose';
import '../config/config.js'

const url = process.env.MONGO_URL

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, options);

mongoose.set('useCreateIndex', true)

export default mongoose;