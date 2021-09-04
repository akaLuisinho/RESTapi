import mongoose from 'mongoose';
import '../Config/dotenv.js'

const url = process.env.MONGO_URL

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(url, options);

mongoose.set('useCreateIndex', true)

export default mongoose;