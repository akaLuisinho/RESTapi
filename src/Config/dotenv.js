import dotenv from 'dotenv'

export const env = dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})
