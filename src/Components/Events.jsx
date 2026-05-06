import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Events = () => {
  return (
    <div>
     
      <div >
     <h1 className='text-center'>Account Information</h1>
     <p>"Local Event Hub" often refers to Azure Event Hubs, a Microsoft service for real-time data ingestion and discovery. It enables "smart" event discovery by streaming millions of events per second from any source to build dynamic data pipelines</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-4  rounded-full">
   <Card className='shadow-xl/20'>
     
      <Card.Body>
        <Card.Title className='text-center font-serif'><h2>Organizer</h2></Card.Title>
        <Card.Text>
        “Organising is a journey, not a destination”,Click here to Host or Organize the event.
        </Card.Text>
        <Button variant="primary" className='mx-auto d-block'>Host Event</Button>
      </Card.Body>
    </Card>
    <Card  className='shadow-xl/20'>
     
      <Card.Body>
        <Card.Title className='text-center font-serif'><h2>Participants</h2></Card.Title>
        <Card.Text>
         "Conflict cannot survive without your participation",Click here to Participate in Event.
        </Card.Text>
        <Button variant="primary" className='mx-auto d-block'>Partcipate Event</Button>
      </Card.Body>
    </Card>
  
</div>
    </div>
    </div>
  )
}

export default Events
