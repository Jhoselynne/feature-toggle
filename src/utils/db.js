import mongoose from "mongoose";
import fp from "fastify-plugin";
import Toggle from "../model/Toggle.js"

async function database(server, option) {

    try {
        mongoose.connection.on("connected", () => {
            server.log.info({actor: "MongoDB"}, "connected!")
        });

        mongoose.connection.on("disconnected", () => {
            server.log.info({actor: "MongoDB"}, "disconnected!")
        });

        await mongoose.set('strictQuery', false);

        await mongoose.connect("mongodb+srv://Jossan:jossan@cluster0.jwqib7c.mongodb.net/?retryWrites=true&w=majority")

        const models = { Toggle };

        server.addHook("onRequest", async (request, response) => {
            request.db = { models };
        });

    } catch (error) {
        
    }
}

export default fp(database);