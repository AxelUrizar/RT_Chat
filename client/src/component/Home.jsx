import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-36">
      <h2 className="text-5xl text-center font-bold">Real Time Online Chat</h2>
      <Link to="/RT_Chat/form" className="bg-violet-500 hover:bg-violet-600 font-bold transition px-4 py-2 rounded-3xl">Enter the room</Link>
    </div>
  )
}
