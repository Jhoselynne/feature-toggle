import fastify from "fastify";
import FeatureToggleRoutes from "./routes.js";
import database from "./utils/db.js";

const server = fastify({ logger: true });

const start = async () => {
    try {
        await server.register(database);

        await server.register(FeatureToggleRoutes);

        await server.listen({ port: 3000 })
        console.log("Server running!")
    } catch (error) {
        server.log.error(error);
        process.exit(1);
    }
}

start();