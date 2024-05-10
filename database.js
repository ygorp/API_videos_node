import { randomUUID } from 'node:crypto';


export class databaseMemory {
    #videos = new Map();

    list() {
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0];
            const video = videoArray[1];

            return {
                id,
                ...video,
            };
        });
    }

    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video);
    }

    update(id, video) {
        this.#videos.set(id, video);
    }

    delete(id) {
        this.#videos.delete(id);
    }
}