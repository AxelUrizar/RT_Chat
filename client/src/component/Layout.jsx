import { useEffect } from 'react'
import { useSocket } from '../hooks/useSocket.js'
import { Outlet } from 'react-router-dom'
import { useUserStore } from '../store/useUserStore.js'

export function Layout() {
  const { getSocket } = useSocket()
  const { user } = useUserStore()

  useEffect(() => {
    getSocket()
  }, [])

  return (
    <div className="min-w-full min-h-screen">
      <h2 className="text-3xl text-center">Real Time Online Chat</h2>
      {user}
      <Outlet />
    </div>
  )
}
