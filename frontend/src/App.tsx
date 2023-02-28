import './App.css'
import { Outlet } from 'react-router'
import Main from './components/Main'
import Project from './components/Projects'

function App() {


  return (
    <div>
        <Outlet/>
        <Main/>
        <Project/>
    </div>
  )
}

export default App
