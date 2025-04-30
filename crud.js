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

module.exports = {addVideo, addUser, addUserWatchTimeVideo}