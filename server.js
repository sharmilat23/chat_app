// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // For development only. Use specific origin in production.
    methods: ["GET", "POST"]
  }
});

let rooms = {};
let users = {};

io.on("connection", (socket) => {
  socket.on("enterRoom", ({ name, room }) => {
    socket.join(room);
    users[socket.id] = { name, room };
    if (!rooms[room]) rooms[room] = [];
    if (!rooms[room].some(u => u.name === name)) rooms[room].push({ name });
    io.to(room).emit("userList", { users: rooms[room] });
    io.emit("roomList", { rooms: Object.keys(rooms) });
    socket.to(room).emit("message", {
      name: "Admin",
      text: `${name} joined the room.`,
      time: new Date()
    });
  });

  socket.on("message", ({ name, text }) => {
    const user = users[socket.id];
    if (user && user.room) {
      io.to(user.room).emit("message", {
        name,
        text,
        time: new Date()
      });
    }
  });

  socket.on("activity", (name) => {
    const user = users[socket.id];
    if (user && user.room) {
      socket.to(user.room).emit("activity", name);
    }
  });

  socket.on("disconnect", () => {
    const user = users[socket.id];
    if (user && user.room) {
      rooms[user.room] = rooms[user.room].filter(u => u.name !== user.name);
      io.to(user.room).emit("userList", { users: rooms[user.room] });
      socket.to(user.room).emit("message", {
        name: "Admin",
        text: `${user.name} left the room.`,
        time: new Date()
      });
      if (rooms[user.room].length === 0) delete rooms[user.room];
      io.emit("roomList", { rooms: Object.keys(rooms) });
    }
    delete users[socket.id];
  });
});

server.listen(8000, () => {
  console.log("Socket.IO server running on http://localhost:8000");
});