import mongoose from 'mongoose';
import './src/config/dotenv.js'

import User from './src/Models/UserModel'
import Post from './src/Models/PostModel'
import Comment from './src/Models/CommentModel'

beforeAll(async () => {
    const url = process.env.MONGO_URL

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    mongoose.connect(url, options);

})

afterAll(async () => {
    await User.deleteMany()
    await Post.deleteMany()
    await Comment.deleteMany()
})

it('should run correctly', () => {
    expect(process.env.MONGO_URL).toBeTruthy()
})
