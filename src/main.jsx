import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AuthStore from './context/auth.Context.jsx'
import TaskStore from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
   
     <AuthStore>
         <TaskStore>
             <BrowserRouter>
            <App />
         </BrowserRouter>

         </TaskStore>
        
   
     </AuthStore>
   
  
)
