const http = require("http");
const express = require("express");
const app = express();
const io = require('socket.io');

let id = 1;

const httpServer = http.createServer(app);

const socketServer = io(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

socketServer.on("connection", (socket) => {
  console.log('연결됨?', socket.id)
  socket.on('chatting', (data) => {
    console.log(data);
    socketServer.emit('chatting', { ...data, id });
    id++;
    return;
  });

})

httpServer.listen(3333, () => console.log(`server is running 3333`));