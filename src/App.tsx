import { Outlet } from "react-router"
import Navbar from "./Navbar/Navbar"



function App() {


  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
