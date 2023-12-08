// MessageForm component can send messages using socket.emit('message', message)
import { useState } from 'react'
import { useSocket } from '../hooks/useSocket.js'

export const MessageForm = () => {
  const [message, setMessage] = useState('')
  const { socket } = useSocket()

  const handleSubmit = (event) => {
    event.preventDefault()
    socket.emit('message', { user, message })
    setMessage('')
  }

  return (
    <form
      className="flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="border-2 border-gray-300 rounded-md w-1/2 p-2"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Send
      </button>
    </form>
  )
}
