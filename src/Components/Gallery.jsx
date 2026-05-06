
import React, { useState } from 'react';
import Imageupload from './Imageupload';
import Imagedisplay from './Imagedisplay';

export default function App() {
  const [imageURL, setImageURL] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Image Transfer</h1>
      {/* Pass the setter function to the uploader */}
      <Imageupload onImageUpload={setImageURL} />
      <hr />
      {/* Pass the image URL to the display component */}
      <Imagedisplay src={imageURL} />
    </div>
  );
}