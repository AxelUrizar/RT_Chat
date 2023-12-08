import { useUserStore } from "../store/useUserStore"

export const UserList = () => {
  const { users } = useUserStore()
  return (
    <div className="my-5">
      <h2 className="font-bold text-center">Online Users</h2>
      <ul className="flex justify-center items-center gap-4">
        {users.map((user, index) => (
          <li key={index} className="text-center">{user}</li>
        ))}
      </ul>
    </div>
  )
}
