import { useSocketStore } from "../store/useSocketStore"
import { useUserStore } from "../store/useUserStore"
import { useNavigate } from "react-router-dom"

export function UserForm () {
  const { setUser } = useUserStore()
  const { socket } = useSocketStore()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    setUser(username)
    socket.emit('join', username)
    navigate('/chat')
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <label htmlFor="username" className="text-2xl text-center">
          Enter your username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="border-2 border-black rounded-md p-2 m-2"
        />
        <button
          type="submit"
          className="border-2 border-black rounded-md p-2 m-2"
        >
          Enter
        </button>
      </form>
    </div>
  )
}
