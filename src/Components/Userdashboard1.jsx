// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate ,useParams} from "react-router-dom";
// import { HiLocationMarker } from "react-icons/hi";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Imageupload from "./Imageupload";

// const Userdashboard1 = ({name,isJoined,onJoin}) => {
//    const { id } = useParams();
//       const [eventdata, setData] = useState([]);
//       const [category,setCategory]=useState("All");
//       const[search,setSearch]=useState("");
     
      
//       const navigate=useNavigate();
//   //Load data from adminform
//   useEffect(() =>{ getEventData()}, []);
//   const getEventData = () => {
//     axios
//       .get("http://localhost:3000/localevent/getevent")
//       .then((res) => setData(res.data.result)  
                
//     );
     
      
    
//   }; console.log(eventdata);
  
//    const filtereddata=category==="All"?eventdata:eventdata.filter(data=>data.selectcategory===category)

// console.log(category);
// const filterednames=eventdata.filter((name)=>{
//   if(search===""){
//     return false;}
//     else if(name.eventname.toLowerCase().includes(search.toLocaleLowerCase()))  {
//   console.log();
  
//     return name;
//     }
   
// })


// // const handleSelect = async (id) => {
// //   try {
// //     // Update the 'selected' status in your mock API
// //     await axios.patch(`https://692fd19a778bbf9e006e96b2.mockapi.io/adminbookingform${id}`, { isSelected: true });
    
// //     alert("Card selected and updated!");
// //   } catch (error) {
// //     console.error("Error updating selection:", error);
// //   }
// // };

//   return (
//     <div>
         
//               {/* <div> <header className='bg-cyan-200 flex font-black bg-dark-500 p-7 hover:bg-green-200'> */}
//       {/* <h3 className=''> User Dashboard</h3> */}
//       <div className="bg-lime-300 hover:bg-amber-300"> 
//          {/* <Link to={`/userdashboard/${id}`}><button className="bg-green-400 hover:bg-pink-600 p-2 rounded m-2  text-3xl text-blue-600 font-bold ">Back</button></Link> */}
//       <input type="text "value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" className="p-1 m-2 rounded bg-amber-200"/>
     
//       <select value={category}onChange={(e)=>setCategory(e.target.value)} className=' p-1 rounded  bg-blue-300'><h4>Category</h4>
//                 <option value={"All"}>All</option>
//         <option value={"Music"}>Music</option>
//               <option value={"Art"}>Art</option>
//                <option value={"Meetup"}>Meetup</option>
//                <option value={"Tech"}>Tech</option>
//       </select>
//       {/* </header></div> */}
//           </div>
//             {/* <Imageupload/> */}
//               <h1 className="text-center text-4xl bg-amber-200 p-2">List of Events</h1>
//               <div className="bg-rose-500">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 hover:bg-blue-100 bg-emerald-700 ">  {filterednames.map((name)=>(
//            <Card key={name._id} style={{ width: '21rem' }} className="shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 items-center p-3 m-5 bg-lime-600">
//       <Card.Img variant="top" src={name.img} />
    
//       <Card.Body >
//         <Card.Title>{name.eventname}</Card.Title>
//         <Card.Text>
//          {name.eventdescription}
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>Venue:{name.venue}</ListGroup.Item>
//         <ListGroup.Item>Date:{name.eventdate} ,Time:{name.time}</ListGroup.Item>
//         <ListGroup.Item>Category type:{name.selectcategory}</ListGroup.Item>
//         <ListGroup.Item>Total number of seats-{name.capacity}</ListGroup.Item>
//          <ListGroup.Item><a href={name.map}><HiLocationMarker />Google Map</a></ListGroup.Item>
//         {/* <div className="card" onClick={() => handleSelect(id)}>Select Me</div> */}
//         {/* {isJoined ?(<span>Joined!</span>):(
//         <button onClick={()=>onJoin(name.id)} className="bg-blue-500 p-1 rounded text-white">Register Now</button>)} */}
// <Link to={`/userbookingform/${name._id}`}>
//   <button className="bg-blue-500 p-1 rounded text-white">Register Now</button>
// </Link>

//       </ListGroup> 
//        </Card>
//       ))}</div> 
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 hover:bg-blue-100"> {filtereddata.map((data)=>
            
//              <Card key={data._id} style={{ width: '21rem' }} className="shadow-2xl bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 items-center p-1 m-5 ">
//       <Card.Img variant="top" src={data.img} />
    
//       <Card.Body >
//         <Card.Title>{data.eventname}</Card.Title>
//         <Card.Text>
//          {data.eventdescription}
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>Venue:{data.venue}</ListGroup.Item>
//         <ListGroup.Item>Date:{data.eventdate} ,Time:{data.time}</ListGroup.Item>
//         <ListGroup.Item>Category type:{data.selectcategory}</ListGroup.Item>
//         <ListGroup.Item>Total number of seats-{data.capacity}</ListGroup.Item>
//          <ListGroup.Item><a href={data.map}><HiLocationMarker />Google Map</a></ListGroup.Item>
//  {/* {isJoined ?(<span>Joined!</span>):(
//         <button onClick={()=>onJoin(data.id)} className="bg-blue-500 p-1 rounded text-white">Register Now</button>)} */}

//          {/* <div className="card" onClick={() => handleSelect(id)}>Select Me</div> */}
//         {/* <Link to='/userbookingform'><button className="bg-blue-500 p-1 rounded text-white">Register Now</button></Link> */}
// {/* <button 
//   className="bg-blue-500 p-1 rounded text-white" 
//   onClick={() => navigate(`/userbookingform/${event._id}`)}
// >
//   Register
// </button> */}
// <Link to={`/userbookingform/${data._id}`}>
//   <button className="bg-blue-500 p-1 rounded text-white"  >Register Now</button>
// </Link>

//       </ListGroup>  </Card>
//    )}</div> 
 
    
//     </div>
    
                
        
               
              
      
//     </div>
//   )
// }

// export default Userdashboard1


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { HiLocationMarker, HiMicrophone } from "react-icons/hi"; // Added Mic Icon

const Userdashboard1 = () => {
  const { id } = useParams();
  const [eventdata, setData] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null); 
  // const [search, setSearch] = useState("");
  const [isListening, setIsListening] = useState(false); // Track mic state
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => { 
    getEventData();
    if (id && id !== "null") sessionStorage.setItem('sessionId', id);
  }, [id]);

  const getEventData = () => {
    setLoading(true);
    axios.get("https://final-back-end-code-for-local-event.onrender.com/localevent/getevent")
      .then((res) => {
        setData(res.data.result || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const filteredItems = eventdata.filter((item) => {
    const nowUTC = new Date();
    const todayUTC = Date.UTC(nowUTC.getUTCFullYear(), nowUTC.getUTCMonth(), nowUTC.getUTCDate());
    
    const eDate = new Date(item.eventdate);
    const eventUTC = Date.UTC(eDate.getUTCFullYear(), eDate.getUTCMonth(), eDate.getUTCDate());

    return eventUTC >= todayUTC && 
           (category === "All" || item.selectcategory === category) &&
           item.eventname.toLowerCase().includes(search.toLowerCase());
  });
  // Web Speech API Logic
  const handleVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert("Browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang =  'en-IN';
    
    recognition.onstart = () => setIsListening(true);
    
   recognition.onresult = (event) => {
  // Get the transcript and remove the trailing dot
  const transcript = event.results[0][0].transcript.replace(/\.$/g, "");
  
  setSearch(transcript); 
  setIsListening(false);
};


    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <div className="bg-fuchsia-50 p-6 sticky top-0 z-50 shadow-2xl flex flex-wrap gap-4 items-center justify-center">
        {/* <input 
          type="text" value={search} onChange={(e) => {setSearch(e.target.value); setCurrentPage(1);}} 
          placeholder="Search live events..." 
          className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700 w-72 focus:ring-2 focus:ring-indigo-500 outline-none placeholder-slate-400"
        />
        <button 
            onClick={handleVoiceSearch}
            className={`p-2 rounded-r border-y border-r transition-colors ${isListening ? 'bg-red-500 text-white' : 'bg-gray-100'}`}
          >
            <HiMicrophone className={isListening ? "animate-pulse" : ""} />
          </button>
          <div/> */}
    
        <div className="relative  w-full max-w-sm">
  {/* The Input Field */}
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search events..."
    className="w-full p-2 pr-10 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
  />
  
  {/* The Mic Button positioned INSIDE */}
  <button
    onClick={handleVoiceSearch}
    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all"
    title="Voice Search"
  >
    <HiMicrophone 
      className={`text-xl ${isListening ? 'text-red-500 animate-pulse scale-125' : 'text-gray-400 hover:text-blue-500'}`} 
    />
  </button>
</div>

        <select 
          value={category} onChange={(e) => {setCategory(e.target.value); setCurrentPage(1);}} 
          className="p-3 rounded-xl bg-indigo-600 text-white font-bold cursor-pointer border-none shadow-lg outline-none"
        >
          <option value="All">All Categories</option>
          <option value="Music">Music</option>
          <option value="Art">Art</option>
          <option value="Tech">Tech</option>
          <option value="Meetup">Meetup</option>
        </select>
      </div>

      <div className="p-8 max-w-7xl bg-green-50 mx-auto min-h-screen">
        {loading ? (
          <div className="flex flex-col items-center  py-24 italic text-slate-400 font-bold animate-pulse uppercase tracking-widest">
            Fetching Events...
          </div>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentItems.map((item) => {
              const eventDateObj = new Date(item.eventdate);
              const utcDateString = eventDateObj.toUTCString().split(' ').slice(0, 4).join(' '); 

              let formattedTime = item.time || item.eventtime || "TBA";
              if (formattedTime !== "TBA" && formattedTime.includes(":")) {
                const [h, m] = formattedTime.split(":");
                const hours = parseInt(h);
                const ampm = hours >= 12 ? 'PM' : 'AM';
                formattedTime = `${hours % 12 || 12}:${m} ${ampm}`;
              }

              return (
                /* ADDED: transition-all, hover:shadow-2xl, and hover:-translate-y-4 */
                <div key={item._id} className=" rounded-[2.5rem] shadow-lg border border-slate-200  bg-gray-50 overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-4 group">
                  <div className="relative h-52 overflow-hidden">
                    <img src={item.img} alt={item.eventname} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                        {item.selectcategory}
                    </div>
                  </div>

                  <div className="p-7 flex-grow flex flex-col">
                    <h3 className="text-2xl font-black mb-3 text-slate-800 uppercase tracking-tight truncate group-hover:text-indigo-600 transition-colors">{item.eventname}</h3>
                    
                    <a   href={item.map}   target="_blank"   rel="noreferrer"   className="flex items-center text-decoration-none gap-3 bg-indigo-50 p-4 rounded-2xl mb-4 border border-indigo-100 no-underline transition-all hover:bg-indigo-100"
                    >
                      <div className="bg-indigo-600 p-2 rounded-lg text-white">
                        <HiLocationMarker className="text-xl" />
                      </div>
                      <div className="overflow-hidden">
                        {/* <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest m-0">Venue Location</p> */}
                        <p className="text-sm font-bold text-slate-700 truncate m-0">{item.venue}</p>
                        {/* <p className="text-[9px] text-indigo-600 font-bold underline m-0 italic">View Google Map</p> */}
                      </div>
                    </a>

                    <div className="grid grid-cols-2 gap-2 bg-blue-700 text-white p-4 rounded-2xl mb-4 text-center border border-slate-800 shadow-inner">
                       <div>
                         <p className="text-[8px] text-black uppercase font-black tracking-widest mb-1">Date</p>
                         <p className="text-[11px] font-bold m-0">{utcDateString}</p>
                       </div>
                       <div className="border-l border-slate-700">
                         <p className="text-[8px] text-slate-400 uppercase font-black tracking-widest mb-1">Time</p>
                         <p className="text-[11px] font-bold m-0 tracking-tighter">{formattedTime}</p>
                       </div>
                    </div>

                    <button 
                      onClick={() => setExpandedId(expandedId === item._id ? null : item._id)}
                      className="text-indigo-600 font-black text-[10px] uppercase mb-4 hover:text-indigo-800 text-left transition-colors"
                    >
                      {expandedId === item._id ? "Hide Details ▲" : "View Description ▼"}
                    </button>

                    {expandedId === item._id && (
                      <p className="text-xs text-slate-500 italic mb-4 leading-relaxed border-l-4 border-indigo-200 pl-3 animate-in fade-in slide-in-from-top-1 duration-300">
                        {item.eventdescription || "Registration for this event is now open. Click below to join!"}
                      </p>
                    )}

                    <div className="mt-auto">
                      <p className="text-[10px] font-bold text-indigo-500 mb-2 uppercase tracking-tighter">
                        👥 Capacity: {item.capacity} Seats
                      </p>
                      <Link to={`/userbookingform/${item._id}`}>
                        <button className="w-full bg-blue-300 hover:bg-emerald-500 text-emerald-950 font-black py-4 rounded-2xl uppercase tracking-widest text-xs transition-all shadow-md active:scale-95">
                          Register Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center mt-16 gap-3 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button 
                key={i+1} 
                onClick={() => {setCurrentPage(i+1); window.scrollTo({top: 0, behavior: 'smooth'});}}
                className={`w-12 h-12 rounded-2xl font-bold transition-all border-2 ${currentPage === i+1 ? "bg-emerald-400 border-indigo-600 text-white shadow-xl scale-110" : "bg-white border-slate-200 text-slate-400 hover:border-indigo-600"}`}
              >
                {i+1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Userdashboard1;
