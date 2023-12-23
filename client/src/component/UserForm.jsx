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
    navigate('/RT_Chat/chat')
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-5">
        <label htmlFor="username" className="text-2xl">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="border-2 border-black rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-violet-500 font-bold rounded-md py-2 px-4"
        >
          Enter
        </button>
      </form>
    </div>
  )
}
