// import axios from "axios";
// import { Link, useNavigate,useParams } from "react-router-dom";
// import React, { useEffect, useState} from "react";

// const Eventbookingdetail = () => {
//        const { id } = useParams();
//      const[eventdata,setEventdata]=useState([])
//        //   // const[cards,setcards]=useState([])
//        // 1. Add state at the top of your component
//     const [expandedId, setExpandedId] = useState(null);
    
//     // 2. Add a toggle function
//     const toggleDetails = (id) => {
//       setExpandedId(expandedId === id ? null : id);
//     };
    

    
//           useEffect(()=>{ getEventData()},[]);
//       const getEventData=()=>{
//         const sessionid=sessionStorage.getItem('sessionId')
//       console.log(sessionid);
//       const id=sessionid;
//           axios.get("http://localhost:3000/localevent/getMergedData",id)
//            .then((res) => setEventdata(res.data));
    
//             // Log the entire response
                  
//           }; console.log(eventdata); 
//   return (
//     <div>
//       <h3 className="m-7 text-black">List of Users Registered in Upcoming Events</h3>
//        <table className="  border-collapse border border-gray-400 text-1xl text-black-500 ml-10 mt-3">
//         <thead className="text-center">
//             <tr className="bg-red-300 p-7 my-5">
//                 <th className="border border-yellow-300">S.No</th>
//                 {/* <th className="border border-yellow-300">EventName</th> */}
//                 <th className="border border-yellow-300">Participant Name</th>
//                 {/* <th className="border border-yellow-300">Email</th> */}
//                 {/* <th className="border border-yellow-300">Phone Number</th> */}
//                 {/* <th className="border border-yellow-300">Address</th> */}
//                                <th className="border border-yellow-300">Date of Event </th>
//                <th className="border border-yellow-300">Event details</th>

                
              
//             </tr>

//         </thead>
      
//            {eventdata.map((data,index)=>(
//               <tbody key={data._id}>
//                 <tr className="bg-fuchsia-100">
//                 <td className="border border-blue-800">{index+1} </td>
//                 {/* <td className="border border-blue-300">{props.id} </td> */}
//                 <td className="border border-blue-800">{data.participantname} </td>
//                 {/* <td className="border border-blue-300">{data.email} </td> */}
//                 {/* <td className="border border-blue-300">{data.phonenumber} </td> */}
//                 {/* <td className="border border-blue-300">{data.address} </td> */}
//                                 <td className="border border-blue-800">{new Date(data.result?.eventdate).toLocaleDateString()} </td>

//  <td className="border border-blue-300">
//         <button 
//           onClick={() => toggleDetails(data._id)}
//           className="bg-amber-200 text-black px-2 py-1 rounded text-sm"
//         >
//           {expandedId === data._id ? "Hide" : "View Details"}
//         </button>
//       </td>
//     </tr>
    
//     {/* 4. The conditional "Detail View" row */}
//     {expandedId === data._id && (
//       <tr>
//         <td colSpan="6" className="bg-white p-4 border border-blue-300">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <p><strong>Event Name:</strong> {data.result?.eventname}</p>
//               <p><strong>Date:</strong> {new Date(data.result?.eventdate).toLocaleDateString()}</p>
//               <p><strong>Time:</strong> {data.result?.eventtime}</p>
//               <p><strong>Venue:</strong> {data.result?.venue}</p>
//             </div>
//             <div>
//               <p><strong>Description:</strong> {data.result?.eventdescription}</p>
//               {data.result?.img && (
//                 <img src={data.result.img} alt="event" className="w-32 h-20 object-cover mt-2 rounded" />
//               )}
//             </div>
//           </div>
//         </td>
//       </tr>
//     )}
//           </tbody>  ))} 

       
//       </table>
      
   
//       <div></div>

//     </div>
//   )
// }

// export default Eventbookingdetail





import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { 
  HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineClock, 
  HiOutlineChevronDown, HiOutlineInformationCircle, 
  HiOutlineChevronLeft, HiOutlineChevronRight 
} from "react-icons/hi";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; 

dayjs.extend(utc);

const Eventbookingdetail = () => {
  const { id } = useParams();
  const [eventdata, setEventdata] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage =4;

  const toggleDetails = (id) => setExpandedId(expandedId === id ? null : id);

  useEffect(() => {
    getEventData();
  }, []);

    const getEventData = () => {
    axios.get("https://final-back-end-code-for-local-event.onrender.com/localevent/getMergedData")
      .then((res) => {
        // SORTING LOGIC: Newest registrations first
        const sortedData = res.data.sort((a, b) => {
          // This sorts by the date the event was created/booked
          return b._id.localeCompare(a._id); 
        });
        
        setEventdata(sortedData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = eventdata.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(eventdata.length / recordsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setExpandedId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-black text-slate-800 tracking-tighter">Registration Intelligence</h2>
        <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mt-1">Live Participant Feed</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {currentRecords.map((data, index) => (
          <div 
            key={data._id} 
            className={`group bg-white border transition-all duration-500 rounded-[2rem] overflow-hidden 
              ${expandedId === data._id 
                ? 'border-indigo-400 shadow-[0_20px_50px_rgba(99,102,241,0.15)] ring-1 ring-indigo-100' 
                : 'border-slate-200 hover:border-lime-400 hover:shadow-[0_20px_40px_rgba(163,230,53,0.2)] hover:-translate-y-2'
              }`}
          >
            <div 
              className="p-7 flex flex-col md:flex-row items-center justify-between gap-4 cursor-pointer" 
              onClick={() => toggleDetails(data._id)}
            >
              <div className="flex items-center gap-6 w-full">
                <div className="h-14 w-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center font-black text-lg 
                  group-hover:bg-lime-500 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-inner">
                  {firstIndex + index + 1}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 text-xl group-hover:text-lime-600 transition-colors">
                    {data.participantname}
                  </h3>
                  <div className="flex items-center gap-4 mt-1 text-slate-400 text-[10px] font-black uppercase tracking-[0.1em]">
                    <span className="flex items-center gap-1">
                      <HiOutlineCalendar className="text-indigo-500" /> 
                      {/* UTC Fixed Date Display */}
                      {dayjs.utc(data.result?.eventdate).format('DD MMM YYYY')}
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-emerald-500">Confirmed Booking</span>
                  </div>
                </div>
              </div>

              <div className={`p-3 rounded-2xl transition-all duration-500 
                ${expandedId === data._id 
                  ? 'bg-indigo-600 text-white rotate-180 shadow-lg shadow-indigo-200' 
                  : 'bg-slate-50 text-slate-400 group-hover:bg-lime-100 group-hover:text-lime-600'}`}>
                <HiOutlineChevronDown size={22} />
              </div>
            </div>

            {expandedId === data._id && (
              <div className="px-8 pb-8 pt-2 bg-gradient-to-b from-white to-indigo-50/30">
                <div className="grid md:grid-cols-3 gap-8 border-t border-slate-100 pt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="md:col-span-1 rounded-[1.5rem] overflow-hidden h-44 shadow-lg border-4 border-white">
                    {data.result?.img 
                      ? <img src={data.result.img} className="w-full h-full object-cover" alt="event" /> 
                      : <div className="h-full flex items-center justify-center bg-slate-100 text-slate-400 italic text-sm">No Preview</div>
                    }
                  </div>
                  <div className="md:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <DetailBox icon={<HiOutlineInformationCircle />} label="Event Identity" value={data.result?.eventname} color="text-indigo-500" />
                      <DetailBox icon={<HiOutlineClock />} label="Scheduled Time" value={data.result?.eventtime} color="text-amber-500" />
                      <DetailBox icon={<HiOutlineLocationMarker />} label="Secure Venue" value={data.result?.venue} color="text-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-14">
            <button 
              onClick={() => paginate(currentPage - 1)} 
              disabled={currentPage === 1}
              className="p-3 rounded-2xl bg-white text-slate-400 hover:text-indigo-600 disabled:opacity-20 transition-all shadow-sm border border-slate-100"
            >
              <HiOutlineChevronLeft size={24} />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-12 h-12 rounded-2xl font-black transition-all duration-300 ${
                  currentPage === i + 1 
                    ? 'bg-indigo-600 text-white shadow-xl scale-110' 
                    : 'bg-white text-slate-400 hover:text-indigo-600'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button 
              onClick={() => paginate(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className="p-3 rounded-2xl bg-white text-slate-400 hover:text-indigo-600 disabled:opacity-20 transition-all shadow-sm border border-slate-100"
            >
              <HiOutlineChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Sub-component for Details
const DetailBox = ({ icon, label, value, color }) => (
  <div>
    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{label}</p>
    <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
      <span className={`${color}`}>{icon}</span>
      {value || "Not Specified"}
    </div>
  </div>
);

export default Eventbookingdetail;
