import { randomUUID } from 'node:crypto';
import { sql } from './db';


export class DatabasePostgres {

    list(search) {
        let videos

        if (search) {
            videos = sql`
            SELECT * FROM videos
            WHERE title ILIKE ${search}
            OR description ILIKE ${search}
            `;
        } else {
            videos = sql`
            SELECT * FROM videos
            `;
        }

        return videos;
    }

    create(video) {
        
    }

    update(id, video) {
       
    }

    delete(id) {
        
    }
}