const Database = require('better-sqlite3');

const db = new Database(':memory:');

db.exec(`
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT
)
`);

db.prepare(
  'INSERT INTO users (name) VALUES (?)'
).run('Swapon');

const rows = db.prepare('SELECT * FROM users').all();

console.log(rows);