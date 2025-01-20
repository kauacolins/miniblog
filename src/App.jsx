import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
