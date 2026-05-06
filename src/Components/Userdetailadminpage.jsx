
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import dayjs from 'dayjs';
// 1. MUST import and extend this plugin for auto-cleanup logic
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'; 
dayjs.extend(isSameOrAfter);
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
const Userdetailadminpage = () => {
  const { id } = useParams();
  const [eventdata, setEventdata] = useState([]);
  const [userData, setUserData] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  // States for the Modal
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allEvents, setAllEvents] = useState([]); // Master list of all events

// Fetch all created events
useEffect(() => {
  const fetchAllEvents = async () => {
    try {
      const res = await axios.get("https://final-back-end-code-for-local-event.onrender.com/localevent/getevent");
      setAllEvents(res.data.result || []);
    } catch (err) {
      console.error("Error fetching master events:", err);
    }
  };
  fetchAllEvents();
}, []);

// New Expired Logic: Filter from ALL events, not just registrations
const expiredAnalytics = allEvents.reduce((acc, event) => {
  const eventDate = dayjs(event.eventdate);
  const today = dayjs().startOf('day');

  // Logic: If the event date is in the past
  if (eventDate.isBefore(today, 'day')) {
    const eventName = event.eventname || "Unknown Event";
    
    // Count how many people actually registered for this event from our registration list
    const actualParticipants = eventdata.filter(reg => reg.result?.eventname === eventName);

    acc[eventName] = {
      name: eventName,
      date: event.eventdate,
      capacity: event.capacity || 0,
      participantCount: actualParticipants.length, // Will be 0 if no one registered
      details: actualParticipants
    };
  }
  return acc;
}, {});

const analyticsArray = Object.values(expiredAnalytics);

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  
const openParticipantsModal = (eventObj) => {
    setSelectedEvent(eventObj);
    setIsModalOpen(true);
  };

  useEffect(() => { getUserData() }, []);
  const getUserData = async () => {
    try {
      const res = await axios.get("https://final-back-end-code-for-local-event.onrender.com/localevent/getuseradmin");
      setUserData(res.data.result);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  useEffect(() => { getEventData() }, []);
  const getEventData = () => {
    const sessionid = sessionStorage.getItem('sessionId');
    axios.get("https://final-back-end-code-for-local-event.onrender.com/localevent/getMergedData", { params: { id: sessionid } })
      .then((res) => setEventdata(res.data));
  };

  // 2. AUTO-CLEANUP LOGIC
  // We check data.result.eventdate because your merged data structure nests the event details
  const filteredData = eventdata.filter(item => {
    const eventDate = dayjs(item.result?.eventdate); 
    const today = dayjs().startOf('day');
    return eventDate.isSameOrAfter(today, 'day');
  });
   const expiredData = eventdata.filter(item => {
  const eventDate = dayjs(item.result?.eventdate || item.eventdate);
  const today = dayjs().startOf('day');

  // Logic: Keep only if the date is BEFORE today
  return eventDate.isBefore(today, 'day');
});
// Group expired data by Event Name to calculate registration vs capacity
// const expiredAnalytics = expiredData.reduce((acc, current) => {
//   const event = current.result;
//   const eventName = event?.eventname || "Unknown Event";
  
//   if (!acc[eventName]) {
//     acc[eventName] = {
//       name: eventName,
//       date: event?.eventdate || current.eventdate,
//       capacity: event?.capacity || 0,
//       participantCount: 0,
//       details: []
//     };
//   }
  
//   acc[eventName].participantCount += 1;
//   acc[eventName].details.push(current); // Keep for "View All Registrants" modal
//   return acc;
// }, {});

// const analyticsArray = Object.values(expiredAnalytics);


  return (
    <div className="min-h-screen bg-slate-50 p-3 md:p-8 font-sans antialiased text-slate-800">
      <header className="mb-6 flex flex-col md:flex-row md:items-center justify-between border-b pb-4 gap-2">
        <h1 className="text-lg md:text-xl font-black tracking-tight italic">
          Admin Dashboard <span className="hidden sm:inline text-slate-400 font-normal">/ Analytics</span>
        </h1>
        <div className="text-[10px] uppercase font-bold bg-white border px-3 py-1 rounded shadow-sm">
          Updated: {new Date().toLocaleTimeString()}
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-3 ml-1">
          Active Participants ({filteredData.length})
        </h2>
        
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-175">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-3 text-[10px] font-black text-slate-500 uppercase">#</th>
                <th className="px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Participant</th>
                <th className="px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Contact</th>
                <th className="px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Event Date</th>
                <th className="px-4 py-3 text-[10px] font-black text-slate-500 uppercase text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* 3. IMPORTANT: Map over filteredData, not eventdata */}
              {filteredData.map((data, index) => (
                <React.Fragment key={data._id}>
                  <tr className="hover:bg-indigo-50/30 transition-colors">
                    <td className="px-4 py-2 font-mono text-[10px] text-slate-400">
                      {(index + 1).toString().padStart(2, '0')}
                    </td>
                    <td className="px-4 py-2 text-xs font-bold text-slate-900">{data.participantname}</td>
                    <td className="px-4 py-2 text-[11px]">
                      <div className="font-medium text-indigo-600">{data.email}</div>
                      <div className="text-slate-400 text-[10px]">{data.phonenumber}</div>
                    </td>
                    <td className="px-4 py-2 text-[11px] font-bold text-slate-500 italic">
                      {data.result?.eventdate ? dayjs(data.result.eventdate).format('DD/MM/YYYY') : "—"}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button 
                        onClick={() => toggleDetails(data._id)}
                        className="text-[10px] font-black uppercase text-indigo-500 hover:underline"
                      >
                        {expandedId === data._id ? "Close" : "Details"}
                      </button>
                    </td>
                  </tr>

                  {expandedId === data._id && (
                    <tr>
                      <td colSpan="5" className="px-4 py-4 bg-slate-50/80">
                        <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-inner">
                           <p className="text-xs font-bold uppercase text-slate-400 text-[9px]">Event Name</p>
                           <p className="text-sm font-black text-indigo-600">{data.result?.eventname}</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    {/* Section 2: Logged In Users */}
    <section>
      <h2 className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-3 ml-1">
        User Access Logs
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="bg-emerald-50/50 border-b border-slate-200">
              <th className="px-4 py-2 text-[10px] font-black text-emerald-700 uppercase">S.No</th>
              <th className="px-4 py-2 text-[10px] font-black text-emerald-700 uppercase">Name</th>
              <th className="px-4 py-2 text-[10px] font-black text-emerald-700 uppercase">Email</th>
              <th className="px-4 py-2 text-[10px] font-black text-emerald-700 uppercase">Registered</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {userData.map((user, index) => (
              <tr key={user._id} className="hover:bg-emerald-50/20 transition-all">
                <td className="px-4 py-2 font-mono text-[10px] text-emerald-600 font-bold">{index + 1}</td>
                <td className="px-4 py-2 text-xs font-black text-slate-800 uppercase tracking-tight">{user.name}</td>
                <td className="px-4 py-2 text-xs text-slate-500 underline decoration-emerald-100 decoration-dotted underline-offset-2">{user.email}</td>
                <td className="px-4 py-2 text-[10px] text-slate-400 font-bold">
                  {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
   {/* Section:3 Event Attendance Overview */}
{/* Section: Expired Event Participation Analytics */}
{/* Section: Expired Events Capacity Analytics */}
<section className="mt-10">
  <h2 className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-3 ml-1">
    Expired Events: Capacity vs. Participation
  </h2>
  
  <div className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
    <table className="w-full text-left border-collapse min-w-[700px]">
      <thead>
        <tr className="bg-slate-200/40 border-b border-slate-300">
          <th className="px-6 py-3 text-[10px] font-black text-slate-500 uppercase">Expired Event Name</th>
          <th className="px-6 py-3 text-[10px] font-black text-slate-500 uppercase">Event Date</th>
          <th className="px-6 py-3 text-[10px] font-black text-slate-500 uppercase">Registration Status</th>
          <th className="px-6 py-3 text-[10px] font-black text-slate-500 uppercase text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200">
        {analyticsArray.map((event, index) => {
          const fillPercentage = Math.min((event.participantCount / event.capacity) * 100, 100);
          const isFull = event.participantCount >= event.capacity;

          return (
            <tr key={index} className="hover:bg-white transition-colors group">
              <td className="px-6 py-4">
                <div className="text-xs font-black text-slate-700 uppercase tracking-tight">{event.name}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-[10px] font-bold text-slate-500 italic">
  {event.date ? dayjs.utc(event.date).format('DD MMM YYYY') : "N/A"}
</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center max-w-[140px]">
                    <span className={`text-[11px] font-black ${isFull ? 'text-red-600' : 'text-slate-700'}`}>
                      {event.participantCount} <span className="text-slate-400 font-normal">/ {event.capacity}</span>
                    </span>
                    {isFull && <span className="text-[8px] bg-red-100 text-red-600 px-1 rounded font-bold uppercase">Full</span>}
                  </div>
                  {/* Capacity Progress Bar */}
                  <div className="w-full max-w-[180px] h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-700 ${isFull ? 'bg-red-500' : 'bg-indigo-500'}`}
                      style={{ width: `${fillPercentage}%` }}
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <button 
                  onClick={() => openParticipantsModal(event)}
                  className="text-[9px] font-black uppercase bg-slate-800 text-white px-3 py-1.5 rounded hover:bg-red-600 transition-all shadow-sm"
                >
                  View Details
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</section>


      {/* --- PARTICIPANT MODAL --- */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b flex justify-between items-center bg-slate-50">
              <h3 className="text-xs font-black uppercase text-slate-800 tracking-tight">
                {selectedEvent.name} — Registrants
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-slate-400 text-2xl hover:text-slate-600 transition-colors"
              >
                &times;
              </button>
            </div>

            {/* Registrant List - Mapping over 'details' from your grouping logic */}
            <div className="max-h-[60vh] overflow-y-auto p-6 space-y-3">
              {selectedEvent.details && selectedEvent.details.length > 0 ? (
                selectedEvent.details.map((person, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-slate-100 bg-slate-50 flex items-center gap-3">
                    <span className="h-6 w-6 bg-slate-800 text-white rounded-full flex items-center justify-center text-[9px] font-black">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-tight">{person.participantname}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{person.email}</p>
                      <p className="text-[9px] text-slate-400 italic">{person.phonenumber}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center py-10 text-xs text-slate-400 italic">No registrant details available.</p>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t text-right">
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="px-6 py-2 bg-slate-200 text-slate-700 rounded-lg text-xs font-black uppercase hover:bg-slate-300 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}


  </div>










  )
}

export default Userdetailadminpage
