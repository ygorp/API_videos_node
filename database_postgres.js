import { randomUUID } from 'node:crypto';
import { sql } from './db.js';


export class databasePostgres {

   async list(search) {
        let videos

        if (search) {
            videos = await sql`
            SELECT * FROM videos
            WHERE title ILIKE ${'%' + search + '%'}
            OR description ILIKE ${'%' + search + '%'}
            `;
        } else {
            videos = await sql`
            SELECT * FROM videos
            `;
        }

        return videos;
    }

    async create(video) {
        const videoId = randomUUID();

        const { title, description, duration } = video;

        await sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${video.title}, ${video.description}, ${video.duration})`;
    }

    async update(id, video) {
        const { title, description, duration } = video;

        await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`;
    }

    async delete(id) {
        await sql`delete from videos where id = ${id}`;
    }
}