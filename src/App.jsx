import { useState } from 'react'
import SignIn from './(auth)/SignInModule/SignIn'
import SignUp from './(auth)/SignUpModule/SignUp'
import Project from './Pages/ProjectModule/Project';
import Create from './Pages/CreateModule/Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomeModule/Home';
import ActivityCard from '../Components/ActivityCardModule/ActivityCard';
import logo from './assets/Aligned_logo.png'

function App() {

  return (
    // <ActivityCard
    // title="Project1"
    // subtitle="Working on crocheting for a really really really long time"
    // thumbnail="src/assets/Aligned_logo.png"
    // />
    

    <>
      <Router>
        <Routes>
          // <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Create" element={<Create />} />
        </Routes>
      </Router>
    </>


  )
}

export default App
