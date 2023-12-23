import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/useUserStore.js'

import { MessageForm } from '../component/MessageForm.jsx'
import { MessageList } from './MessageList.jsx'
import { UserList } from './UserList.jsx'
import { useSocketStore } from '../store/useSocketStore.js'

export function Chat() {
  const [messages, setMessages] = useState([{ user: 'Bot', message: 'Welcome to the chat!' }])
  const { user, addUsers, setUsers, removeUsers } = useUserStore()
  const { socket } = useSocketStore()
  const navigate = useNavigate()

  // WARN: Los usuarios aún quedan conectados al socket al volver a la página de inicio haciendo que la lista de usuarios se llene más y más.

  useEffect(() => {
    if (!user) {
      navigate('/RT_Chat')
    }

    socket.on('join', (userName) => addUsers(userName))
    socket.on('getRoomUsers', (users) => setUsers(users))
    socket.on('leave', (userName) => {
      setMessages(state => [...state, { user: 'Bot', message: `${userName} has left the chat` }])
      removeUsers(userName)
      socket.emit('getRoomUsers')
    })
  }, [])

  useEffect(() => {
    socket.emit('getRoomUsers')
  })

  return (
    <div id='chat' className='h-full min-w-full flex flex-col justify-start py-5'>
      <UserList />
      <hr />
      <MessageList messages={messages} />
      <MessageForm setMessages={setMessages} />
    </div>
  )
}
