import './App.css' 
import {BrowserRouter , Route , Routes } from "react-router-dom"
import { Navbar } from './Components/Common/Navbar'

function App() { 

  return (
    <>
        <BrowserRouter>
            <Navbar>

            </Navbar>
        </BrowserRouter>
    </>
  )
}

export default App
