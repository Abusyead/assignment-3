import './App.css' 
import {BrowserRouter , Route , Routes } from "react-router-dom"
import { Navbar } from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import Incidents from './Components/Incidents'
import NewIncident from './Components/NewIncident'

function App() { 

  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/Incidents' element={<Incidents />} />
              <Route path="/Incidents/NewIncident" element={<NewIncident />} />

            </Routes>
        </BrowserRouter> 
        {/* <NewIncident /> */}
    </>
  )
}

export default App
