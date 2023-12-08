import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="min-w-full min-h-screen py-10 px-20">
      <h2 className="text-3xl text-center">Real Time Online Chat</h2>
      <Outlet />
    </div>
  )
}
