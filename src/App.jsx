import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './routes'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
