// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';


//   const { register, handleSubmit, reset} = useForm();
// //   const apiEndpoint = `https://69884937780e8375a687f1bb.mockapi.io/signin{id}`; // Replace with your mock API endpoint

// //   useEffect(() => {
// //     // Fetch data for the specific user and pre-fill the form
// //     const fetchUserData = async () => {
// //       try {
// //         const response = await axios.get(apiEndpoint);
// //         console.log(response);
        
// //         const { name, email,phonenumber,address,password,confirmpassword } = response.data;
// //         console.log(response.data);
        
// //         // Use setValue to populate form fields
// //         setValue('name', name);
// //         setValue('email', email);
// //         setValue('phonenumber', phonenumber);
// //         setValue('adddress', address);
// //         setValue('password',password);
// //         setValue('confirmpassword', confirmpassword);




// //       } catch (error) {
// //         console.error('Error fetching user data:', error);
// //       }
// //     };

// //     fetchUserData();
// //   }, [id, setValue, apiEndpoint]);

// //   const onSubmit = async (data) => {
// //     try {
// //       // Send a PUT request to update the data
// //       await axios.put(apiEndpoint, data);
// //       alert('User details updated successfully!');
// //       onUpdateSuccess(); // Callback to refresh the user list or perform other actions
// //     } catch (error) {
// //       console.error('Error updating user data:', error);
// //     }
// //   };
// // const = () => {
// const  Editsignuppage = async ({id}) => {
//   const response = await axios.get(`https://69884937780e8375a687f1bb.mockapi.io{id}`);
//   reset(response.data); // This fills the form with existing signup details
// };
// const onSubmit = async (data) => {
//   try {
//     await axios.put(`https://69884937780e8375a687f1bb.mockapi.io{data.id}`, data);
//     // Refresh your list or redirect the user
//   } catch (error) {
//     console.error("Update failed", error);
//   }
// ;


//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>
//          Name:
//         <input {...register('name')} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" {...register('email')} />
//       </label>
//       <br />
//       <button type="submit">Save Changes</button>
//     </form>
//   );
// };

// export default Editsignuppage;
