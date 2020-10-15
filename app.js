const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const app = express();

const server = http.createServer(app);

const io = socketIo(server);

io.on("connection", (socket) => {
  console.log('Client connected')
  console.log( socket.client.conn.server.clientsCount + " users connected" );

  socket.on("clicked", (data) => {
    io.sockets.emit("newMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    console.log( socket.client.conn.server.clientsCount + " users connected" );
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
