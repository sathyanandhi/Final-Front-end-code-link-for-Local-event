import React, { useState, useEffect } from 'react';
import Imageupload from './Imageupload';
import { Link } from 'react-router-dom';

const Imagedisplay = () => {
    const [displayedImageSrc, setDisplayedImageSrc] = useState(null);

  useEffect(() => {
    // Get the image data URL from localStorage when the component mounts
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setDisplayedImageSrc(storedImage);
    }
  }, []);
  
  return (
    <div className='justify-center align-middle m-20 bg-amber-400 '>
                     <div className="bg-lime-300 hover:bg-amber-300">  <Link to={`/userdashboard/${id}`}><button className="bg-green-400 hover:bg-pink-600 p-2 rounded m-2  text-3xl text-blue-600 font-bold ">Back</button></Link></div>
           
                   {/* <Link to="/userdashboard1"><button className="bg-blue-500 text-white p-3 rounded m-4">Go Back</button></Link>  */}

      <h2>Your Uploaded Image</h2>
      {displayedImageSrc ? (
        <img src={displayedImageSrc} alt="Uploaded" style={{ maxWidth: '400px' }} />
      ) : (
        <p>No image found in storage. Please go back and upload one.</p>
      )}
    </div>
  )
}

export default Imagedisplay
