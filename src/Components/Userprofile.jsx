import React from 'react'
import { useState,useEffect, } from 'react';
import { Link ,useNavigate,useParams} from 'react-router-dom'
import axios from "axios";

const Userprofile = () => {
      const navigate=useNavigate();
const userid=useParams
  const [userdata, setuserData] = useState([]);
  //Load data

  useEffect(() =>{ getuserData()}, []);
  const getuserData =async()=> {
    try{
  const token=localStorage.getItem("token");
  console.log(token);
    const res=await axios.get(`http://localhost:3000/localevent/getuserbyid/${userid._id}`,{
    headers:{Authorization:`Bearer ${token}` }
  })
  console.log(res.data.result);
      setuserData(res.data.result);
      console.log(userdata);
      
  }
  catch(err)
{
  console.log("Error in data",err);
  
}}
  return (
    <div>
      {userdata.map((data)=>(
        < ul key={data._id}>
          <li>welcome {data.name}</li></ul>
      ))}


    </div>
  )
}

export default Userprofile
