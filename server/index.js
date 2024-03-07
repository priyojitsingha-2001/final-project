// imports
const { createServer } = require('http');
const cors = require('cors');
const express = require('express');
const { Server } = require('socket.io');
const PORT = 3000;


const app = express();// created a instance of express app
app.use(cors())
const server = createServer(app);//created a http server and passing the express app as handler
//creatng a socket.io server instance and associating it with the http server
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
});


io.on('connection', socket => {
    console.log("New user joined " + socket.id);
})

//started the server at PORT
server.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
});