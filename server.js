import { fastify } from "fastify";
import { databasePostgres } from "./database_postgres.js";

const app = fastify();

//const database = new databaseMemory();
const database = new databasePostgres();

app.post("/videos", async (request, reply) => {

    const { title, description, duration } = request.body;

    await database.create({
        title,
        description,
        duration,
    });

    return reply.status(201).send();
});

app.get("/videos", async (request, reply) => {

    const search = request.query.search;

    const videos = await database.list(search);

    return reply.send(videos);
});

app.put("/videos/:id", async (request, reply) => {
    const videoId = request.params.id;

    database.update(videoId, request.body);

    return reply.status(204).send();
});

app.delete("/videos/:id", async (request, reply) => {
    const videoId = request.params.id;

    await database.delete(videoId);

    return reply.status(204).send();
});

app.listen({
    port: process.env.PORT ?? 3000,
})