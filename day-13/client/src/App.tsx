import { Route, Routes } from "react-router-dom"
import Books from "./pages/Books"
import Register from "./pages/Register"
import Login from "./pages/Login"
import MyBooks from "./pages/MyBooks"


function App() {

  return (
   <Routes>
    <Route path="/" element={<Books />} />
    <Route path="/mybooks" element={<MyBooks />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
   </Routes>
  )
}

export default App
