import axios from 'axios'
// import React {useState}from 'react'
import { useForm } from 'react-hook-form'
import { Link,useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Signuppage = () => {
  const userid=useParams();
  const navigate=useNavigate();
     const [text,setText] =useState('');
      const [formData, setformData] = useState({
          name: "",
          email: "",
          password: "",
          confirmpassword:"",
          phonenumber:"",
          address:"",

          // sta  te:""
        });
        const [errors, setErrors] = useState({});
        //Change Event
        const handleChange = (e) => {
          // console.log(formData);
      
          setformData({ ...formData, [e.target.name]: e.target.value });
        };
  
//     const onSubmit=async(data)=>{
//         console.log(data);
//       await  axios.post("https://69884937780e8375a687f1bb.mockapi.io/signin",data)
//         alert("Form submitted");
//         navigate('/adminuserlogin')
// reset()
//     }
      //Load with edit id
      // /Validate function
  const Validate = () => {
    let newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is Required";
    }
    if (!formData.email) {
      newErrors.email = "Email is Required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "This is not a valid email";
    }
      if (!formData.phonenumber) {
      newErrors.phonenumber = "phonenumber is Required";
    }
    else if (!/^[6-9]\d{9}$/.test(formData.phonenumber))
    {
         newErrors.phonenumber = "This is not a valid phone number";
    }

    if (!formData.address) {
      newErrors.address = "Address is Required";
    }
    if (!formData.password) {
      newErrors.password = "Password is REquired";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(formData.password)) {
      newErrors.password = "Invalid,Password must have 8 character,1uppercase & 1lowercase letter,1digit,1special character. ";
    }
    if (!formData.confirmpassword) {
      newErrors.confirmpassword = "Password is REquired";}
      else if (formData.password!==formData.confirmpassword){
         newErrors.confirmpassword="entered password and confirmpassword must be same";
      }
    // if(!formData.state){
    //     newErrors.state="Select state"
    // }
    console.log(newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  function LoadEdituserId()
  {
    const fetchdata=async()=>{
      const token=localStorage.getItem("token");
  console.log(token);
     await axios.get(`https://final-back-end-code-for-local-event.onrender.com/localevent/getuserbyid/${userid.id}`,{
    headers:{Authorization:`Bearer ${token}` }
  })
 
        .then((res)=>{
            let res1=res.data.result;
            console.log(res1);
        
             setformData({...formData,email:res1.email,password:"",name:res1.name,phonenumber:res1.phonenumber,address:res1.address,confirmpassword:""})
             console.log(res1.name);
             console.log(res1.password);
             
        }) 
        .catch((err)=>console.log(err)
        )
    };
    fetchdata();
    

  }
  useEffect(()=>{
    if(userid.id==undefined)
    {
      setText('save')
      
    }else{
      setText('Update')
     LoadEdituserId();
    }
    },[]
)
  //Save
  const handleSubmit = (e) => {
    e.preventDefault();
     if (Validate()) 
      {
         try {
        const token = localStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
      if(text==='save')
      {
      axios.post(
        "https://final-back-end-code-for-local-event.onrender.com/localevent/register",
        formData
      );
    }else{
      axios.put(`https://final-back-end-code-for-local-event.onrender.com/localevent/updateuser/${userid.id}`,formData,config)
      
    }
      console.log(formData);
       setformData({   
        name: "",
          email: "",
          password: "",
          confirmpassword:"",
          phonenumber:"",
          address:"",})
      navigate('/adminuserlogin');
       
        
 
  } 
  catch (err) {
        console.error("Operation failed:", err);
        alert("Something went wrong. Please try again.");
      }}
      
    };
    const handleReset=()=>{
     setformData({   
        name: "",
          email: "",
          password: "",
          confirmpassword:"",
          phonenumber:"",
          address:"",})}
 const   bg="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
 
  return (
    
    <div className='w-full  h-full bg-no-repeat bg-center  bg-cover ' style={{backgroundImage:`url(${bg})`}}>
        
     
           
            <div className="max-w-sm mx-auto p-1 rounded shadow-lg ">
              <div className='max-w-sm mx-auto bg-orange-200 '><h1  className='text-center  mt-2 hover:bg-emerald-400 text-primary font-serif text-    '>Signup Form</h1></div>
       <form className='mt-1' onSubmit={handleSubmit} method='post'>
            <div>  
           <label className='text-black'>Name:           </label>
           <input className='border w-full p-0.5 rounded bg-white' type='text' placeholder='Enter your Name' name="name"
            value={formData.name}    onChange={handleChange}/>
        {errors.name && <p className="text-red-800 text-xl">{errors.name}</p>}           
        </div>

          <div>
           <label className='text-black'>Email:
           </label>
           <input className='border w-full p-0.5 rounded bg-white' type='email' placeholder='Enter your Email' name="email"
            value={formData.email}
            onChange={handleChange}/>
           {errors.email && (
            <p className="text-red-800 text-xl">{errors.email}</p>
          )}
        </div>


        <div >
                <label className="text-black">Phonenumber:</label>
                <input
                  type="number"
                  className="border w-full p-0.5 rounded bg-white"
                   placeholder='Enter your Number'
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                />
                {errors.phonenumber && (
                  <p className="text-red-800 text-xl">{errors.phonenumber}</p>
                )}
              </div>
              <div >
                <label className="text-black">Address</label>
                <input
                  type="text"
                  className="border w-full p-0.5 rounded bg-white"
                   placeholder='Enter your Address'
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <p className="text-red-800 text-xl">{errors.address}</p>
                )}
              </div>

 
        <div>
           <label className='text-black'>Password:
           </label>
           <input className='border w-full p-0.5 rounded bg-white' type='password' placeholder='Enter your Password'
            name="password"
                  value={formData.password}
                  onChange={handleChange} />
            {errors.password && (
                  <p className="text-red-800 text-xl">{errors.password}</p>
                )}
         </div>
         
        <div>
           <label className='text-black'>Confirm Password:
           </label>
           <input className='border w-full p-0.5 rounded bg-white' type='password' placeholder='Enter your confirm Password'
            name="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={handleChange} />
            {errors.confirmpassword && (
                  <p className="text-red-800 text-xl">{errors.confirmpassword}</p>
                )}
         </div>
        <button className='font-bold  text-center bg-green-500 border p-2 rounded hover:bg-orange-500' type='submit'>{text}</button>
         <button type="button" className='bg-orange-400 p-2 rounded m-2 hover:bg-yellow-400 font-bold' onClick={handleReset}>Reset</button>
       </form>
          <p className='font-bold text-orange-500'>If you Already have an Account? <button className='font-bold  text-center bg-orange-300 border p-2 rounded text-blue-700 hover:bg-lime-600' type='submit'><Link to="/adminuserlogin">Click here to Login</Link></button></p>
   </div>
    <div className='bg-white p-1'>
<p className='flex ml-5 justify-center  align-middle'>
   <Link to='https://www.facebook.com/'>  <img className='m-2' src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png"width="40px"height="40px"/></Link>
 <Link to='https://www.instagram.com/accounts/login/?hl=en'><img className='m-2' src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"width="40px"height="40px"/></Link>
  <Link to='https://web.whatsapp.com/'><img className='m-2'src="https://cdn-icons-png.flaticon.com/128/3536/3536445.png"width="40px"height="40px"/></Link>
    <Link to='https://www.linkedin.com/login'><img className='m-2'src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"width="40px"height="40px"/></Link></p>
    <footer className='text-center font-extrabold'>www.localeventhub.com</footer>
    </div>
      
    </div>
   
  )
}

export default Signuppage
