import Header from "./Components/Header"
import {Routes,Route} from  "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/login"
import AddTask from "./pages/AddTask";
import AllTask from "./pages/AllTask";


import './index.css'
import './App.css'
import EditTask from "./pages/EditTask";


 
function App() {
 
  

  return (
        
      <div className="app">
         
           
        <Routes >
          
          <Route path="/" element={<Home/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/add-task" element={<AddTask/>}/>
          <Route path="/all-task" element={<AllTask/>}/>
          <Route  path="/edit-task"  element={<EditTask/>} />
          

        </Routes>



            
       
      </div>
   
   
  )
}

export default App
