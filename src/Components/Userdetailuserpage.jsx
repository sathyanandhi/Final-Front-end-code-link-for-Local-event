import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate,useParams } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { FaImage } from "react-icons/fa6";

const Userdetailuserpage = () => {
     const navigate=useNavigate();
    //     const[userData,setUserData]=useState([]);
        
    //   // const[cards,setcards]=useState([])//
    //  useEffect(()=>{ getUserData()},[]);
    //   const getUserData=()=>{
    //       axios.get("https://692fd19a778bbf9e006e96b2.mockapi.io/userdetail",)
    //        .then((res) => setUserData(res.data));
    //         // Log the entire response
    //       console.log(userData);         
    //       }
    // // Edite Data
    //   const handleEdit = (id) => {
    //     const edit="/userbookingform/"+id;
    //     console.log(edit);
        
    //     navigate(edit);
    //   };
    //   //Delete Data
    //   const handleDelete = (id) => {
    //     axios
    //       .delete(`https://692fd19a778bbf9e006e96b2.mockapi.io/userdetail/${id}`)
    //       .then(() => getUserData());
    //     alert("Deleted successsfully");
    //   };
      

 const { id } = useParams(); // Get the ID from the URL
      const [userdata, setUserdata] = useState("");
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchProfile = async () => {
          try {
            // Construct the API URL using the user ID
            const response = await axios.get(`https://69884937780e8375a687f1bb.mockapi.io/signin/${id}`);
            console.log(response.data);
            setUserdata(response.data);
        
            
            console.log(id);
            
            setLoading(false);
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        };
    
        if (id) {
          fetchProfile();
          //  navigate(`/viewprofile/${id}`)
        }
      }, [id]);








    // const[userData,setUserData]=useState([]);
       
      // const[cards,setcards]=useState([])
    //  useEffect(()=>{ getUserData()},[]);
    //   const getUserData=()=>{
    //       axios.get("https://692fd19a778bbf9e006e96b2.mockapi.io/userdetail",)
    //        .then((res) => setUserData(res.data));
    //         // Log the entire response
    //       console.log(userData);     
            
    //       }
    // const handleClick=()=>{
    //    navigate(`/viewprofile/${id}`)
    // }

  return (
    
    <div className="max-w-lg  mx-auto p-4 bg-amber-100 rounded shadow-md mt-10">
      <h1 className='text-center'>Welcome to User Profile</h1>
                {/* <button onClick={handleClick()}    className="bg-green-400 p-2  rounded m-5 text-3xl text-blue-600 font-bold ">View Your Profile</button> */}
                    <Link to='/userdashboard/:{userdata.id}'><button className="bg-green-400 p-2 rounded m-5 text-3xl text-blue-600 font-bold ">Back</button></Link>
            <div>
              
      <h1>Welcome, {userdata.name}!</h1>
      <p>Email: {userdata.email}</p>
      <p>id:{userdata.id}</p>
    </div>
             {/* <div>
                 {userData.map((data)=>(
                  
              <form key={data.id}>
              <div className="mb-3 ">
                <label className="font-medium text-green-500">Your Name:{data.participantname}</label></div>
              
<div className="mb-3 ">
                <label className="font-medium text-green-500">Your Email:{data.email}</label>
                 </div>


<div className="mb-3 ">
                <label className="font-medium text-green-500">Phone Number:{data.phonenumber}</label>
                 </div>

<div className="mb-3 ">
                <label className="font-medium text-green-500">Your Address:{data.address}</label>
                 </div>

{userData.map((data) => (
        
            <tr key={data.id} >
      <button className="border  rounded  bg-green-500" onClick={()=>handleEdit(data.id)}>Edit </button>
                <button className="border  rounded bg-red-500" onClick={()=>handleDelete(data.id)}>Delete </button></tr>))}
               
              
              
            </form>
 ))} 
        
</div> */}
</div>            
  )
}

export default Userdetailuserpage
