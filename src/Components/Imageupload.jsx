import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Imageupload = () => {
   const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary URL for immediate preview (optional)
      setImageSrc(URL.createObjectURL(file));

      // Convert image file to a Base64 string for localStorage
      const reader = new FileReader();
      reader.onload = (event) => {
        // The result is the Base64 string (Data URL)
        localStorage.setItem("uploadedImage", event.target.result); 
      };
      reader.readAsDataURL(file);
    }
  };
  const goToDisplayPage = () => {
    // Navigate to the display page
    navigate('/imagedisplay'); 
  };
  return (

    <div className='bg-cyan-500'>
       <h2>Upload Image</h2>
      <input type="file" className='bg-amber-300 hover:bg-blue-600 hover:text-white p-2 rounded m-3' accept="image/*" onChange={handleImageChange} />
      {imageSrc && (
        <div>
          <h3>Preview:</h3>
          <img src={imageSrc} alt="Preview" style={{ maxWidth: '300px' }} />
          <br />
          <button onClick={goToDisplayPage}>View Image on Gallery</button>
        </div>
      )}
    </div>
  )
}

export default Imageupload
