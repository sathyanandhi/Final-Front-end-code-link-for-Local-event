import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { FaImage } from "react-icons/fa6";

const Userdetaileditpage = () => {
    const navigate=useNavigate();
    const[userData,setUserData]=useState([]);
    
  // const[cards,setcards]=useState([])//
 useEffect(()=>{ getUserData()},[]);
  const getUserData=async()=>{
      // axios.get("https://692fd19a778bbf9e006e96b2.mockapi.io/userdetail",)
      //  .then((res) => setUserData(res.data));
      //   // Log the entire response
      // console.log(userData);         
      // }

try{
  const token=localStorage.getItem("token");
  console.log(token);
  
  const res=await axios.get("http://localhost:3000/localevent/getuser",{
    headers:{Authorization:`Bearer ${token}` }
  })
  console.log(res.data.result);
  
  setProducts(res.data.result)
  
        setLoading(false);
}
catch(err)
{
  console.log("Error in data",err);
  
}}


// Edite Data
  const handleEdit = (id) => {
    const edit="/userbookingform/"+id;
    console.log(edit);
    
    navigate(edit);
  };
  //Delete Data
  const handleDelete = (id) => {
    axios
      .delete(`https://692fd19a778bbf9e006e96b2.mockapi.io/userdetail/${id}`)
      .then(() => getUserData());
    alert("Deleted successsfully");
  };

  return (
    <div>
        
         {userData.map((data) => (
        
            <tr key={data.id} >
      <button className="border  rounded  bg-green-500" onClick={()=>handleEdit(data.id)}>Edit </button>
                <button className="border  rounded bg-red-500" onClick={()=>handleDelete(data.id)}>Delete </button></tr>))}
    </div>
  )
}

export default Userdetaileditpage
