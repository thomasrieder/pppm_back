const express = require('express');
const cors = require('cors');
const {addVideo, addUser, addUserWatchTimeVideo} = require("./crud")

const app = express();
const port = 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  addVideo("blblb", "uuuuurl", (err, data) => {
    if(err) {
      res.status(500).send(err.message)
    } else {
      res.status(201).send("New video with ID : " + data.id)
    }
  })
});

app.post('/addVideoWTUser', (req, res) => {
  data = req.body

  console.log("addVideoWTUser: "+data.userId+", "+data.videoId+", "+data.watchTime)
  addUserWatchTimeVideo(data.userId, data.videoId, data.watchTime, (err, data) => {
    if (err) {
      console.error(err.message)
      res.status(500).send(err.message)
    } else {
      res.status(201).send("addVideoWTUser with ID : " + data.id)
    }
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});