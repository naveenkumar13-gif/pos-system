import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, Orders, Header } from './pages'
import Table from './pages/tables'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/table" element={<Table />} />
          
          
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
