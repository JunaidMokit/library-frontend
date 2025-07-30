import { Outlet } from "react-router"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"



function App() {


  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
