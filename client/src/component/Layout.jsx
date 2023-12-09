import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white py-10 px-20 flex flex-col items-center">
      <h2 className="text-3xl text-center">Real Time Online Chat</h2>
      <Outlet />
    </div>
  )
}
