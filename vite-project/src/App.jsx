
import './App.css'
import AllRoutes from './components/AllRoutes'
import Navbar from './components/Navbar'

function App() {
  let usersData=[];
  localStorage.setItem('users',JSON.stringify(usersData))
  return (
    <>
         <Navbar />
         <AllRoutes />
    </>
  )
}

export default App
