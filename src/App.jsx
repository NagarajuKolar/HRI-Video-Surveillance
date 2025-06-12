
import Navbar from './Components/Navbar'
import Home from  './Components/Home'
import About from './Components/Aboutus'
import Uploads from './Components/Uploads'
import { Route,Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
       <Route path='/aboutus' element={<About/>} />
         <Route path='/uploads' element={<Uploads/>} />

    </Routes>
    </>
  )
}

export default App
