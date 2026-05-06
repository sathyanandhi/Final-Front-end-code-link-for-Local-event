// import React, { useEffect, useState} from "react";
// import axios from "axios";
// import { Link, useNavigate,useParams } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import Userdashboard from "./Userdashboard";
// import Userbookingform from "./Userbookingform";

// const Viewprofile = () => {
//     const { id } = useParams(); // Get the ID from the URL
//     const navigate=useNavigate();
//       const [user, setUser] = useState("");
//       const [loading, setLoading] = useState(true);
//       const [error, setError] = useState(null);
    
//       useEffect(() => {
//         const fetchProfile = async () => {
//           try {
//             const token = localStorage.getItem("token");
//        console.log(token);
//             // Construct the API URL using the user ID
//             const response = await axios.get(`http://localhost:3000/localevent/getuserbyid/${id}`,{
//     headers:{Authorization:`Bearer ${token}`  }});
//             console.log(response.data.result);
//             setUser(response.data.result);
        
            
//             console.log(id);
            
//             setLoading(false);
//           } catch (err) {
//             setError(err.message);
//             setLoading(false);
//           }
//         };
    
//         if (id) {
//           fetchProfile();
//         }
//       }, [id]);
//       const handleEdit = (id) => {
//     const edit="/signup/"+id;
//     navigate(edit);
//   };
//  const handleDelete = (id) => {
//   // 1. Get the token from localStorage
//    const isConfirmed = window.confirm("Do you want to delete this Account?");
  
//   if (isConfirmed) {
//   const token = localStorage.getItem("token");

//   // 2. Make the call to our backend
//   axios
//     .delete(`http://localhost:3000/localevent/deleteuser/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`, // Pass the token if you have auth middleware
//       },
//     })

//     .then(() => {
//       // 3. Refresh data and alert ONLY on success
    
//       alert("Deleted successfully");
//       navigate('/')
//     })
//     .catch((err) => {
//       console.error(err);
//       alert("Error deleting user: " + (err.response?.data?.message || "Server Error"));
//     });
// };
//  }

//   const handleRegister = (id) => {
    
//     navigate(`/userdashboard/${id}/eventbookingdetail`);
//   }
//   return (
//     <div>
// <div className='transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none '>

//        <Card className="bg-dark text-white  text-2xl">
//       <img className='h-130 w-400 object-fit  ' src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/twcomponents/header.webp"  alt="Card image" />
//       <Card.ImgOverlay className='text-center  '>
        
//         <Card.Title className=' font-serif text-white'><h2 className='font-extrabold'>Local Event Hub Smart Event Discovery AI</h2></Card.Title>
//         <Card.Text>
//         <h3>Welcome, {user.name}!</h3>
//         {/* <p>Phone Number:{user.phonenumber}</p> */}
//       <p>Email: {user.email}</p>
//       {/* <p>Address:{user.address}</p> */}
//         </Card.Text>
//              <button onClick={() => handleRegister(user._id)} className="bg-blue-700 text-white p-2 rounded m-4 hover:bg-fuchsia-700">Registered Events</button>

//     <button onClick={() => handleEdit(user._id)} className="bg-red-500 text-white p-2 rounded hover:bg-cyan-500"  >
//                   Edit Account       </button>
//      <button onClick={() => handleDelete(user._id)} className="bg-green-500 text-white p-2 rounded m-4 hover:bg-fuchsia-700">Delete My Account</button>

//        {/* <Link to=''><button className='bg-orange-300 p-2 rounded hover:bg-green-400'>Edit Your Details Now</button></Link> */}
//         {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
//           <div className='flex justify-between'>
//             {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmsg3Ql38UIAvqQmxqICOGiNvUkqenSsPm6LcG6Z762A&s' class="size-20 animate-ping rounded-2xl..."/> */}
//                         {/* <img src='https://st2.depositphotos.com/1105977/7532/i/950/depositphotos_75324141-stock-photo-retro-microphone-on-music-concert.jpg' class="size-25 animate-bounce rounded-2xl ..."/> */}
// </div>
//       </Card.ImgOverlay>
//       {/* <button>Edit Profile</button> */}
//     </Card>
  

//     </div>
//       {/* <h1>Welcome, {user.name}!</h1>
//       <p>Email: {user.email}</p> */}
// {/* <Userbookingform/> */}
//     </div>
//   )
// }

// export default Viewprofile





// // Function to get user profile from session storage
// // const  Viewprofile  = () => {
// //   const storedProfile = sessionStorage.getItem('Userdashboard');
// //   return storedProfile ? JSON.parse(storedProfile) : null;
 
  
// // };

// // console.log(Userdashboard);

// // Example usage in a different component
// // const Header = () => {
// //   const Userdashboard =  Viewprofile();

// //   return (
// //     <header>
// //       {Userdashboard ? (
// //         <span>Hello, {Userdashboard.name}</span>
// //       ) : (
// //         <span>Guest</span>
// //       )}
// //     </header>
// //   );
// // };
// // export default Viewprofile



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { 
  HiOutlineMail, HiOutlinePencil, HiOutlineTrash, 
  HiOutlineBadgeCheck, HiOutlineArrowLeft, 
  HiOutlineCalendar, HiOutlineUser, HiOutlineLightningBolt 
} from "react-icons/hi";

const Viewprofile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`https://final-back-end-code-for-local-event.onrender.com/localevent/getuserbyid/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data.result);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    if (id) fetchProfile();
  }, [id]);

  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-amber-50">
      <div className="h-10 w-10 border-4 border-lime-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
  const handleDelete = (id) => {
  // 1. Get the token from localStorage
   const isConfirmed = window.confirm("Do you want to delete this Account?");
  
  if (isConfirmed) {
  const token = localStorage.getItem("token");

  // 2. Make the call to our backend
  axios
    .delete(`https://final-back-end-code-for-local-event.onrender.com/localevent/deleteuser/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token if you have auth middleware
      },
    })

    .then(() => {
      // 3. Refresh data and alert ONLY on success
    
      alert("Deleted successfully");
      navigate('/')
    })
    .catch((err) => {
      console.error(err);
      alert("Error deleting user: " + (err.response?.data?.message || "Server Error"));
    });
};
 }

  return (
    // THE VIBRANT MESH BACKGROUND
    <div className="min-h-screen bg-amber-50 relative overflow-hidden font-sans text-slate-800">
      
      {/* BACKGROUND DECORATIVE BLOBS */}
      <div className="absolute top-0 left-0 w-full h-full -z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-lime-400/30 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-emerald-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-amber-400/40 blur-[80px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* HEADER NAV */}
        <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-black uppercase tracking-tighter text-lime-700 hover:text-emerald-700 transition-colors"
          >
            <HiOutlineArrowLeft size={20} /> Back
          </button>
          <div className="bg-white/50 backdrop-blur-md border border-white px-4 py-1 rounded-full shadow-sm">
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Active Session</span>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto py-10 px-6">
          
          {/* PROFILE CARD */}
          <div className="bg-white/70 backdrop-blur-xl border-4 border-white rounded-[3rem] shadow-2xl overflow-hidden mb-8 transform transition-all">
            <div className="h-32 bg-gradient-to-r from-lime-400 via-amber-400 to-emerald-400"></div>
            
            <div className="px-8 pb-10 -mt-16 flex flex-col items-center">
              {/* Avatar */}
              <div className="relative group">
                <div className="h-32 w-32 rounded-full border-[6px] border-white bg-slate-900 flex items-center justify-center text-4xl font-black text-white shadow-xl transition-transform group-hover:scale-105">
                  {user?.name?.charAt(0)}
                </div>
                <div className="absolute bottom-1 right-1 bg-lime-500 text-white p-1.5 rounded-full border-4 border-white shadow-lg">
                  <HiOutlineBadgeCheck size={18} />
                </div>
              </div>

              {/* Name & Role */}
              <h1 className="text-4xl font-black text-slate-900 mt-4 tracking-tight">{user?.name}</h1>
              <div className="flex items-center gap-2 mt-1 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                <HiOutlineLightningBolt /> Smart Discovery Member
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <button 
                  onClick={() => navigate(`/signup/${id}`)}
                  className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold text-sm hover:bg-lime-600 transition-all shadow-lg flex items-center gap-2"
                >
                  <HiOutlinePencil /> Edit Details
                </button>
                <button 
                   onClick={() => navigate(`/userdashboard/${id}/eventbookingdetail`)}
                   className="bg-white text-slate-900 border-2 border-slate-100 px-8 py-3 rounded-2xl font-bold text-sm hover:border-amber-400 transition-all shadow-md flex items-center gap-2"
                >
                  <HiOutlineCalendar /> Bookings
                </button>
              </div>
            </div>
          </div>

          {/* DATA GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            <StatBox 
              icon={<HiOutlineMail className="text-amber-500" />} 
              label="Contact Email" 
              value={user?.email} 
              bgColor="bg-amber-100/50"
            />
            <StatBox 
              icon={<HiOutlineUser className="text-lime-600" />} 
              label="Account Role" 
              value={user?.role || 'User'} 
              bgColor="bg-lime-100/50"
            />

            {/* DELETE CARD */}
            <div className="md:col-span-2 bg-rose-50 border-2 border-rose-100 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 group">
              <div className="text-center md:text-left">
                <h4 className="text-rose-600 font-black uppercase text-xs tracking-widest">Account Security</h4>
                <p className="text-slate-500 text-sm italic">Permanently remove all your event history and data.</p>
              </div>
              <button onClick={() => handleDelete(user._id)} className="flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-tighter hover:bg-rose-700 transition-all shadow-lg">
                <HiOutlineTrash /> Delete My Account
              </button>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

// HELPER COMPONENT FOR INFO BOXES
const StatBox = ({ icon, label, value, bgColor }) => (
  <div className={`${bgColor} backdrop-blur-sm p-6 rounded-[2rem] border border-white flex items-center gap-5 transition-all hover:scale-[1.02]`}>
    <div className="p-4 bg-white rounded-2xl shadow-sm">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
      <p className="text-lg font-bold text-slate-800 break-all leading-tight">{value}</p>
    </div>
  </div>
);

export default Viewprofile;
