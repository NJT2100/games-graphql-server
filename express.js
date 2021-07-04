import express from 'express'
import session from 'express-session'
import path from 'path'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server-express'
import config from './config/config'
import schema from './schema'
import { Console } from 'console'

const app = express()

// Read static files from 'dist' folder
app.use('/dist', express.static(path.join(__dirname, 'dist')))

// Apply middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(compression())
app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }))
app.use(session(config.session))

// Catch unauthorised errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({"error" : err.name + ": " + err.message})
    } else if (err) {
        res.status(400).json({"error" : err.name + ": " + err.message})
        console.log(err)
    }
})

// Enable graphlql Server
const server = new ApolloServer({
    schema: schema,
    cors: true,
    playground: config.env === 'development' ? true: false,
    introspection: true,
    tracing: true,
    path: '/'
})

server.applyMiddleware({
    app,
    path: '/graphql',
    cors: true,
    onHealthCheck: () => {
        new Promise((resolve, reject) => {
            if (mongoose.connection.readyState > 0) 
                resolve()
            else
                reject()
        })
    }
})

// Connect to MongoDB
const {
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
mongoose.connect(url, options).then(() => {
    console.log(`Mongoose connected to ${url}`)
}).catch((err) => {
    console.error(err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconected')
})

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`)
})

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected through app termination')
        process.exit(0)
    })
})

export default app