import './App.css' 
import {BrowserRouter , Route , Routes } from "react-router-dom" 
import { Navbar } from './Components/Navbar' 
import Dashboard from './Components/Dashboard' 
import Incidents from './Components/Incidents' 
import NewIncident from './Components/NewIncident' 
import Describes from './Components/Describes'
import TitleType from './Components/TitleType'
import {IncidentMap} from "./Components/IncidentMap"
import Locations from './Components/Locations'

function App() { 
  return ( 
  <> 
    <BrowserRouter> <Navbar /> 
      <Routes> 
            <Route path='/' element={<Dashboard />} /> 
            <Route path='/Incidents' element={<Incidents />} />
            <Route path='/Locations' element={<Locations />} />
            <Route path='/Incidents/NewIncident' element={<NewIncident />} />
            <Route path='/Incidents/NewIncident/Describes' element={<Describes />} /> 
            <Route path='/Incidents/NewIncident/Describes/TitleType' element={<TitleType />} /> 
            <Route path='/Incidents/NewIncident/Describes/TitleType/IncidentMap' element={<IncidentMap />} /> 
      </Routes> 
    </BrowserRouter> 
     
  </> 
  )} 
  export default App