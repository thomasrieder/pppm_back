const db = require("./database")

const addVideo = (name, url, callback) => {
    const sql = `INSERT INTO T_VIDEOS (name, url) VALUES (?, ?)`
    db.run(sql, [name, url], function(err) {
        callback(err, {id: this.lastID})
    })
}

const addUser = (username, password, callback) => {
    const sql = `INSERT INTO T_USERS (username, password) VALUES (?, ?)`
    db.run(sql, [username, password], function(err) {
        callback(err, {id: this.lastID})
    })
}

const addUserWatchTimeVideo = (userId, videoId, watchtime, callback) => {
    const sql = `INSERT INTO T_USERS_WATCHTIME_BY_VIDEOS (watchTime, videoId, userId) VALUES (?, ?, ?)`
    db.run(sql, [watchtime, videoId, userId], function(err) {
        callback(err, {id: this.lastID})
    })
}

const getUserByUserName = (userName, callback) => {
    const sql = `SELECT * FROM T_USERS WHERE username = ?`
    db.all(sql, [userName], function(err, rows) {
        if (rows.length != 1){
            callback(err, null)
        } else {

            callback(err, rows[0])
        }
    })
}

module.exports = {
    addVideo, addUser, addUserWatchTimeVideo,
    getUserByUserName
}