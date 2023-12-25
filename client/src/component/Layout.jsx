import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white py-3 px-8 flex flex-col items-center">
      <Outlet />
    </div>
  )
}
