import { sql } from "./db.js";

sql `
CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTERVAL
);
`.then(() => {
    console.log("Table created");
}).catch((error) => {
    console.error("Error creating table", error);
});
