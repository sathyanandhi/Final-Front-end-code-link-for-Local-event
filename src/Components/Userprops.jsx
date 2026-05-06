
import React, { useState } from 'react';
import Userbookingform from './Userbookingform';
import Admindashboard from './Admindashboard';
import Userdetailadminpage from './Userdetailadminpage';
import CountDisplay from './Countdisplay';

const Userprops = () => {
   const [submitCount, setSubmitCount] = useState(0);

  const incrementCount = () => {
    setSubmitCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <Userbookingform incrementCount={incrementCount} />
      {/* <Userdetailadminpage count={submitCount} /> */}
      <CountDisplay count={submitCount}/>
      
    </div>
  )
}

export default Userprops
