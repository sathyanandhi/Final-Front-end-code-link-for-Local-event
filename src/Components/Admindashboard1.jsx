// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { HiLocationMarker } from "react-icons/hi";
// import { FaImage } from "react-icons/fa6";
// import dayjs from 'dayjs'; // Import at the top


// const Admindashboard1 = () => {
//    const navigate=useNavigate();
   
//   const [eventdata, setData] = useState([]);
// //   const[userData,setUserData]=useState([]);
// // //   // const[cards,setcards]=useState([])
// //  useEffect(()=>{ getUserData()},[]);
// //   const getUserData=()=>{
// //       axios.get("https://692fd19a778bbf9e006e96b2.mockapi.io/userdetail",)
// //        .then((res) => setUserData(res.data));
// //         // Log the entire response
// //       console.log(userData);         
// //       }
      
//   //Load data
//   useEffect(() =>{ getEventData()}, []);
//  const getEventData = async () => {
//   try {
//     const token = localStorage.getItem("userToken"); 

//     const res = await axios.get("http://localhost:3000/localevent/getevent", {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//      setData(res.data.result);
//    } catch (err) {
//     // This logs the specific error message from the backend to your browser console
//     console.error("Fetch Error:", err.response?.data || err.message);
//   }
// };

// //   const eventdata1=(cardlist)=>{
// //     const now=new Date();
// //     return cardlist.filter(card=>
// //       {const expiryTime = new Date(card.expiryDate); 
    
// //     // Compare the expiry time with the current time
// //     // If the expiry time is in the future (> now), it is "active"
// //     return expiryTime > now; 
// //   });
// // // };
// //   const activeCards = eventdata1(cards)
//   //Edite Data
//   const handleEdit = (id) => {
//     const edit="/adminbookingform/"+id;
//     console.log(edit);
    
//     navigate(edit);
//   };
//   //Delete Data
//   const handleDelete = (id) => {
//        if (window.confirm("Are you sure you want to delete this event?")) {
//     axios
//       .delete(`http://localhost:3000/localevent/deleteevent/${id}`)
//       .then(() => {
//           alert("Deleted successfully");
//           getEventData(); // Refresh list
//         })
//         .catch((err) => alert("Delete failed"));
//     }}
//   return (
//     <div>

//       {/* <div className="bg-amber-700 p-2 m-2 justify-around">
//         {/* <Link to='/admindashboard'><button className="bg-green-400 p-2 rounded  text-3xl hover:bg-amber-600 text-blue-600 font-bold ">Back</button></Link> */}
//         {/* </div> */} 
//       <h1 className="text-center text-4xl bg-amber-200 p-2">List of Events</h1>
//                    <Link to='/adminbookingform'><button className="bg-green-400 p-2 rounded m-1  text-3xl hover:bg-fuchsia-700 hover:text-white text-blue-600 font-bold ">Add Event</button></Link>

//       <table className="  border-collapse border border-gray-400 text-1xl text-black-500 ">
//         <thead className="text-center">
//             <tr className="bg-red-300 p-7 my-5">
              
//                 <th className="border border-yellow-300">S.No</th>
//                 <th className="border border-yellow-300">Event Name</th>
//                 <th className="border border-yellow-300">Event Date</th>
//                 <th className="border border-yellow-300">Event Time</th>
//                 <th className="border border-yellow-300">Venue</th>
//                 <th className="border border-yellow-300">Map</th>
//                  <th className="border border-yellow-300">Image</th>
//                 <th className="border border-yellow-300">Capacity</th>
//                 <th className="border border-yellow-300">Event Description</th>
//                 <th className="border border-yellow-300">Category</th>

//                 <th className="border border-yellow-300">Edit/Delete</th>
//             </tr>

//         </thead>
      
//            {eventdata.map((data,index)=>(
//               <tbody key={data._id}>
//                 <tr className="bg-emerald-400">
//                 <td className="border border-blue-300">{index+1} </td>
//                 <td className="border border-blue-300">{data.eventname} </td>
//                 {/* <td className="border border-blue-300">{data.eventdate} </td> */}
//                 <td className="border border-blue-300">{dayjs(data.eventdate).format('DD/MM/YYYY')}</td>
//                 <td className="border border-blue-300">{data.eventtime} </td>
//                 <td className="border border-blue-300">{data.venue} </td>
//                 <td className="border border-blue-300"><a href={data.map}><HiLocationMarker /></a></td>
//                 <td className="border border-blue-300"><a href={data.img}><FaImage /></a></td>
//                 <td className="border border-blue-300">{data.capacity} </td>
//                 <td className="border border-blue-300">{data.eventdescription} </td>
//                 <td className="border border-blue-300">{data.selectcategory} </td>
//                 <td> <button className="border  rounded  bg-green-500" onClick={()=>handleEdit(data._id)}>Edit </button>
//                 <button className="border  rounded bg-red-500" onClick={()=>handleDelete(data._id)}>Delete </button></td>
//             </tr>
// </tbody>
//            ))}
        

       
//       </table>
      
//     </div>
//   )
// }

// export default Admindashboard1




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { 
  PencilLine, Trash2, MapPin, Image as ImageIcon, 
  Plus, Calendar, Search, ChevronLeft, ChevronRight, 
  FilterX, Clock, ArrowRight, Users, RotateCcw
} from "lucide-react";
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import utc from 'dayjs/plugin/utc'; 
dayjs.extend(utc);
// Extend Day.js plugins
dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const Admindashboard1 = () => {
  const navigate = useNavigate();
  const [eventdata, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => { getEventData() }, []);

  const getEventData = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const res = await axios.get("https://final-back-end-code-for-local-event.onrender.com/localevent/getevent", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setData(res.data.result || []);
    } catch (err) { console.error("Fetch Error:", err); }
  };

  // --- FILTER LOGIC (SEARCH + FROM/TO RANGE) ---
// const filteredData = eventdata.filter(item => {
//    // Use .utc() to lock the date and stop the +1 day shift
//   const eventDate = dayjs.utc(item.eventdate).startOf('day');
//   const today = dayjs().startOf('day');
//   // Only keep events that are today or in the future
//   const isNotExpired = dayjs(item.eventdate).isSameOrAfter(dayjs(), 'day');
  
//   // Keep your existing search and range filters
//   const matchesSearch = item.eventname.toLowerCase().includes(searchTerm.toLowerCase());
//   const matchesRange = (!fromDate || !toDate) || 
//                        dayjs(item.eventdate).isBetween(fromDate, toDate, 'day', '[]');

//   return isNotExpired && matchesSearch && matchesRange;
// });


// const filteredData = eventdata.filter(item => {
//   // 1. Get today's date string (e.g., "2026-05-02")
//   const todayStr = dayjs().format('YYYY-MM-DD');
  
//   // 2. Get event date string (e.g., "2026-05-01")
//   const eventDateStr = dayjs(item.eventdate).format('YYYY-MM-DD');

//   // 3. Compare as strings: event must be today or later
//   const isNotExpired = eventDateStr >= todayStr;
  
//   // 4. Existing filters
//   const matchesSearch = item.eventname.toLowerCase().includes(searchTerm.toLowerCase());
//   const matchesRange = (!fromDate || !toDate) || 
//                        dayjs(item.eventdate).isBetween(fromDate, toDate, 'day', '[]');

//   return isNotExpired && matchesSearch && matchesRange;
// });

const filteredData = (eventdata || []).filter(item => {
  // 1. Get today's date in UTC ONLY (YYYY-MM-DD)
  const todayStr = dayjs.utc().format('YYYY-MM-DD');
  
  // 2. Treat the database date as UTC ONLY. 
  // This prevents the "minus one day" shift caused by local timezone conversion.
  const eventDateStr = dayjs.utc(item.eventdate).format('YYYY-MM-DD');

  // 3. Logic: Show today and upcoming
  const isTodayOrFuture = eventDateStr >= todayStr;
  
  // 4. Existing search filter
  const matchesSearch = item.eventname.toLowerCase().includes(searchTerm.toLowerCase());
  
  return isTodayOrFuture && matchesSearch;
});
  // Pagination Calculations
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      axios.delete(`https://final-back-end-code-for-local-event.onrender.com/localevent/deleteevent/${id}`)
        .then(() => getEventData())
        .catch(() => alert("Delete failed"));
    }
  };

  const resetFilters = () => {
    setFromDate("");
    setToDate("");
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6 font-sans antialiased">
      
      {/* TOP BAR: SEARCH & RANGE PICKER */}
      <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Event Management</h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 flex items-center gap-2">
              <Clock size={12} className="text-indigo-500" /> Filter by date range or keyword
            </p>
          </div>
          <Link to="/adminbookingform">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-100">
              <Plus size={18} /> <span className="text-sm">Create Event</span>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase ml-1">From Date</label>
            <input type="date" value={fromDate} onChange={(e) => {setFromDate(e.target.value); setCurrentPage(1);}} className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase ml-1">To Date</label>
            <input type="date" value={toDate} onChange={(e) => {setToDate(e.target.value); setCurrentPage(1);}} className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase ml-1">Keyword Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}} className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
          </div>
          <button onClick={resetFilters} className="flex items-center justify-center gap-2 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">
            <RotateCcw size={14} /> Reset Filters
          </button>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
       {/* --- EVENT TABLE --- */}
<div className="bg-white rounded-2xl shadow-sm border border-slate-200">
  {/* wrapper for horizontal scroll */}
  <div className="overflow-x-auto"> 
    <table className="w-full text-left border-collapse min-w-[800px]"> {/* min-w ensures scroll triggers on mobile */}
      <thead>
        <tr className="bg-slate-50/50 border-b border-slate-200">
          {/* Small space for S.No */}
          <th className="px-4 py-4 w-12 text-[10px] font-black uppercase tracking-widest text-slate-400">#</th>
          <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Event Details</th>
          <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Schedule</th>
          <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Venue & Assets</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Capacity</th>

          <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {currentItems.map((data, index) => (
          <tr key={data._id} className="hover:bg-slate-50/30 transition-colors group">
            {/* Narrow column for S.No */}
            <td className="px-4 py-4 w-12 font-mono text-[10px] text-slate-400 border-r border-slate-50">
              {((currentPage - 1) * itemsPerPage + index + 1).toString().padStart(2, '0')}
            </td>
            
            <td className="px-6 py-4 min-w-[200px]">
              <div className="font-black text-slate-800 uppercase tracking-tight text-sm">
                {data.eventname}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-[9px] font-bold uppercase">
                  {data.selectcategory}
                </span>
              </div>
            </td>

            <td className="px-6 py-4 min-w-[150px]">
             <div className="h-16 w-16 bg-slate-100 rounded-2xl flex flex-col items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
  <span className="text-[10px] font-black uppercase">{dayjs.utc(data.eventdate).format('MMM')}</span>
  
  <span className="text-2xl font-black leading-none">{dayjs.utc(data.eventdate).format('DD')}</span>
</div>
              <div className="text-[10px] text-slate-400">{data.eventtime}</div>
            </td>

            <td className="px-6 py-4 min-w-[180px]">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin className="w-3 h-3 text-rose-500" />
                {data.venue}
              </div>
              <div className="flex gap-2 mt-2">
                <a href={data.map} className="p-1 text-slate-400 hover:text-indigo-600"><MapPin className="w-4 h-4" /></a>
                <a href={data.img} className="p-1 text-slate-400 hover:text-indigo-600"><ImageIcon className="w-4 h-4" /></a>
              </div>
            </td>

              <td className="px-6 py-4 min-w-[100px]">
              <div className="font-black text-slate-800 uppercase tracking-tight text-sm">
                {data.capacity}
              </div>
              </td>

            <td className="px-6 py-4 text-right">
              <div className="flex justify-end gap-1">
                <button onClick={() => navigate(`/adminbookingform/${data._id}`)} className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                  <PencilLine className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(data._id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



        {/* PAGINATION FOOTER */}
        <div className="p-5 bg-slate-50/50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[10px] font-black text-slate-400 uppercase">
            Page {currentPage} of {totalPages || 1}
          </span>
          <div className="flex gap-2">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="p-2 border border-slate-200 rounded-xl hover:bg-white disabled:opacity-30 transition-all">
              <ChevronLeft size={18} />
            </button>
            <button disabled={currentPage >= totalPages} onClick={() => setCurrentPage(p => p + 1)} className="p-2 border border-slate-200 rounded-xl hover:bg-white disabled:opacity-30 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard1;

