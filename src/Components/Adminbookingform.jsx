import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate,useParams } from "react-router-dom";

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const Adminbookingform = () => {
       const navigate=useNavigate();
    const eventid=useParams();
    const [text,setText] =useState('');
  //UseState hook
  const [formData, setformData] = useState({
    eventname: "",
    eventdate: "",
    eventtime: "",
    venue:"",
    map:"",
    img:"",
    capacity:"",
    eventdescription:"",
    selectcategory:'Workshop',

    // sta  te:""
  });
  const [errors, setErrors] = useState({});
  //Change Event
  const handleChange = (e) => {
    // console.log(formData);

    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  //Validate function
  const Validate = () => {
    let newErrors = {};
    if (!formData.eventname) {
      newErrors.name = "Name is Required";
    }
    if (!formData.eventdate) {
      newErrors.eventdate = "Event date is Required";
    } 
    if (!formData.eventtime) {
      newErrors.eventtime = "Event time is Required";
    }
    if (!formData.venue) {
      newErrors.venue = "Event place is Required";
    }
    if (!formData.map) {
      newErrors.map = "Map url is Required";
    }
     if (!formData.img) {
      newErrors.img = "Image url is Required";
    }
    if (!formData.capacity) {
      newErrors.capacity = "capacity is Required";
    }
    if (!formData.eventdescription) {
      newErrors.eventdescription= "Event Description is Required";
    }
    if (!formData.selectcategory) {
      newErrors.selectcategory= "Select anyone category is Required";
    }
    // if(!formData.state){
    //     newErrors.state="Select state"
    // }

    console.log(newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  //Load with edit id
 function LoadEditEventId() {
  const fetchdata = async () => {
    axios.get(`http://localhost:3000/localevent/geteventbyid/${eventid.id}`)
      .then((res) => {
        let res1 = res.data.result;
        
        // Fix: Use dayjs.utc to ensure the date doesn't drop by a day
        // const formattedForInput = res1.eventdate ? dayjs.utc(res1.eventdate).format('YYYY-MM-DD') : "";
const formattedForInput = res1.eventdate ? dayjs.utc(res1.eventdate).format('YYYY-MM-DD') : "";

        setformData({
          ...formData,
          eventname: res1.eventname,
          eventdate: formattedForInput,
          eventtime: res1.eventtime,
          venue: res1.venue,
          map: res1.map,
          img: res1.img,
          capacity: res1.capacity,
          eventdescription: res1.eventdescription,
          selectcategory: res1.selectcategory,
        });
      })
      .catch((err) => console.log(err));
  };
  fetchdata();
}

  useEffect(()=>{
    if(eventid.id==undefined)
    {
      setText('save')
      
    }else{
      setText('Update')
      LoadEditEventId();
    }
    },[]
)
  //Save
// Correct Update Logic
const handleSubmit = async (e) => {
  e.preventDefault();
  if (Validate()) {
    try {
      const formattedDate = dayjs.utc(formData.eventdate).format('DD/MM/YYYY');
      const payload = { ...formData, eventdate: formattedDate };

      // Make sure the ID is correct and the method is PUT
      const response = await axios.put(`https://final-back-end-code-for-local-event.onrender.com/localevent/updateevent/${eventid.id}`, payload);
      
      if (response.status === 200) {
        alert("Event Updated Successfully");
        navigate('/admindashboard');
      }
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
    }
  }
};



  return (
    // <div className="bg-green-300">
    //    <div className="max-w-lg  mx-auto p-4 bg-amber-100 rounded shadow-md ">
    //          <Link to="/admindashboard"><button className="bg-blue-500 text-white p-3 rounded m-4">Go Back</button></Link> 
    //         <h2 className="text-xl font-bold mb-4 text-fuchsia-900 text-center">
    //           Registration form
    //         </h2>
    //         <form onSubmit={handleSubmit} method="POST">
    //           <div className="mb-3">
    //             <label className="font-medium text-fuchsia-900">Event Name</label>
    //             <input
    //               type="text"
    //               className="border w-full p-2 rounded"
    //               name="eventname"
    //               value={formData.eventname}
    //               onChange={handleChange}
    //             />
    //             {errors.name && <p className="text-red-800 text-xl">{errors.name}</p>}
    //           </div>
    //           <div className="mb-3">
    //             <label className="font-medium text-fuchsia-900">Event Date</label>
    //             <input
    //               type="date"
    //               className="border w-full p-2 rounded"
    //               name="eventdate"
    //               value={formData.eventdate}
    //               onChange={handleChange}
    //             />
    //             {errors.eventdate && (
    //               <p className="text-red-800 text-xl">{errors.eventdate}</p>
    //             )}
    //           </div>
    //           <div className="mb-3">
    //             <label className="font-medium text-fuchsia-900">Event Time</label>
    //             <input
    //               type="time"
    //               className="border w-full p-2 rounded"
    //               name="eventtime"
    //               value={formData.eventtime}
    //               onChange={handleChange}
    //             />
    //             {errors.eventtime && (
    //               <p className="text-red-800 text-xl">{errors.eventtime}</p>
    //             )}
    //           </div>
    //           <div className="mb-3">
    //             <label className="font-medium text-fuchsia-900">Venue</label>
    //             <input
    //               type="text"
    //               className="border w-full p-2 rounded"
    //               name="venue"
    //               value={formData.venue}
    //               onChange={handleChange}
    //             />
    //             {errors.venue && (
    //               <p className="text-red-800 text-xl">{errors.venue}</p>
    //             )}
    //           </div>
    //           <div className="mb-3">
    //             <label className="font-medium text-fuchsia-900">Google Map url:</label>
    //             <input
    //               type="url"
    //               className="border w-full p-2 rounded"
    //               name="map"
    //               value={formData.map}
    //               onChange={handleChange}
    //             />
    //             {errors.map && (
    //               <p className="text-red-800 text-xl">{errors.map}</p>
    //             )}
    //           </div>
    //      <div className="mb-3">
    //             <label className="font-medium text-fuchsia-900">Image url:</label>
    //             <input
    //               type="url"
    //               className="border w-full p-2 rounded"
    //               name="img"
    //               value={formData.img}
    //               onChange={handleChange}
    //             />
    //             {errors.img && (
    //               <p className="text-red-800 text-xl">{errors.img}</p>
    //             )}
    //           </div>
    //            <div className="mb-3">
    //             <label className="font-medium text-fuchsia-900">Capacity:</label>
    //             <input
    //               type="number"
    //               className="border w-full p-2 rounded"
    //               name="capacity"
    //               value={formData.capacity}
    //               onChange={handleChange}
    //             />
    //             {errors.capacity && (
    //               <p className="text-red-800 text-xl">{errors.capacity}</p>
    //             )}
    //           </div>
    //           <div className="mb-3">
    //             <label className="font-medium text-fuchsia-900">Event Description:</label>
    //             <input
    //               type="text"
    //               className="border w-full p-2 rounded"
    //               name="eventdescription"
    //               value={formData.eventdescription}
    //               onChange={handleChange}
    //             />
    //             {errors.eventdescription&& (
    //               <p className="text-red-800 text-xl">{errors.eventdescription}</p>
    //             )}
    //           </div>
    //           {/* <div className="mb-3">
    //             <label className="font-medium text-fuchsia-900">Event Category:</label>
    //             <input
    //               type="text"
    //               className="border w-full p-2 rounded"
    //               name="category"
    //               value={formData.category}
    //               onChange={handleChange}
    //             />
    //             {errors.category && (
    //               <p className="text-red-800 text-xl">{errors.category}</p>
    //             )}
    //           </div> */}
    //           <div className="mb-3">
    //             <label className="font-medium text-fuchsia-900">Select Category</label>
    //            <select  className="border w-full p-2 rounded" name="selectcategory"  value={formData.selectcategory} onChange={handleChange}>
    //               <option value="">--Select--</option>
    //               <option value="Music">Music</option>
    //               <option value="workshop">Workshop</option>
    //               <option value="Meetup">Meetups</option>
    //               <option value="Tech">Tech</option>
    //               <option value="Art">Art</option>
               
    //            </select>
    //                {errors.selectcategory && <p className="text-red-800 text-xl">{errors.selectcategory}</p>} 
    //           </div>
    //           <button
    //             type="submit"
    //             className="bg-blue-900 text-white px-4 py-2 rounded-4xl hover:bg-blue-600"
    //           >
    //             {text}
    //           </button>
    //         </form>
    //       </div>
        
    // </div>

      
    <div className="min-h-screen  py-10 px-4">
      <div className="max-w-4xl mx-auto bg-amber-100 rounded-2xl shadow-xl p-6 md:p-10">
        <div className="flex justify-between items-center mb-8 border-b border-amber-200 pb-4">
          <h2 className="text-2xl font-black text-fuchsia-900 uppercase italic tracking-widest">
            {text} Event
          </h2>
          <Link to="/admindashboard/Events">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-md uppercase">
              ← Go Back
            </button>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Horizontal Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            
            {/* Event Name */}
            <div className="flex flex-col">
              <label className="text-xs font-black uppercase text-fuchsia-900 mb-1 ml-1">Event Name</label>
              <input
                type="text"
                className="border-2 border-amber-200 focus:border-fuchsia-500 outline-none w-full p-2.5 rounded-xl bg-white/50"
                name="eventname"
                placeholder="e.g. Tech Conference 2024"
                value={formData.eventname}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-600 text-[10px] font-bold mt-1 uppercase">{errors.name}</p>}
            </div>

            {/* Category */}
            <div className="flex flex-col">
              <label className="text-xs font-black uppercase text-fuchsia-900 mb-1 ml-1">Category</label>
              <select
                className="border-2 border-amber-200 focus:border-fuchsia-500 outline-none w-full p-2.5 rounded-xl bg-white/50"
                name="selectcategory"
                value={formData.selectcategory}
                onChange={handleChange}
              >
                 <option value="">--Select--</option>
                  <option value="Music">Music</option>
                  <option value="workshop">Workshop</option>
                   <option value="Meetup">Meetups</option>
                   <option value="Tech">Tech</option>
                   <option value="Art">Art</option>

              </select>
                        {errors.selectcategory && <p className="text-red-600 text-[10px] font-bold mt-1 uppercase">{errors.selectcategory}</p>} 

            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-xs font-black uppercase text-fuchsia-900 mb-1 ml-1">Event Date</label>
              <input
                type="date"
                className="border-2 border-amber-200 focus:border-fuchsia-500 outline-none w-full p-2.5 rounded-xl bg-white/50"
                name="eventdate"
                value={formData.eventdate}
                onChange={handleChange}
              />
              {errors.eventdate && <p className="text-red-600 text-[10px] font-bold mt-1 uppercase">{errors.eventdate}</p>}
            </div>

            {/* Time */}
            <div className="flex flex-col">
              <label className="text-xs font-black uppercase text-fuchsia-900 mb-1 ml-1">Event Time</label>
              <input
                type="time"
                className="border-2 border-amber-200 focus:border-fuchsia-500 outline-none w-full p-2.5 rounded-xl bg-white/50"
                name="eventtime"
                value={formData.eventtime}
                onChange={handleChange}
              />
              {errors.eventtime && <p className="text-red-600 text-[10px] font-bold mt-1 uppercase">{errors.eventtime}</p>}
            </div>

            {/* Venue */}
            <div className="flex flex-col">
              <label className="text-xs font-black uppercase text-fuchsia-900 mb-1 ml-1">Venue</label>
              <input
                type="text"
                className="border-2 border-amber-200 focus:border-fuchsia-500 outline-none w-full p-2.5 rounded-xl bg-white/50"
                name="venue"
                placeholder="Hotel Grand Plaza"
                value={formData.venue}
                onChange={handleChange}
              />
              {errors.venue && <p className="text-red-600 text-[10px] font-bold mt-1 uppercase">{errors.venue}</p>}
            </div>

            {/* Capacity */}
            <div className="flex flex-col">
              <label className="text-xs font-black uppercase text-fuchsia-900 mb-1 ml-1">Capacity</label>
              <input
                type="number"
                className="border-2 border-amber-200 focus:border-fuchsia-500 outline-none w-full p-2.5 rounded-xl bg-white/50"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
              />
              {errors.capacity && <p className="text-red-600 text-[10px] font-bold mt-1 uppercase">{errors.capacity}</p>}
            </div>

            {/* Image URL */}
            <div className="flex flex-col">
              <label className="text-xs font-black uppercase text-fuchsia-900 mb-1 ml-1">Image URL</label>
              <input
                type="url"
                className="border-2 border-amber-200 focus:border-fuchsia-500 outline-none w-full p-2.5 rounded-xl bg-white/50"
                name="img"
                value={formData.img}
                onChange={handleChange}
              />
                            {errors.img && <p className="text-red-600 text-[10px] font-bold mt-1 uppercase">{errors.img}</p>}

            </div>

            {/* Map URL */}
            <div className="flex flex-col">
              <label className="text-xs font-black uppercase text-fuchsia-900 mb-1 ml-1">Map URL</label>
              <input
                type="url"
                className="border-2 border-amber-200 focus:border-fuchsia-500 outline-none w-full p-2.5 rounded-xl bg-white/50"
                name="map"
                value={formData.map}
                onChange={handleChange}
              />
                                          {errors.map && <p className="text-red-600 text-[10px] font-bold mt-1 uppercase">{errors.map}</p>}

            </div>
          </div>

          {/* Full Width: Description */}
          <div className="flex flex-col mt-4">
            <label className="text-xs font-black uppercase text-fuchsia-900 mb-1 ml-1">Event Description</label>
            <textarea
              className="border-2 border-amber-200 focus:border-fuchsia-500 outline-none w-full p-3 rounded-xl bg-white/50 h-32"
              name="eventdescription"
              placeholder="Tell us more about the event..."
              value={formData.eventdescription}
              onChange={handleChange}
            ></textarea>
            {errors.eventdescription && <p className="text-red-600 text-[10px] font-bold mt-1 uppercase">{errors.eventdescription}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-fuchsia-900 hover:bg-fuchsia-800 text-white font-black py-4 rounded-xl shadow-lg transition-all uppercase tracking-widest mt-6"
          >
            {text} Event Details
          </button>
        </form>
      </div>
    </div>
  

  )
}

export default Adminbookingform
