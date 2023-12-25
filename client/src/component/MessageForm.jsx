import { useEffect, useState } from 'react'
import { useSocketStore } from '../store/useSocketStore.js'
import { useUserStore } from '../store/useUserStore.js'

export const MessageForm = ({ setMessages }) => {
  const [message, setMessage] = useState('')
  const { socket } = useSocketStore()
  const { user } = useUserStore()

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(state => [...state, message])
    })

    socket.on('join', (userName) => {
      setMessages(state => [...state, { user: 'Bot', message: `${userName} has joined the chat!` }])
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    socket.emit('message', { user, message })
    setMessages(state => [...state, { user: 'Tú', message }])
    setMessage('')
  }

  return (
    <form className="w-full justify-self-end flex gap-3" onSubmit={handleSubmit} >
      <input
        className="border-2 border-gray-300 rounded-3xl flex-grow p-2"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button className="bg-violet-500 hover:bg-violet-600 transition-all text-white font-bold py-2 px-4 rounded-3xl" type="submit" >Send</button>
    </form>
  )
}
