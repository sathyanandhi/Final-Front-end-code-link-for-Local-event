import React, { useState } from "react";
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link ,useParams,useNavigate} from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
const AdminUserlogin = () => {
  const {register,handleSubmit,reset,formState:{errors}}=useForm()
  const navigate=useNavigate();

  // const {_id}=useParams;
    const [radioValue, setRadioValue] = useState('1');

               const radios = [{ name: 'Admin', value: '1' },{ name: 'User', value: '2' },];
            const onSubmit = async (data) => {
  if (radioValue === '2') { // User Login
    try {
      const res = await axios.post("https://final-back-end-code-for-local-event.onrender.com/localevent/login", data);
         // 2. Clear old session data to prevent sync issues
      localStorage.clear();
      // Save token
      localStorage.setItem("token", res.data.token);
         localStorage.setItem("user", JSON.stringify(res.data));

      console.log(res.data);

      
      console.log(res.data.token);
      
      // Success! Use res.data._id (matching your backend response)
      alert("Login Successful!");
// navigate(`/viewprofile/${_id}` )           
      navigate(`/userdashboard/${res.data._id}`); 
      
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Invalid credentials");
    }reset()
  } else if(radioValue==='1') {
    // Logic for Admin Login (radioValue === '1')
    if (data.email === 'admin@gmail.com' && data.password === 'admin@123') {
      navigate('/admindashboard');
    } else  {
      alert("Incorrect Admin credentials");
    }
      reset()
  }
};
   
      
       
         
    //            const onSubmit=async(data)=>{
    // if(radioValue==='2')
    // {
    //       console.log(data);
    //  const response=await axios.get("https://69884937780e8375a687f1bb.mockapi.io/signin",data)
    //  const users=response.data;
    //  console.log(users);
    //  console.log(data);
    //    const user = users.find(u=> u.email === data.email && u.password === data.password);
    //  if (user) {
                
    //             alert('User Login Successful!')
    //       //  navigate('/userprofile') 
    //                  navigate(`/userdashboard/${user.id}`)   
    //                  console.log(user.name);
                           

    //  }
    //  else{
    //   alert("Incorrect user email or password")
    //  }
    //     reset()
    // }
    // else if(radioValue==='1'){
    //  console.log(data);
    //  if(data.email==='admin@gmail.com' && data.password==='admin@123'){
    //   alert('Admin Login Successful!')
    //   navigate('/admindashboard')
    //  }
    //  else{
    //   alert("Incorrect Admin email or password")
    //  return reset();       ;
    //  }
     
    // }}
    
    
    const bg="https://image.slidesdocs.com/responsive-images/background/abstract-green-pattern-consulting-professional-toolkit-geometric-powerpoint-background_1ddd027c66__960_540.jpg"
  return (
    <div className='relative h-screen w-full bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${bg})`}}>
       <div className="max-w-sm mx-auto p-1 rounded shadow-lg ">
              <div className='max-w-sm mx-auto bg-orange-200 '><h1  className='text-center  mt-2 hover:bg-emerald-400 text-primary font-serif text-    '>Login Form</h1></div>
       <form className='mt-1' onSubmit={handleSubmit(onSubmit)} >
         <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
        <div>
       <label className='text-black'>Email:
           </label>
           <input className='border w-full p-0.5 rounded bg-white' type='email' placeholder='Enter your Email' {...register("email",{required:"Email is Required",
            pattern:{
                    value:/^\S+@\S+$/i,
                    message:"Invalid email format",
                },
           })}/>
           <span style={{color:'red'}}>{errors.email?.message}</span></div>
             <div>  <label className='text-black'>Password:
           </label>
           <input className='border w-full p-0.5 rounded bg-white' type='password'  placeholder='Enter your Password' {...register("password",{required:"Password is Required",
           
           })}/>
           <span style={{color:'red'}}>{errors.password?.message}</span></div>
          <button className='font-bold  text-center bg-green-500 border p-2 rounded hover:bg-orange-500' type='submit' >Login</button> 
         <button type="button" className='bg-orange-400 p-2 rounded m-2 hover:bg-yellow-400 font-bold' onClick={() => reset()}>Reset</button>
       </form>
          <p className='font-bold text-orange-500'>If you don't have an Account?<Link to='/signup'><button className='font-bold  text-center bg-orange-300 border p-2 rounded text-blue-700 hover:bg-lime-600' type='button'>Click here to Signup</button></Link> </p>
   </div>
    
    </div>
  )
}

export default AdminUserlogin;
