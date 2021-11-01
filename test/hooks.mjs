import mongoose from 'mongoose'
import {MongoMemoryServer} from 'mongodb-memory-server'

let mongo

// noinspection JSUnusedGlobalSymbols
export const mochaHooks = {
    async beforeAll() {
        mongo = await MongoMemoryServer.create()
        const mongoUri = mongo.getUri()

        await mongoose.connect(mongoUri)
    },
    async afterAll() {
        await mongo.stop()
        await mongoose.connection.close()
    }
}
