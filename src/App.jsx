import './App.css' 
import {BrowserRouter , Route , Routes } from "react-router-dom"
import { Navbar } from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import DashMessage from './Components/Common/DashMessage'

function App() { 

  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
