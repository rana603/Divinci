import './App.css'
import Navbar from "./Components/Navabr/navabar"
import Home from "./Components/home'/Home";
import Sidebar from "./Components/sidebar/sidebar"
import Product from './Components/userlist/Product';
import {  Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
      {/* <Route path="/user/:userId">
            <User />
          </Route> */}
      <Routes>
        <Route path="/product/:productId" element={<Product/>} />
        {/* <Route path="/login" element={<LoginScreen/>} /> */}
      
      </Routes>
    </div>


  );
}

export default App;
