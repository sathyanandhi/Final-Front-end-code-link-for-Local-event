import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { FaImage } from "react-icons/fa6";



const Admindashboard = () => {
   const navigate=useNavigate();
   
  const [eventdata, setData] = useState([]);
  const[userData,setUserData]=useState([]);
  const[cards,setcards]=useState([])
 useEffect(()=>{ getUserData()},[]);
  const getUserData=()=>{
      axios.get("https://692fd19a778bbf9e006e96b2.mockapi.io/userdetail",)
       .then((res) => setUserData(res.data));
        // Log the entire response
      console.log(userData);         
      }
      
  //Load data
  useEffect(() =>{ getEventData()}, []);
  const getEventData = () => {
    axios
      .get("https://692fd19a778bbf9e006e96b2.mockapi.io/adminbookingform",)
      .then((res) => setData(res.data));
  };

  const eventdata1=(cardlist)=>{
    const now=new Date();
    return cardlist.filter(card=>
      {const expiryTime = new Date(card.expiryDate); 
    
    // Compare the expiry time with the current time
    // If the expiry time is in the future (> now), it is "active"
    return expiryTime > now; 
  });
};
  const activeCards = eventdata1(cards)
  //Edite Data
  const handleEdit = (id) => {
    const edit="/adminbookingform/"+id;
    console.log(edit);
    
    navigate(edit);
  };
  //Delete Data
  const handleDelete = (id) => {
    axios
      .delete(`https://692fd19a778bbf9e006e96b2.mockapi.io/adminbookingform/${id}`)
      .then(() => getEventData());
    alert("Deleted successsfully");
  };

  return (
    <div>
      <h1 className='text-center'>Welcome to Admin Dashboard</h1>
      <div></div>
       <div>
        <h1 className="text-center text-4xl bg-amber-200 p-2">List of Participants</h1>
      <table className="  border-collapse border border-gray-400 text-1xl text-black-500 ">
        <thead className="text-center">
            <tr className="bg-red-300 p-7 my-5">
                <th className="border border-yellow-300">Id</th>
                <th className="border border-yellow-300">Participant Name</th>
                <th className="border border-yellow-300">Email</th>
                <th className="border border-yellow-300">Phone Number</th>
                <th className="border border-yellow-300">Address</th>
                
              
            </tr>

        </thead>
      
           {userData.map((data)=>(
              <tbody key={data.id}>
                <tr>
                <td className="border border-blue-300">{data.id} </td>
                <td className="border border-blue-300">{data.participantname} </td>
                <td className="border border-blue-300">{data.email} </td>
                <td className="border border-blue-300">{data.phonenumber} </td>
                <td className="border border-blue-300">{data.address} </td>
                         
            </tr>
          </tbody>  ))} 

       
      </table>
      </div>
       <Link to='/adminbookingform'><button className="bg-green-400 p-2 rounded m-5 text-3xl text-blue-600 font-bold ">Add Event</button></Link>
      <h1 className="text-center text-4xl bg-amber-200 p-2">List of Events</h1>
      <table className="  border-collapse border border-gray-400 text-1xl text-black-500 ">
        <thead className="text-center">
            <tr className="bg-red-300 p-7 my-5">
                <th className="border border-yellow-300">Id</th>
                <th className="border border-yellow-300">Event Name</th>
                <th className="border border-yellow-300">Event Date</th>
                <th className="border border-yellow-300">Event Time</th>
                <th className="border border-yellow-300">Venue</th>
                <th className="border border-yellow-300">Map</th>
                 <th className="border border-yellow-300">Image</th>
                <th className="border border-yellow-300">Capacity</th>
                <th className="border border-yellow-300">Event Description</th>
                <th className="border border-yellow-300">Category</th>

                <th className="border border-yellow-300">Edit/Delete</th>
            </tr>

        </thead>
      
           {eventdata.map((data)=>(
              <tbody key={data.id}>
                <tr>
                <td className="border border-blue-300">{data.id} </td>
                <td className="border border-blue-300">{data.eventname} </td>
                <td className="border border-blue-300">{data.eventdate} </td>
                <td className="border border-blue-300">{data.time} </td>
                <td className="border border-blue-300">{data.venue} </td>
                <td className="border border-blue-300"><a href={data.map}><HiLocationMarker /></a></td>
                <td className="border border-blue-300"><a href={data.img}><FaImage /></a></td>
                <td className="border border-blue-300">{data.capacity} </td>
                <td className="border border-blue-300">{data.eventdescription} </td>
                <td className="border border-blue-300">{data.selectcategory} </td>
                <td> <button className="border  rounded  bg-green-500" onClick={()=>handleEdit(data.id)}>Edit </button>
                <button className="border  rounded bg-red-500" onClick={()=>handleDelete(data.id)}>Delete </button></td>
            </tr>
</tbody>
           ))}
        

       
      </table>
      
    </div>
  )
}

export default Admindashboard
