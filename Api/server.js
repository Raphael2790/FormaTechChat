const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const {addUser, removeUser, getUser, allUsers} = require('./user.js');

const PORT = process.env.PORT || 5000;

const router = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  socket.on('join', ({name}, callback) => {
    const { error, user} =  addUser({id:socket.id,name});
    if(error) return callback(error);

    socket.emit('message', {user:'admin', text:`${user.name},Bem-Vindo ao chat FormaTech`});
    socket.broadcast.emit('message', {user:'admin', text:`${user.name}, entrou no chat!`})

    socket.join(user);

    //io.emit('roomData', {users:allUsers(users.name)})

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.emit('message', {user:user.name, text:message});
    //io.emit('roomData', {users:allUsers(users.name)} )

    callback();
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.emit('message', {user:'admin', text:`${user.name} saiu`})
    }
  })
});

app.use(router);
app.use(cors());

server.listen(PORT, () => {
  console.log(`Servidor inciado na porta ${PORT}`)
})
