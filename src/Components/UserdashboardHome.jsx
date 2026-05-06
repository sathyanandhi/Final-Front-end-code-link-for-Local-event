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







// const UserdashboardHome = () => {
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
//        <div className="bg-amber-100" >
//          {/* <h1 className="text-center bg-amber-700 text-white p-2 hover:bg-green-600 cursor-pointer">User Dashboard</h1> */}
//       {/* <div className="flex flex-row"> */}
    
//       <div className="basis-1/8 ">
//     {/* <div className="h-full   bg-green-100"> */}
      
// {/*     
//       <Button variant="primary" onClick={handleShow} className="d-lg-none m-2">
//         ☰ Open Menu
//       </Button> */}

//       {/* Sidebar - Offcanvas for responsiveness */}
//       {/* <Offcanvas 
//         show={show} 
//         onHide={handleClose} 
//         responsive="lg" 
//         className="bg-dark text-white"
//       >
//         <Offcanvas.Header closeButton closeVariant="white">
//           <Offcanvas.Title>My Dashboard</Offcanvas.Title>
//         </Offcanvas.Header>
        
//         <Offcanvas.Body>
//           <Nav className="flex-column w-100 hover:bg-amber-700"> */}
//             {/* Manually declared links (No Mapping) */}
//             {/* <Link to={`/userdashboard/${id}`} className="text-white py-3 border-bottom">
//              <FaHome /> Home 
//             </Link>
//             <Link to= {`/viewprofile/${id}`} className="text-white py-3 border-bottom">
//              <FaBuildingUser /> Profile
//             </Link>
//               <Link to= {`/userdashboard1/${id}`} className="text-white py-3 border-bottom">
//               <RiCalendarScheduleFill /> Events
//             </Link> */}
//             {/* <Nav.Link href='/imagedisplay' className="text-white py-3 border-bottom">
//             <MdAddPhotoAlternate />Gallery
//             </Nav.Link> */}
//             {/* <Link to='/' className="text-white py-3">
//              <FiLogOut /> Logout
//             </Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas> */}
//         {/* <Viewprofile/> */}
//         {/* <main className="flex-1 overflow-x-hidden overflow-y-auto "> */}
//           {/* <Outlet /> */}
//           {/* Renders the child routes (Home, Profile, Settings) */}
//         {/* </main> */}
//       {/* </div> */}
//     {/* </div> */}
//     {/* // </div> */}
//     {/* <Link to='/admindashboard1'> <button className="bg-green-800 p-2 text-center mx-auto rounded">dashboard</button></Link> */}
// <div className="basis-7/8 bg-amber-100">
//       <div className="bg-amber-100" >
//      <h1 className='text-center p-2 rounded-b-4xl animate-bounce bg-lime-500 font-extrabold'> Welcome, {profile.name}!</h1>
//      {/* <h1 className='text-center'> Welcome, {profile.email}!</h1> */}
     
//    {/* <Link to ={`/viewprofile/${id}`}>  <button className="p-2 rounded bg-amber-800"  >click</button></Link> */}
//    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-4  rounded-full ">

// {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-4"> */}
//   <Card className='shadow-xl/20'>
//     <Card.Body className="bg-amber-300 p-5 hover:bg-emerald-300 text-black transition-transform hover:-translate-y-1">
//       <Card.Title className='text-center font-serif'>
//         <h5>Upcoming Events: {itemCount}</h5>
//       </Card.Title>
//     </Card.Body>
//   </Card>

//   <Card className='shadow-xl/20'>
//     <Card.Body className="bg-amber-300 p-5 hover:bg-emerald-300 text-black transition-transform hover:-translate-y-1">
//       <Card.Title className='text-center font-serif'>
//         <h5>My Registrations: {registeredCount}</h5>
//       </Card.Title>
//     </Card.Body>
//   </Card>
// </div>
// </div>
//     </div>
// </div>
//  </div>
//     // </div></div>
//    )}
  

// export default UserdashboardHome








import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CalendarDays, Ticket, Zap, LayoutDashboard } from "lucide-react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
ChartJS.register(ArcElement, Tooltip, Legend);

const UserdashboardHome = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState({
    today: 0,
    upcoming: 0,
    myRegistrations: 0
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!id) return;

        const [userRes, eventRes, regRes] = await Promise.all([
          axios.get(`https://final-back-end-code-for-local-event.onrender.com/localevent/getuserbyid/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get('https://final-back-end-code-for-local-event.onrender.com/localevent/getevent'),
          axios.get('https://final-back-end-code-for-local-event.onrender.com/localevent/getMergedData')
        ]);

        const userData = userRes.data.result;
        const allEvents = eventRes.data.result || [];
        const allRegs = Array.isArray(regRes.data) ? regRes.data : regRes.data.result || [];
        
        setProfile(userData);
       const now = dayjs.utc(); // Get current time in UTC


        setCounts({today: allEvents.filter(e => dayjs.utc(e.eventdate || e.date).isSame(now, 'day') ).length,
                    upcoming: allEvents.filter(e => dayjs(e.eventdate || e.date).isAfter(now, 'day')).length,
                    myRegistrations: allRegs.filter(reg =>  reg.email?.toLowerCase().trim() === userData.email?.toLowerCase().trim()).length
        });

        setLoading(false);
      } catch (err) {
        console.error("Dashboard error:", err);
        setLoading(false);
      }
    };
    fetchDashboard();
  }, [id]);

  const chartData = {
    labels: ["Today", "Upcoming", "Registrations"],
    datasets: [{
      data: [counts.today, counts.upcoming, counts.myRegistrations],
      backgroundColor: ['#ef4444', '#6366f1', '#10b981'],
      hoverOffset: 25,
      cutout: '70%',
      borderRadius: 15,
      borderWidth: 0
    }],
  };

  if (loading) return <div className="h-screen flex items-center justify-center bg-amber-50">Loading Dashboard...</div>;

  return (
    <div className="min-h-screen bg-amber-50 p-6 md:p-10 font-sans">
      {/* Animated Bounce Header */}
      {/* <h1 className='text-center p-4 rounded-xl animate-bounce bg-lime-500 text-white font-extrabold text-2xl md:text-4xl shadow-lg mb-10'> 
        Welcome, {profile?.name}!
      </h1>
       */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Left Side: Stats with Hover Lift Effect */}
        <div className="flex flex-col gap-6">
          <StatCard 
            title="Today's Events" 
            value={counts.today} 
            icon={<Zap />} 
            color="bg-orange-400" 
            hoverColor="hover:bg-cyan-400"
          />
          <StatCard 
            title="Upcoming Events" 
            value={counts.upcoming} 
            icon={<CalendarDays />} 
            color="bg-amber-300" 
            hoverColor="hover:bg-emerald-300"
          />
          <StatCard 
            title="My Registrations" 
            value={counts.myRegistrations} 
            icon={<Ticket />} 
            color="bg-amber-300" 
            hoverColor="hover:bg-emerald-300"
          />
        </div>

        {/* Right Side: Doughnut Chart with Glassmorphism */}
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border border-white flex flex-col items-center justify-center transition-all hover:shadow-2xl">
          <h3 className="mb-6 font-bold text-slate-700 flex items-center gap-2">
            <LayoutDashboard size={18} /> Activity Pulse
          </h3>
          <div className="h-72 w-full relative">
            <Doughnut data={chartData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
               <span className="text-4xl font-black text-slate-800">{counts.today + counts.upcoming}</span>
               <span className="text-[10px] font-bold text-slate-400 uppercase">Total Events</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Reusable StatCard with the lift and color transition animations
const StatCard = ({ title, value, icon, color, hoverColor }) => (
  <div className={`group transform transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-lg rounded-2xl overflow-hidden`}>
    <div className={`${color} ${hoverColor} p-3 flex items-center justify-between transition-colors duration-500`}>
      <div>
        <h5 className="font-serif text-slate-800 text-lg opacity-80">{title}</h5>
        <p className="text-4xl font-black text-slate-900 tracking-tighter mt-1">{value}</p>
      </div>
      <div className="p-3 bg-white/20 rounded-xl group-hover:scale-125 transition-transform duration-500 text-slate-900">
        {icon}
      </div>
    </div>
  </div>
);

export default UserdashboardHome;
