const sqlite3 = require('sqlite3').verbose();
const dbName = "pppmDataBase.db"

let db = new sqlite3.Database(dbName, (err) => {
    if(err) {
        console.error(err.message)
    } else {
        console.log("connected to db")
        db.run(`
            CREATE TABLE IF NOT EXISTS T_VIDEOS
            (
                videoId INTEGER PRIMARY KEY,
                name TEXT,
                url TEXT
            )
        `)

        db.run(`
            CREATE TABLE IF NOT EXISTS T_USERS
            (
                userId INTEGER PRIMARY KEY,
                username TEXT,
                password TEXT
            )
        `)

        db.run(`
            CREATE TABLE IF NOT EXISTS T_USERS_WATCHTIME_BY_VIDEOS
            (
                watchTime DOUBLE,
                videoId INTEGER NOT NULL,
                userId  INTEGER NOT NULL,
                FOREIGN KEY(videoId) REFERENCES T_VIDEOS(videoId),
                FOREIGN KEY(userId) REFERENCES T_USERS(userId)
            )
        `)
    }
})

module.exports = db