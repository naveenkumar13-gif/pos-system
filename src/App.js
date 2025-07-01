import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, Orders, Header } from './pages'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
