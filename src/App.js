import './App.css'
import Navbar from "./Components/Navabr/navabar"
import Home from "./Components/home'/Home";
import Sidebar from "./Components/sidebar/sidebar"


function App() {
  return (
    
   <>
      <Navbar/>
      <div className="container">
        <Sidebar />
        <Home/>
        </div>
        </>
        
    
  );
}

export default App;
