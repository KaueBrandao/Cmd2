import Home from './pages/home'
import Header from './components/header'
import Login from './pages/login'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
