import { Chat } from "./component/Chat"
import { Home } from "./component/Home"
import { Layout } from "./component/Layout"
import { UserForm } from "./component/UserForm"
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <Routes>
      <Route path="/RT_Chat" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/RT_Chat/form" element={<UserForm />} />
        <Route path="/RT_Chat/chat" element={<Chat />} />
      </Route>
    </Routes>
  )
}
