import React from 'react'
import Login from './components/Login'
import { Routes , BrowserRouter , Route} from 'react-router-dom'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/dashboard"  element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App