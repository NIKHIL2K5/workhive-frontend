import './App.css'

import { Route, Routes, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import Home from './pages/Home'
import Signin from './pages/Authentication/Signin'
import Signup from './pages/Authentication/Signup'

import { Preload } from './pages/Preload'
import Notfound from './pages/Notofound'

import ClientDashboard from './pages/Workhive - Client/ClientDashboard'
import Findfreelancer from './pages/Workhive - Client/Findfreelancer'
import FreelancerRequest from './pages/Workhive - Client/FreelanceRequest'

import FreelancerDashboard from './pages/Workhive - Freelancer/FreelancerDashboard'
import FreelanceSkill from './pages/Workhive - Freelancer/FreelanceSkill'
import Freelanceroppertunity from './pages/Workhive - Freelancer/Freelanceroppertunity'

import CreatorMarket from './pages/Common/CreatorMarket'
import Socialmedia from './pages/Common/SocialMedia'
import Tinder from './pages/Common/Tinder'

function App() {
  const [showPreload, setPreload] = useState<boolean>(false)
  const [leaving, setIsleaving] = useState<boolean>(false)
  const [prepareToExit, setPrepareToExit] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    const hasSeenPreload = sessionStorage.getItem("hasSeen")
    if (!hasSeenPreload) {
      setPreload(true)
    }

    const exitTimer = setTimeout(() => {
      setIsleaving(true)
    }, 4500)

    const isExiting = setTimeout(() => {
      setPrepareToExit(true)
    }, 3000)

    const timer = setTimeout(() => {
      sessionStorage.setItem("hasSeen", "true")
      setPreload(false)
      setIsleaving(false)
      navigate("/Home")
    }, 4500)
    return () => {
      clearTimeout(timer)
      clearTimeout(exitTimer)
    }

  }, [navigate])

  // if (showPreload) {
  //   return <Preload isLeaving={leaving} isExiting={prepareToExit} />
  // }

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Home/Signin" element={<Signin />} />
      <Route path="/Home/Signup" element={<Signup />} />

      <Route path="/Client/Dashboard" element={<ClientDashboard />} />
      <Route path="/Client/Findfreelancer" element={<Findfreelancer />} />
      <Route path="/Client/FreelanceRequest" element={<FreelancerRequest />} />

      <Route path="/Freelancer/Dashboard" element={<FreelancerDashboard />} />
      <Route path="/Freelancer/Skill" element={<FreelanceSkill />} />
      <Route path="/Freelancer/Oppertunity" element={<Freelanceroppertunity />} />

      <Route path="/Common/CreatorMarket" element={<CreatorMarket />} />
      <Route path="/Common/Socialmedia" element={<Socialmedia />} />
      <Route path="/Common/Tinder" element={<Tinder />} />

      <Route path="*" element={<Notfound />} />

    </Routes>

    {showPreload && <Preload isLeaving={leaving} isExiting={prepareToExit} />}
  </>
  )
  
}




export default App
