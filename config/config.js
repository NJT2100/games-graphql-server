const dotenv = require('dotenv')

dotenv.config()

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 10000,
    mongoUri: process.env.MONGODB_URI || 
        process.env.MONGO_HOST ||
        'mongodb://' + (process.env.IP || 'localhost') + ':' +
        (process.env.MONGO_PORT || '27017') + 
        '/games',
    session: {
        secret: 'sample secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: true
        }
    }
}

export default config