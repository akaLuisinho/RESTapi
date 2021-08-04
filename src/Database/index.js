import mongoose from 'mongoose';

const url = 'mongodb+srv://me:1234@restapi.7rpfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, options);

mongoose.set('useCreateIndex', true)

export default mongoose;