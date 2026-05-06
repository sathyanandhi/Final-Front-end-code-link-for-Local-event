import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signuppage from './Components/Signuppage'
import { Router, Routes, Route, useLocation, } from 'react-router-dom';
import Navbarpage from './Components/Navbarpage'
import Home from './Components/Home'
import AdminUserlogin from './Components/AdminUserlogin'
import Services from './Components/Services'
import Events from './Components/Events'
import About from'./Components/About'
import Admindashboard from './Components/Admindashboard'
import Adminbookingform from './Components/Adminbookingform'
import Userbookingform from './Components/Userbookingform'
import Userdashboard from './Components/Userdashboard'
import Userdetailadminpage from './Components/Userdetailadminpage'
import Admindashboard1 from './Components/Admindashboard1'
import Userdashboard1 from './Components/Userdashboard1'
import ProtectedRoute from './Components/ProtectedRoute';

import Imagedisplay from './Components/Imagedisplay'
import Gallery from './Components/Gallery'
import Imageupload from './Components/Imageupload'
import Userdetailuserpage from './Components/Userdetailuserpage'
import Userdetaileditpage from './Components/Userdetaileditpage'
import Userprofile from './Components/Userprofile'
import Viewprofile from './Components/Viewprofile'
import Profile from './Components/Profile'
import UserdashboardHome from './Components/UserdashboardHome'
import Eventbookingdetail from './Components/Eventbookingdetail'
import DashboardStats from './Components/DashboardStats'
import CommunityFeed from './Components/CommunityFeed'
import AdminCommunityFeed from './Components/AdminCommunityFeed'
// import Editsignuppage from './Components/Editsignuppage'
function App() {
  const location = useLocation();
  
  // Define paths where the navbar should be hidden
  const hideNavbarPaths = [ '/adminbookingform','/userbookingform','/viewprofile/','/userdashboard/', '/profile','/404','/imagedisplay','/admindashboard','/admindashboard1','/gallery','/userdashboard1','/userdetailadminpage','/userdetailuserpage','/userdetaileditpage',];

const shouldHideNavbar = hideNavbarPaths.some(path => location.pathname.startsWith(path));
  return (
    <>
        
    {!shouldHideNavbar && <Navbarpage />}
      
      <main>
    <Routes>     
      <Route path='/signup' element= {<Signuppage/>}/>
       <Route path='/signup/:id' element= {<Signuppage/>}/>
      <Route path='/adminuserlogin' element={<AdminUserlogin/>}/>
      <Route path='/adminuserlogin/:id' element={<AdminUserlogin/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element= {<About/>}/>       
      <Route path='/service' element={<Services/>}/>



   <Route path="/admindashboard" element={<Admindashboard />}>
  <Route index element={<DashboardStats />} />
  <Route path="userdetail" element={<Userdetailadminpage />} />
  <Route path="events" element={<Admindashboard1 />} />
  
  {/* CHANGE THIS: Match the Sidebar path '/admindashboard/admincommunityfeed' */}
  <Route path="admincommunityfeed" element={<AdminCommunityFeed />} />
  
  <Route path="logout" element={<Home />} />
</Route>






      <Route path='/admindashboard' element={<Admindashboard/>}/>
      <Route path='/adminbookingform' element={<Adminbookingform/>}/>
      <Route path='/adminbookingform/:id' element={<Adminbookingform/>}/>
      <Route path='/userdashboard' element={<Userdashboard/>}/>

{/* Parent Route with ID */}
<Route path='/userdashboard/:id' element={<ProtectedRoute><Userdashboard /></ProtectedRoute>}>
  
  {/* Renders at /userdashboard/123 */}
  <Route index element={<UserdashboardHome />} /> 
  
  {/* Renders at /userdashboard/123/viewprofile */}
  {/* Note: Removed :id from sub-path because the parent already has it */}
  <Route path='viewprofile' element={<Viewprofile />} />
  
  {/* Renders at /userdashboard/123/events */}
  <Route path='events' element={<Userdashboard1 />} />
    <Route path="community" element={<CommunityFeed/>} /> 
    <Route path='logout' element={<Home />} />
    <Route path='eventbookingdetail' element={<Eventbookingdetail/>}/>
</Route>





                            {/* <Route path='/userdashboard/:id' element={<ProtectedRoute><Userdashboard/></ProtectedRoute>}/>
            <Route path='/userdashboardhome/:id' element={<UserdashboardHome/>}/> */}

    
      <Route path='/userbookingform' element={<Userbookingform/>}/>
      <Route path="/userbookingform/:eventId" element={<Userbookingform />} />

     <Route path='/userdetailadminpage' element={<Userdetailadminpage/>}/>
      <Route path='/admindashboard1' element={<Admindashboard1/>}/>
      <Route path='/userdashboard1' element={<Userdashboard1/>}/>
       <Route path='/userdashboard1/:id' element={<Userdashboard1/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/imagedisplay' element={<Imagedisplay/>}/>
      <Route path='/imageupload' element={<Imageupload/>}/>
      <Route path='/userdetailuserpage' element={<Userdetailuserpage/>}/>
       <Route path='/userdetailuserpage/:id' element={<Userdetailuserpage/>}/>
      <Route path='/userdetaileditpage ' element={<Userdetaileditpage/>}/>
      <Route path='/userprofile' element={<Userprofile/>}/>
      <Route path='/viewprofile' element={<Viewprofile/>}/>

       <Route path='/viewprofile/:id' element={<Viewprofile/>}/>
        <Route path='/profile' element={<Profile/>}/>
        {/* <Route path='/editsignuppage' element={<Editsignuppage/>}/> */}
    </Routes>
</main>
  
          {/* <Admindashboard1/> */}
    </>
  )
}

export default App
