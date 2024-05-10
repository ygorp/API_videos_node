import { sql } from "./db.js";

//sql `DROP TABLE IF EXISTS videos;`.then(() => {
  //  console.log("Table dropped");
//}).catch((error) => {
  //  console.error("Error dropping table", error);
//});


sql `
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
);
`.then(() => {
    console.log("Table created");
}).catch((error) => {
    console.error("Error creating table", error);
});