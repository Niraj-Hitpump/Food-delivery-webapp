import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import{ Routes,  Route } from "react-router-dom"
import Add from "./pages/add/Add"
import List from "./pages/List/List"
import Order from "./pages/order/Order"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const App = () => {
    const url="https://food-delivery-webapp-2.onrender.com";
  return (
    <>
    <ToastContainer/>
    <Navbar/>
    <hr />
    <div className="app-content">
      <Sidebar/>
      <Routes>
      <Route path="/add" element={<Add url={url}/>}/>
      <Route path="/list" element={<List url={url}/>}/>
      <Route path="/orders" element={<Order url={url}/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
