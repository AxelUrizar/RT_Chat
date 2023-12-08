import { Chat } from "./component/Chat"
import { Layout } from "./component/Layout"
import { UserForm } from "./component/UserForm"
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<UserForm />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  )
}
