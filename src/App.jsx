// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Miniatura from './pages/Miniatura'
import Sobre from './pages/Sobre'


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Miniaturas/:id' element={<Miniatura />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App