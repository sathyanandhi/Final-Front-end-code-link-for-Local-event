// // import React, { useEffect, useState} from "react";
// // import axios from "axios";
// // import { Link, useNavigate,useParams,Outlet } from "react-router-dom";
// // import { LuCalendarClock } from "react-icons/lu";
// // import { HiLocationMarker } from "react-icons/hi";
// // import { FaImage } from "react-icons/fa6";
// // import Container from 'react-bootstrap/Container';
// // import Navbar from 'react-bootstrap/Navbar';
// // import Sidebar from "./Sidebar";
// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';
// // import { Offcanvas, Nav } from 'react-bootstrap'
// // import Sidebar1 from "./Sidebar1";
// // import Viewprofile from "./Viewprofile";
// // import { Home,User, UserCheck,LogOut,Settings,CalendarClock,} from 'lucide-react';
// // import { RiCalendarScheduleFill } from "react-icons/ri";
// // import { FaHome } from "react-icons/fa";
// // import { FiLogOut } from "react-icons/fi";
// // import { FaBuildingUser } from "react-icons/fa6";
// // import { MdAddPhotoAlternate } from "react-icons/md";







// // const Userdashboard = () => {
// //   const navigate =useNavigate()
// //  const { id } = useParams(); // Get the ID from the URL
// //   const [profile, setProfile] = useState("");
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// // const [show, setShow] = useState(false);
// //   // Initialize state to hold the count
// //   const [itemCount, setItemCount] = useState(0);
// //   // 2. Initialize state for loading/error handling (optional)
// //   // const [isLoading, setIsLoading] = useState(true);
// //   // const [error, setError] = useState(null);
// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);
// // const [registeredCount, setRegisteredCount] = useState(0);

// // useEffect(() => {
// //   const fetchUserRegistrations = async () => {
// //     if (!id) return;
// //     try {
// //       // Assuming you have a route that gets participants by user email or ID
// //       const res = await axios.get(`http://localhost:3000/localevent/getMergedData`);
      
// //       // Filter the merged data to count registrations for this specific user
// //       // Match by the user's email or ID stored in your profile state
// //       const userEvents = res.data.filter(reg => reg.email === profile.email);
// //       setRegisteredCount(userEvents.length);
// //     } catch (err) {
// //       console.error("Error fetching user registrations:", err);
// //     }
// //   };

// //   if (profile.email) {
// //     fetchUserRegistrations();
// //   }
// // }, [id, profile.email]);
// // useEffect(() => {
// //   const fetchDashboardData = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //        console.log(token);
// //       // If _id is undefined, axios will call the wrong URL (e.g., .../getuserbyid/undefined)
// //       if (!id) return; 
// //       // alert("hi")
// //       const res = await axios.get(`http://localhost:3000/localevent/getuserbyid/${id}`, {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });
       

      
// //       console.log("Response Data:", res.data.result);
// //       setProfile(res.data.result);
// //       const userdata=res.data.result
// //       setProfile(userdata);
// //       console.log(profile);
// //       console.log(id);
// //       if (userdata && userdata._id) {
// //         sessionStorage.setItem('sessionId', userdata._id);
// //         console.log("Session ID stored successfully:", userdata._id);
// //       }

// //       setLoading(false); // Make sure to set loading to false
// //     } catch (err) {
// //       console.log("Error in data", err);
// //       setLoading(false);
// //     }
// //   };
// //   if (id){
// //   fetchDashboardData();
// //   }
// // }, [id]);


        
// //       //   useEffect(() => {
// // //     const fetchProfile = async () => {
// // //       try {
// // //         // Construct the API URL using the user ID
// // //           const token=localStorage.getItem("token");
// // //   console.log(token);
// // //         const response = await axios.get(`http://localhost:3000/localevent/getuserbyid/${_id}`,
// // //           {
// // //     headers:{Authorization:`Bearer ${token}` }
// // //   })
        
// // //         const profileData = response.data.result;
// // //         setProfile(profileData);
// // //         // console.log(profileData._id);
        

// // //         setLoading(false);

// // //       } catch (err) {
// // //         setError(err.message);
// // //         setLoading(false);
// // //       }
// // //     };

// // //     if (_id) {
// // //       fetchProfile(); 
// // //       // navigate(`/viewprofile/${id}`)
// // //     }
    
// // //   }, [_id]); // Re-run if the ID changes
// // useEffect(() => {
// //     const fetchItemCount = async () => {
      
// //         // Make the GET request to the API
// //         const response = await axios.get('http://localhost:3000/localevent/getevent');
        
// //         // Assuming the API returns an array of items, get the length (count)
// //         // Adjust the logic based on your specific API response structure
// //         const count = response.data.result.length; 
        
// //         // Update the state with the count
// //         setItemCount(count);
      
      
// //     };

// //     fetchItemCount();
// //   }, []); // The empty dependency array [] ensures this runs only once on mount

// // //   // 4. Render the component based on the state
  
// //   if (loading) {
// //     return <div>Loading profile...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }
  
// //   // if (!profile) {
// //   //   return <div>Profile not found.</div>;
// //   // }
  
// //   return (
// //        <div className="bg-amber-100" > <h1 className="text-center bg-amber-700 text-white p-2 hover:bg-green-600 cursor-pointer">User Dashboard</h1>
// //       <div className="flex flex-row">
    
// //       <div className="basis-1/8 ">
// //     <div className="h-full   bg-green-100">
      
// //         <Button variant="primary" onClick={handleShow} className="d-lg-none m-2">
// //         ☰ 
// //       </Button>

// //       <Offcanvas 
// //         show={show} 
// //         onHide={handleClose} 
// //         responsive="lg" 
// //         className="bg-dark text-white"
// //       >
// //         <Offcanvas.Header closeButton closeVariant="white">
// //           <Offcanvas.Title>My Dashboard</Offcanvas.Title>
// //         </Offcanvas.Header>
        
// //         <Offcanvas.Body>
// //    <Nav className="flex-column w-100 hover:bg-green-600">
// //   {/* Home / Index */}
// //   <Link to={`/userdashboard/${id}`} className="nav-link text-white p-3 border-bottom">
// //     <FaHome /> Home 
// //   </Link>
  
// //   {/* Profile */}
// //   <Link to={`/userdashboard/${id}/viewprofile`} className="nav-link text-white p-3 border-bottom">
// //     <FaBuildingUser /> Profile
// //   </Link>
  
// //   {/* Events */}
// //   <Link to={`/userdashboard/${id}/events`} className="nav-link text-white p-3 border-bottom">
// //     <RiCalendarScheduleFill /> Events
// //   </Link>
 
// //             <Link to='/' className="text-white py-3">
// //              <FiLogOut /> Logout
// //             </Link>
// //           </Nav>
// //         </Offcanvas.Body>
// //       </Offcanvas>
   

         
        
// // </div>

// //     </div> <Outlet />
    
// // </div>

// //  </div>

    
// //    )}
  

// // export default Userdashboard



// import React, { useEffect, useState} from "react";
// import axios from "axios";
// import { Link, useNavigate,useParams,Outlet } from "react-router-dom";
// import { LuCalendarClock } from "react-icons/lu";
// import { HiLocationMarker } from "react-icons/hi";
// import { FaImage } from "react-icons/fa6";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Sidebar from "./Sidebar";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Offcanvas, Nav } from 'react-bootstrap'
// import Sidebar1 from "./Sidebar1";
// import Viewprofile from "./Viewprofile";
// import { Home,User, UserCheck,LogOut,Settings,CalendarClock,} from 'lucide-react';
// import { RiCalendarScheduleFill } from "react-icons/ri";
// import { FaHome } from "react-icons/fa";
// import { FiLogOut } from "react-icons/fi";
// import { FaBuildingUser } from "react-icons/fa6";
// import { MdAddPhotoAlternate } from "react-icons/md";







// const Userdashboard = () => {
//   const navigate =useNavigate()
//  const { id } = useParams(); // Get the ID from the URL
//   const [profile, setProfile] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
// const [show, setShow] = useState(false);
//   // Initialize state to hold the count
//   const [itemCount, setItemCount] = useState(0);
//   // 2. Initialize state for loading/error handling (optional)
//   // const [isLoading, setIsLoading] = useState(true);
//   // const [error, setError] = useState(null);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
// const [registeredCount, setRegisteredCount] = useState(0);

// useEffect(() => {
//   const fetchUserRegistrations = async () => {
//     if (!id) return;
//     try {
//       // Assuming you have a route that gets participants by user email or ID
//       const res = await axios.get(`http://localhost:3000/localevent/getMergedData`);
      
//       // Filter the merged data to count registrations for this specific user
//       // Match by the user's email or ID stored in your profile state
//       const userEvents = res.data.filter(reg => reg.email === profile.email);
//       setRegisteredCount(userEvents.length);
//     } catch (err) {
//       console.error("Error fetching user registrations:", err);
//     }
//   };

//   if (profile.email) {
//     fetchUserRegistrations();
//   }
// }, [id, profile.email]);
// useEffect(() => {
//   const fetchDashboardData = async () => {
//     try {
//       const token = localStorage.getItem("token");
//        console.log(token);
//       // If _id is undefined, axios will call the wrong URL (e.g., .../getuserbyid/undefined)
//       if (!id) return; 
//       // alert("hi")
//       const res = await axios.get(`http://localhost:3000/localevent/getuserbyid/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
       

      
//       console.log("Response Data:", res.data.result);
//       setProfile(res.data.result);
//       const userdata=res.data.result
//       setProfile(userdata);
//       console.log(profile);
//       console.log(id);
//       if (userdata && userdata._id) {
//         sessionStorage.setItem('sessionId', userdata._id);
//         console.log("Session ID stored successfully:", userdata._id);
//       }

//       setLoading(false); // Make sure to set loading to false
//     } catch (err) {
//       console.log("Error in data", err);
//       setLoading(false);
//     }
//   };
//   if (id){
//   fetchDashboardData();
//   }
// }, [id]);


        
//       //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         // Construct the API URL using the user ID
// //           const token=localStorage.getItem("token");
// //   console.log(token);
// //         const response = await axios.get(`http://localhost:3000/localevent/getuserbyid/${_id}`,
// //           {
// //     headers:{Authorization:`Bearer ${token}` }
// //   })
        
// //         const profileData = response.data.result;
// //         setProfile(profileData);
// //         // console.log(profileData._id);
        

// //         setLoading(false);

// //       } catch (err) {
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };

// //     if (_id) {
// //       fetchProfile(); 
// //       // navigate(`/viewprofile/${id}`)
// //     }
    
// //   }, [_id]); // Re-run if the ID changes
// useEffect(() => {
//     const fetchItemCount = async () => {
      
//         // Make the GET request to the API
//         const response = await axios.get('http://localhost:3000/localevent/getevent');
        
//         // Assuming the API returns an array of items, get the length (count)
//         // Adjust the logic based on your specific API response structure
//         const count = response.data.result.length; 
        
//         // Update the state with the count
//         setItemCount(count);
      
      
//     };

//     fetchItemCount();
//   }, []); // The empty dependency array [] ensures this runs only once on mount

// //   // 4. Render the component based on the state
  
//   if (loading) {
//     return <div>Loading profile...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }
  
//   // if (!profile) {
//   //   return <div>Profile not found.</div>;
//   // }
  
//   return (
//        <div className="bg-amber-100" > <h1 className="text-center bg-amber-700 text-white p-2 hover:bg-green-600 cursor-pointer">User Dashboard</h1>
//       <div className="flex flex-row">
    
//       <div className="basis-1/8 ">
//     <div className="h-full   bg-green-100">
      
//         <Button variant="primary" onClick={handleShow} className="d-lg-none m-2">
//         ☰ 
//       </Button>

//       <Offcanvas 
//         show={show} 
//         onHide={handleClose} 
//         responsive="lg" 
//         className="bg-dark text-white"
//       >
//         <Offcanvas.Header closeButton closeVariant="white">
//           <Offcanvas.Title>My Dashboard</Offcanvas.Title>
//         </Offcanvas.Header>
        
//         <Offcanvas.Body>
//    <Nav className="flex-column w-100 hover:bg-green-600">
//   {/* Home / Index */}
//   <Link to={`/userdashboard/${id}`} className="nav-link text-white p-3 border-bottom">
//     <FaHome /> Home 
//   </Link>
  
//   {/* Profile */}
//   <Link to={`/userdashboard/${id}/viewprofile`} className="nav-link text-white p-3 border-bottom">
//     <FaBuildingUser /> Profile
//   </Link>
  
//   {/* Events */}
//   <Link to={`/userdashboard/${id}/events`} className="nav-link text-white p-3 border-bottom">
//     <RiCalendarScheduleFill /> Events
//   </Link>
 
//             <Link to='/' className="text-white py-3">
//              <FiLogOut /> Logout
//             </Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
   

         
        
// </div>

//     </div> <Outlet />
    
// </div>

//  </div>

    
//    )}
  

// export default Userdashboard





import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams, Outlet, useLocation } from "react-router-dom";
import { Button, Offcanvas, Nav } from 'react-bootstrap';
import { FaHome,FaUsers, FaUserCircle, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

const Userdashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!id) return;
        const res = await axios.get(`https://final-back-end-code-for-local-event.onrender.com/localevent/getuserbyid/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(res.data.result);
        setLoading(false);
      } catch (err) {
        console.error("Dashboard error:", err);
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const navLinks = [
    { name: "Overview", path: `/userdashboard/${id}`, icon: <RiDashboardFill /> },
    { name: "My Profile", path: `/userdashboard/${id}/viewprofile`, icon: <FaUserCircle /> },
    { name: "Events", path: `/userdashboard/${id}/events`, icon: <FaCalendarAlt /> },
        { name: "Community", path: `/userdashboard/${id}/community`, icon: <FaUsers /> },

  ];

  if (loading) return <div className="h-screen flex items-center justify-center bg-slate-50 font-bold text-indigo-600">Initializing Dashboard...</div>;

  return (
       <div className="flex min-h-screen bg-[#c6dcf1] font-sans antialiased text-slate-900 relative overflow-hidden">

   {/* <div className="min-h-screen bg-amber-100 flex flex-col md:flex-row"> */}
      {/* Mesh Gradient Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-100/50 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-100/50 blur-[120px] rounded-full"></div>
      </div>

      {/* --- SIDEBAR (Desktop) --- */}
      <aside className="hidden md:flex w-72 bg-rose-50 border-r border-slate-200 sticky top-0 h-screen flex-col p-6 z-20">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <FaHome size={20} />
          </div>
          <span className="font-black text-xl tracking-tight text-slate-800">EventHub</span>
        </div>

        <nav className="flex-grow space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 text-decoration-none px-4 py-3 rounded-xl font-bold transition-all no-underline ${
                location.pathname === link.path 
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
                : "text-slate-500 hover:bg-slate-50 hover:text-indigo-600"
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="pt-6 border-t border-slate-100">
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 text-rose-500 font-bold hover:bg-rose-50 rounded-xl transition-all"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      {/* --- MOBILE HEADER & TOGGLE --- */}
      <div className="md:hidden bg-lime-200 border-b border-slate-200 p-0.5 mt-20 flex justify-between items-center fixed top-0 z-30 shadow-sm">
        {/* <span className="font-black text-indigo-600">EventHub</span> */}
        <Button variant="light" onClick={handleShow} className="border border-slate-200">
          <RiDashboardFill size={24} />
        </Button>
      </div>

      {/* --- MOBILE OFFCANVAS --- */}
      <Offcanvas show={show} onHide={handleClose} placement="start" className="bg-white">
        <Offcanvas.Header closeButton className="border-b border-slate-100">
          <Offcanvas.Title className="font-black text-indigo-600 uppercase tracking-widest text-sm">Main Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-4">
          <Nav className="flex-column gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={handleClose}
                className="flex items-center gap-3 p-3 rounded-xl text-decoration-none no-underline text-slate-600 font-bold hover:bg-indigo-50"
              >
                {link.icon} {link.name}
              </Link>
            ))}
            <hr className="my-4" />
            <button onClick={() => navigate('/')} className="flex items-center gap-3 p-3 text-rose-500 font-bold w-full text-left">
              <FaSignOutAlt /> Logout
            </button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="relative flex-grow p-4 md:p-10 z-10">
        <header className="flex justify-between items-center mb-3">
            <div>
                {/* <h1 className="text-2xl font-black text-slate-800 tracking-tight">Dashboard</h1> */}
                 <h2 className='text-center p-4 rounded-xl animate-bounce bg-blue-600 text-white font-extrabold text-2xl md:text-4xl shadow-lg mb-10'> 
        Welcome, {profile?.name}!
      </h2>
      
                {/* <p className="text-slate-500 text-sm font-medium italic">Welcome back, {profile?.name || "User"}</p> */}
            </div>
            <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full border border-slate-200 shadow-sm">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">
                    {profile?.name?.charAt(0).toUpperCase()}
                </div>
                <div className="hidden sm:block">
                    <p className="text-xs font-bold leading-none">{profile?.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{profile?.email}</p>
                </div>
            </div>
        </header>

        {/* Outlet renders child components based on the route */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Userdashboard;
