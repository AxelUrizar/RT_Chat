import express from 'express'
import { createServer } from 'http'
import cors from 'cors'
import { Server } from 'socket.io'

const PORT = process.env.PORT || 5000
const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is running')
})

io.on('connection', (socket) => {
  console.log('New User Connected: ' + socket.id)

  socket.on('message', (data) => {
    socket.broadcast.emit('message', data)
  })


  socket.on('disconnect', () => console.log('User disconnected: ' + socket.id))
})

httpServer.listen(PORT, () => {
  console.log('Listening on port: ' + PORT)
})
