import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./Components/Home"
import SignUp from './Components/signIn_signUp/SignUp'
import SignIn from './Components/signIn_signUp/SignIn'
import AuthProvider from './Components/Context/auth_context'
import Navbar from './Components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <Navbar/> */}
        {/* <Home/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
