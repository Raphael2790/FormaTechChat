const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const {addUser, removeUser, getUser, allUsers} = require('./user');

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

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const client = getUser(socket.id);

    io.emit('message', {client:client.name, text:message});

    callback();
  })

  socket.on('disconnect', () => {
    console.log('Um usuário desconectou')
  })
});

app.use(router);
app.use(cors());

server.listen(PORT, () => {
  console.log(`Servidor inciado na porta ${PORT}`)
})
