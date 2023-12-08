import { useEffect, useState } from 'react'
import { useSocket } from '../hooks/useSocket.js'
import { useUser } from '../hooks/useUser.js'

import { UserForm } from '../component/UserForm.jsx'
import { MessageForm } from '../component/MessageForm.jsx'
// import { MessageList } from '../component/MessageList.jsx'

export function Chat() {
  const { getSocket } = useSocket()
  const { user } = useUser()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getSocket()
  }, [])

  return (
    <div>
      <h2 className="text-3xl text-center">Real Time Online Chat</h2>
          {/* <MessageList messages={messages} /> */}
          <MessageForm setMessages={setMessages} />
    </div>
  )
}
