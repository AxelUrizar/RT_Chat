import { useUserStore } from "../store/useUserStore"

export const UserList = () => {
  const { users } = useUserStore()
  return (
    <div className="p-4 md:p-8 bg-zinc-800 rounded-xl">
      <h2 className="font-bold text-center bg-zinc-900 px-4 py-2 rounded-3xl">Online Users</h2>
        <ul className="flex md:flex-col justify-center items-center gap-4 mt-5">
          {users.map((user, index) => (
            <li key={index} className="text-center font-bold">{user}</li>
          ))}
        </ul>
    </div>
  )
}
