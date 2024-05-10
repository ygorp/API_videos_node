import { fastify } from "fastify";
import { databaseMemory } from "./database.js";

const app = fastify();

const database = new databaseMemory();

app.post("/videos", async (request, reply) => {

    const { title, description, duration } = request.body;

    database.create({
        title,
        description,
        duration,
    });

    return reply.status(201).send();
});

app.get("/videos", async (request, reply) => {
    const videos = database.list();

    return reply.send(videos);
});

app.put("/videos/:id", async (request, reply) => {
    const videoId = request.params.id;

    database.update(videoId, request.body);

    return reply.status(204).send();
});

app.delete("/videos/:id", async (request, reply) => {
    return { hello: "world" };
});

app.listen({
    port: 3000,
})