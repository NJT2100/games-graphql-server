import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const SwitchSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        unique: true
    },
    publisher: {
        type: String,
        trim: true
    },
    developer: {
        type: String,
        trim: true
    },
    genre: [String],
    numPlayers: String,
    msrp: String,
    releaseDate: String,
    rating: String,
    fileSize: String,
    languages: [String],
    playModes: [String],
    overview: {
        header: String,
        description: String
    },
    link: String,
    legal: String
})

export const Switch = mongoose.model('Switch', SwitchSchema)
export const SwitchTC = composeWithMongoose(Switch)