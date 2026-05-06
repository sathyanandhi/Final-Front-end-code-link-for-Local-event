// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate,useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// const Userbookingform = () => {
//        const navigate=useNavigate();
// //     const userid=useParams();
// //     const [text,setText] =useState('');
// //     // const[carddata,setcarddata]=useState("")
// //     //  const [count, setCount] = useState(0);
// //   //UseState hook
// //   const [formData, setformData] = useState({
// //     participantname: "",
// //     email: "",
// //     phonenumber: "",
// //     address:"",
    
// //  });
//  const location = useLocation();
//   const eventIdFromState = location.state?.eventId;
// const { eventId } = useParams(); // Use this instead of location.state

// const [formData, setformData] = useState({
//   participantname: "",
//   email: "",
//   phonenumber: "",
//   address: "",
//   event: eventId || "" // This will never be empty on refresh
// });

//     // sta  te:""
 
//   const [errors, setErrors] = useState({});
//   const sessionid=sessionStorage.getItem('sessionId')
//   console.log(sessionid);
//   const id=sessionid;
  
//   //Change Event
//   const handleChange = (e) => {
//     // console.log(formData);

//     setformData({ ...formData, [e.target.name]: e.target.value });
//   };
//   //Validate function
//   const Validate = () => {
//     let newErrors = {};
//     if (!formData.participantname) {
//       newErrors.participantname = "Name is Required";
//     }
//     if (!formData.email) {
//       newErrors.email = "Email is Required";
//     } 
//     else if ( !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email) ) {
//       newErrors.email = "This is not a valid email";}
//     if (!formData.phonenumber) {
//       newErrors.phonenumber = "phonenumber is Required";
//     }
//     else if (!/^[6-9]\d{9}$/.test(formData.phonenumber))
//     {
//          newErrors.phonenumber = "This is not a valid phone number";
//     }

//     if (!formData.address) {
//       newErrors.address = "Address is Required";
//     }
   

//     console.log(newErrors);

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
  
        
   
// //   //Save
// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     if (Validate()) {
      
// //             {
// //             axios.post(
// //               "http://localhost:3000/localevent/booking", formData
// //             );
// //             alert("Your Data saved Sucessfully")
// //           }
// //             console.log(formData);
      
     
     
// //       alert("Your Data updated Sucessfully")
       
    
     
// //       setformData({   participantname: "",
// //     email: "",
// //     phonenumber: "",
// //     address:"",  
// // })
// //       navigate(`/userdashboard1/${id}`);
     
// // }
// //   };
//   // Save
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (Validate()) {
//       console.log("Sending Event ID:", formData.event); // Log the actual ID
//       try {
//         // 1. Send data to backend (Using your Express port 5000)
//         const response = await axios.post(
//           "http://localhost:3000/localevent/booking", 
//           formData
//         );

//         // 2. Only if successful, show alert and navigate
//         if (response.status === 201 || response.status === 200) {
//           alert("Your registration was successful!");
          
//           // Reset form fields
//           setformData({   
//             participantname: "",
//             email: "",
//             phonenumber: "",
//             address: "",
//             event: eventIdFromState || "" 
//           });

//           // Navigate back to dashboard
//           navigate(-1);
//         }
//       } catch (err) {
//         // Handle backend errors (like "Participant already exists")
//         console.error(err);
//         alert(err.response?.data?.message || "Something went wrong during registration");
//       }
//     }
//   };


//   return (
//     <div>
//        <div className="max-w-lg  mx-auto p-4 bg-amber-100 rounded shadow-md mt-10">
// <button 
//   onClick={() => navigate(-1)} 
//   className="bg-blue-500 text-white p-3 rounded m-4"
// >
//   Go Back
// </button>            <h2 className="text-xl font-bold mb-4 text-fuchsia-900 text-center">
//               Registration form
//             </h2>
//             <form onSubmit={handleSubmit} method="POST">
//               <div className="mb-3">
//                 <label className="font-medium text-fuchsia-900">Participant Name</label>
//                 <input
//                   type="text"
//                   className="border w-full p-2 rounded"
//                   name="participantname"
//                   value={formData.participantname}
//                   onChange={handleChange}
//                 />
// {errors.participantname && <p className="text-red-800 text-xl">{errors.participantname}</p>}
//               </div>
//               <div className="mb-3">
//                 <label className="font-medium text-fuchsia-900">Email</label>
//                 <input
//                   type="email"
//                   className="border w-full p-2 rounded"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && (
//                   <p className="text-red-800 text-xl">{errors.email}</p>
//                 )}
//               </div>
//               <div className="mb-3">
//                 <label className="font-medium text-fuchsia-900">Phonenumber</label>
//                 <input
//                   type="number"
//                   className="border w-full p-2 rounded"
//                   name="phonenumber"
//                   value={formData.phonenumber}
//                   onChange={handleChange}
//                 />
//                 {errors.phonenumber && (
//                   <p className="text-red-800 text-xl">{errors.phonenumber}</p>
//                 )}
//               </div>
//               <div className="mb-3">
//                 <label className="font-medium text-fuchsia-900">Address</label>
//                 <input
//                   type="text"
//                   className="border w-full p-2 rounded"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                 />
//                 {errors.address && (
//                   <p className="text-red-800 text-xl">{errors.address}</p>
//                 )}
//               </div>
              
//               <button
//                 type="submit" 
//                 className="bg-blue-900 text-white px-4 py-2 rounded-4xl hover:bg-blue-600"
//              >
//                 Save
//               </button>
              
//             </form>
            
//           </div>
        
//     </div>
//   )
// }

// export default Userbookingform



import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Userbookingform = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const [formData, setformData] = useState({
    participantname: "",
    email: "",
    phonenumber: "",
    address: "",
    event: eventId || ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const Validate = () => {
    let newErrors = {};
    if (!formData.participantname) newErrors.participantname = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phonenumber) {
      newErrors.phonenumber = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phonenumber)) {
      newErrors.phonenumber = "Must be a valid 10-digit number";
    }
    if (!formData.address) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async (event) => {
  event.preventDefault();
  if (Validate()) {
    try {
      const baseUrl = "https://final-back-end-code-for-local-event.onrender.com";
      
      // 1. Get Token and Session ID
      const token = localStorage.getItem("userToken");
      const sessionId = sessionStorage.getItem('sessionId'); 

      // 2. Prepare Payload (Ensuring event and user IDs are present)
      const payload = {
        ...formData,
        event: eventId, // From useParams()
        user: sessionId // Linking the booking to the logged-in user
      };

      console.log("Submitting Payload:", payload);

      // 3. Send Request with Authorization Headers
      const response = await axios.post(`${baseUrl}/booking`, payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 201 || response.status === 200) {
        alert("Registration Successful!");
        navigate(-1);
      }
    } catch (err) {
      // 4. LOG THE ACTUAL SERVER MESSAGE
      // This will tell you EXACTLY which field is failing validation
      console.error("Server says:", err.response?.data);
      alert(err.response?.data?.message || "Registration failed (400 Bad Request)");
    }
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-indigo-600 p-1 text-center">
          <h2 className="text-2xl font-bold text-white">Join Event</h2>
          <p className="text-indigo-100 text-sm mt-1">Complete the form to reserve your spot</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {/* Participant Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Participant Name</label>
            <input
              type="text"
              name="participantname"
              className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-all duration-200 
                ${errors.participantname ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'}`}
              value={formData.participantname}
              onChange={handleChange}
              placeholder="John Doe"
            />
            {errors.participantname && <span className="text-red-500 text-xs mt-1">{errors.participantname}</span>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-all duration-200 
                ${errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phonenumber"
              className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-all duration-200 
                ${errors.phonenumber ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'}`}
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="9876543210"
            />
            {errors.phonenumber && <span className="text-red-500 text-xs mt-1">{errors.phonenumber}</span>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Address</label>
            <textarea
              name="address"
              rows="2"
              className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-all duration-200 
                ${errors.address ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'}`}
              value={formData.address}
              onChange={handleChange}
              placeholder="Street name, City..."
            />
            {errors.address && <span className="text-red-500 text-xs mt-1">{errors.address}</span>}
          </div>

          {/* Buttons */}
          <div className="pt-2 flex flex-col gap-3">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transform transition-active active:scale-95 shadow-lg shadow-indigo-200"
            >
              Confirm Booking
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full bg-slate-100 text-slate-600 font-semibold py-3 rounded-xl hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Userbookingform;
