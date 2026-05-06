import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Home = () => {
  
  return (
    <div className='transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none '>
       <Card className="bg-dark text-white  text-2xl">
      <img className='h-130 w-500 object-fill  ' src="https://image.slidesdocs.com/responsive-images/background/poster-advertising-plane-ceremony-award-powerpoint-background_9834d0b17b__960_540.jpg"  alt="Card image" />
      <Card.ImgOverlay className='text-center mt-30 '>
        <Card.Title className=' font-serif text-white'><h1 className='font-extrabold'>Local Event Hub Smart Event Discovery AI</h1></Card.Title>
        <Card.Text>
         Transforming Events with AI:The Future of Event Management
        </Card.Text>
       <Link to='/adminuserlogin'><button className='bg-orange-300 p-2 rounded hover:bg-green-400'>Book Your Seats Now</button></Link>
        <Card.Text>Last updated 3 mins ago</Card.Text>
          <div className='flex justify-between'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmsg3Ql38UIAvqQmxqICOGiNvUkqenSsPm6LcG6Z762A&s' class="size-20 animate-ping rounded-2xl..."/>
                        <img src='https://st2.depositphotos.com/1105977/7532/i/950/depositphotos_75324141-stock-photo-retro-microphone-on-music-concert.jpg' class="size-25 animate-bounce rounded-2xl ..."/>
</div>
      </Card.ImgOverlay>
      
    </Card>
  

    </div>
  )
}

export default Home
