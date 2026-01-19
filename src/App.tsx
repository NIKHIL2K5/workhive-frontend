import './App.css'

import { Route, Routes } from "react-router-dom"

import Home from './pages/Home'
import Signin from './pages/Authentication/Signin'
import Signup from './pages/Authentication/Signup'
import {Preload} from './pages/Preload'

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
  return (
    <Routes>
      <Route path="/" element={<Preload/>}/>

      <Route path="/Home" element={<Home/>}/>
      <Route path="/Home/Signin" element={<Signin/>}/>
      <Route path="/Home/Signup" element={<Signup/>}/>

      <Route path="/Client/Dashboard" element={<ClientDashboard/>}/>
      <Route path="/Client/Findfreelancer" element={<Findfreelancer/>}/>
      <Route path="/Client/FreelanceRequest" element={<FreelancerRequest/>}/>

      <Route path="/Freelancer/Dashboard" element={<FreelancerDashboard/>}/>
      <Route path="/Freelancer/Skill" element={<FreelanceSkill/>}/>
      <Route path="/Freelancer/Oppertunity" element={<Freelanceroppertunity/>}/>

      <Route path="/Common/CreatorMarket" element={<CreatorMarket/>}/>
      <Route path="/Common/Socialmedia" element={<Socialmedia/>}/>
      <Route path="/Common/Tinder" element={<Tinder/>}/>
      
    </Routes>
  )
}




export default App
