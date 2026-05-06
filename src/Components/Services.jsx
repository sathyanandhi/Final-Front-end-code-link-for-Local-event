import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className=''>
      
      
            <div >
           <h1 className='text-center bg-blue-500  hover:bg-indigo-400 text-white p-3'>Our Services</h1>
           <p className='m-5 mt-3'>
            
            "Local Event Hub" often refers to Azure Event Hubs, a Microsoft service for real-time data ingestion and discovery. It enables "smart" event discovery by streaming millions of events per second from any source to build dynamic data pipelines.Azure Event Hubs is a fully managed, real-time data ingestion and streaming service designed to handle millions of events per second from any source. It acts as the "front door" for an event pipeline, enabling high-scale telemetry and event data to be processed by downstream analytics and storage services</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-4  rounded-full">
         <Card className='shadow-xl/20 bg-black text-white transform transition hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none'>
           
            <Card.Body>
              <Card.Title className='text-center font-serif'><h2>Our Mission</h2></Card.Title>
              <Card.Text >
             <h5 className='font-serif text-center'>“Organising is a journey, not a destination”</h5> 
              <ol className='list-disc  space-y-2'>
               
                <li><b>Simplicity:</b> Provide a managed experience (like Kafka) without the need to manage infrastructure.</li>
                <li><b>Scalability:</b> Handle millions of events per second to build dynamic data pipelines.</li>
                <li><b>Reliability: </b>Ensure mission-critical workloads remain operational through geo-disaster recovery and high availability.</li></ol>
              </Card.Text>
              
             
            </Card.Body>
          </Card>
          <Card  className='shadow-xl/20  bg-black text-white transform transition hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none'>
           
            <Card.Body>
              <Card.Title className='text-center font-serif'><h2>Our Vision</h2></Card.Title>
              <Card.Text> 
                             <h5 className='font-serif text-center'>“Conflict cannot survive without your participation”</h5> 
              <ol className='list-disc  space-y-2'>
               
                <li><b>Connects Anything:</b> Seamlessly integrates with other Azure services and existing Apache Kafka applications without code changes..</li>
                <li><b>Drives Immediate Action:</b> Enables businesses to respond to challenges in real-time by unlocking valuable insights from streaming data..</li>
                <li><b>Universal Accessibility: </b>"Empowers users of all ages and abilities" through intuitive design and deep integration within the Microsoft Azure ecosystem. 
</li></ol>
              </Card.Text>
             
            </Card.Body>
          </Card>
             </div>
          </div>
          {/* <div><div class="grid grid-cols-3 gap-4">
  <div className="ml-3">  <img className='w-15' src="https://cdn-icons-png.flaticon.com/128/984/984233.png" />
   <h5>Flight Booking</h5>   
<p>Book cheap flight and air tickets at the lowest fares on Cleartrip. Find great deals on domestic and international flight bookings – all in one place</p></div>
  <div class="..."><img className='w-15' src=" https://cdn-icons-png.flaticon.com/128/9436/9436887.png" widhth="50px" height="50px"/>
       <h5>Travel Insurances</h5> 
   <p>Travel Insurance For Worldwide Travel,Buy travel insurance policy online from ACKO with no medical test. Covers medical emergencies, flight delays, baggage loss, trip cancellation, ..</p></div>
  <div class="..."> <img className='w-15' src=" https://cdn-icons-png.flaticon.com/128/10928/10928510.png" widhth="50px" height="50px"/>
       <h5>Hotel Reservation</h5>  
    <p>Easily we Compare hotel prices from over 100 sites at once,We provide options ranging from luxury hotels and to budget-friendly hotels and family-friendly properties.</p></div></div></div> */}
   
   <div className="py-12 px-4 bg-slate-50">
  {/* Container: Spacing auto-adjusts for mobile vs desktop */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
    
    {/* Flight Booking Card */}
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-md">
      <div className="bg-blue-50 p-4 rounded-2xl mb-4">
        <img className="w-12 h-12 object-contain" src="https://cdn-icons-png.flaticon.com/128/984/984233.png" alt="Flight" />
      </div>
      <h5 className="font-bold text-lg mb-2 text-slate-800">Flight Booking</h5>   
      <p className="text-slate-500 text-sm leading-relaxed">
        Book cheap flight and air tickets at the lowest fares. Find great deals on domestic and international flight bookings – all in one place.
      </p>
    </div>

    {/* Travel Insurance Card */}
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-md">
      <div className="bg-emerald-50 p-4 rounded-2xl mb-4">
        <img className="w-12 h-12 object-contain" src="https://cdn-icons-png.flaticon.com/128/9436/9436887.png" alt="Insurance" />
      </div>
      <h5 className="font-bold text-lg mb-2 text-slate-800">Travel Insurance</h5> 
      <p className="text-slate-500 text-sm leading-relaxed">
        Worldwide travel insurance with no medical tests. Covers medical emergencies, flight delays, baggage loss, and trip cancellations.
      </p>
    </div>

    {/* Hotel Reservation Card */}
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-md">
      <div className="bg-indigo-50 p-4 rounded-2xl mb-4">
        <img className="w-12 h-12 object-contain" src="https://cdn-icons-png.flaticon.com/128/10928/10928510.png" alt="Hotel" />
      </div>
      <h5 className="font-bold text-lg mb-2 text-slate-800">Hotel Reservation</h5>  
      <p className="text-slate-500 text-sm leading-relaxed">
        Compare prices from over 100 sites at once. We provide options ranging from luxury hotels to budget-friendly and family properties.
      </p>
    </div>

  </div>
</div>

   
   
   
   
    {/* <div class="flex flex-row">
  <div class="basis-1/3"> */}
   {/* <div><h1 className='text-center bg-blue-200 p-2'>Contact Details</h1></div>
  <div class="grid grid-cols-2 gap-4">
  <div class="m-5 mt-2"><h4>CONTACT</h4>
  <h6>SNT Event Hub</h6>
   <p> <img className='w-5' src=" https://cdn-icons-png.flaticon.com/128/12003/12003357.png"/>
    
     4/112,Pollachi,Palladam Main road.   </p>
     <p><img className='w-5' src=" https://cdn-icons-png.flaticon.com/128/9073/9073086.png"/>
      abc@gmail.com</p>
      <img className='w-5' src=" https://cdn-icons-png.flaticon.com/128/13148/13148489.png"/>8565242321,8789215312
    </div>
 
  <div class="m-5 mt-2"><h4>HELP CENTER</h4>
     <p>Contact</p>
     <p>Feedback</p>
     <p>Join our slack</p>
     <p>Terms</p>
   </div>
  </div> */}

<div className="bg-slate-50 py-10">
  {/* Section Title */}
  <div className="mb-8">
    <h1 className='text-center bg-blue-500 text-white p-3 font-bold text-2xl md:text-3xl shadow-sm'>
      Contact Details
    </h1>
  </div>

  {/* Responsive Grid: Stacks on mobile (1 col), side-by-side on desktop (2 cols) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
    
    {/* Contact Info Card */}
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
      <h4 className="font-black text-slate-900 mb-4 border-b-2 border-blue-500 inline-block pb-1 uppercase tracking-wider">
        Contact
      </h4>
      <h6 className="font-bold text-blue-600 text-lg mb-4">SNT Event Hub</h6>
      
      <div className="space-y-4">
        {/* Address */}
        <div className="flex items-start gap-3 text-slate-600">
          <img className='w-5 mt-1 shrink-0' src="https://cdn-icons-png.flaticon.com/128/12003/12003357.png" alt="Loc" />
          <p className="m-0 leading-relaxed text-sm md:text-base">
            4/112, Pollachi, Palladam Main road.
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 text-slate-600">
          <img className='w-5 shrink-0' src="https://cdn-icons-png.flaticon.com/128/9073/9073086.png" alt="Email" />
          <p className="m-0 text-sm md:text-base">abc@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 text-slate-600">
          <img className='w-5 shrink-0' src="https://cdn-icons-png.flaticon.com/128/13148/13148489.png" alt="Phone" />
          <p className="m-0 font-medium text-slate-800 text-sm md:text-base">
            8565242321, 8789215312
          </p>
        </div>
      </div>
    </div>

    {/* Help Center Card */}
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
      <h4 className="font-black text-slate-900 mb-4 border-b-2 border-blue-500 inline-block pb-1 uppercase tracking-wider">
        Help Center
      </h4>
      <div className="flex flex-col gap-3">
        {['Contact', 'Feedback', 'Join our Slack', 'Terms'].map((item) => (
          <p key={item} className="m-0 text-slate-600 hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer flex items-center gap-2 text-sm md:text-base">
            <span className="text-blue-500 font-bold">→</span> {item}
          </p>
        ))}
      </div>
    </div>

  </div>
</div>




  <div className='bg-blue-400 p-1'>
<p className='flex ml-5 justify-center  align-middle'>
   <Link to='https://www.facebook.com/'>  <img className='m-2' src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png"width="40px"height="40px"/></Link>
 <Link to='https://www.instagram.com/accounts/login/?hl=en'><img className='m-2' src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"width="40px"height="40px"/></Link>
  <Link to='https://web.whatsapp.com/'><img className='m-2'src="https://cdn-icons-png.flaticon.com/128/3536/3536445.png"width="40px"height="40px"/></Link>
    <Link to='https://www.linkedin.com/login'><img className='m-2'src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"width="40px"height="40px"/></Link></p>
    <footer className='text-center font-extrabold'><span>@2026 All Rights Reserved</span><span className='ml-5'>www.snteventhub.com</span></footer>
    </div>
    
    
    </div>
    
  )
}

export default Services
