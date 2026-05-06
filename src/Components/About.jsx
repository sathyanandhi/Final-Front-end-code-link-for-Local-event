// import React from 'react'
// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';
// const About = () => {
//      const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };
//   return (
//     <div className='bg-amber-100' >
//     <div className=' ml-5 mr-5'>
//            <h1 className='text-center'>Local Event Hub Smart Event Discovery</h1>
//        <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img className='h-90 w-260 object-fill  ml-5' src='https://media.timeout.com/images/106090390/750/562/image.jpg' alt="First slide" />
//         <Carousel.Caption>
//           <h3>Music Concerts</h3>
//           <p>A Public musical performance in which a number of singers or instrumentalists, or both, participate.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//  <img className='h-90 w-260 object-fill  ml-5' src='https://plus.unsplash.com/premium_photo-1705717318393-fc1b452f6de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlYXRpdmUlMjB3b3Jrc2hvcHxlbnwwfHwwfHx8MA%3D%3D' />        <Carousel.Caption>
//           <h3>Workshops</h3>
//           <p>A workshop is a structured and interactive session designed to create an environment for meaningful work.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//  <img className='h-90 w-260 object-fill  ml-5' src='https://img.freepik.com/free-vector/politician-sitting-round-table-boardroom-board-directors-with-ceo-holding-formal-talk-office-room-flat-vector-illustration-business-authority-corporate-leader-planning-strategy-concept_74855-22013.jpg?semt=ais_user_personalization&w=740&q=80'  />        <Carousel.Caption>
//           <h3>Meetups</h3>
//           <p>
//            Meetup is about connecting people with something in common.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
 
//         <h4>Smartsheet's Smart Event Hub:</h4>
//         <p>This solution is built for event coordination teams, using automation and centralized data to streamline planning and tracking of multiple events. Overall, AI-powered local event hubs aim to create more vibrant, connected communities by making event discovery seamless and personalized. </p>
//     <h4>Azure Event Hubs:</h4>
//     <p>hile not an end-user local event hub, it is an enterprise-grade, real-time data streaming platform used by developers to build the backend infrastructure for high-scale event processing and ingestion.</p>
//     <h4>Cvent:</h4>
//     <p> Cvent incorporates AI into its event management software for functions like event diagramming and vendor marketplaces.</p>
//     </div></div>
//   )
// }

// export default About


import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Sparkles, Music, Lightbulb, Users, Cpu, Rocket, Globe } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const [index, setIndex] = useState(0);

  const carouselItems = [
    {
      title: "Music Concerts",
      desc: "Experience neural-mapped acoustic performances tailored to your profile.",
      img: "https://images.indianexpress.com/2024/10/464836003_18470958406005747_5213945148370731833_n.jpg",
      icon: <Music className="text-indigo-600" />
    },
    {
      title: "Creative Workshops",
      desc: "Smart interactive sessions designed for meaningful community work.",
      img: "https://plus.unsplash.com/premium_photo-1705717318393-fc1b452f6de8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlYXRpdmUlMjB3b3Jrc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
      icon: <Lightbulb className="text-amber-600" />
    },
    {
      title: "Community Meetups",
      desc: "Connect with like-minded individuals through AI-driven networking.",
      img: "https://media.smallbiztrends.com/2025/12/AGJrMVvi-key-takeaways.jpg",
      icon: <Users className="text-emerald-600" />
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 py-16 px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center gap-2 bg-indigo-600/10 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold uppercase mb-4">
            <Sparkles size={14} /> Intelligence in Motion
          </div> */}
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Inside the <span className="text-indigo-600">Smart Hub</span>
          </h1>
        </div>

        {/* --- THE CAROUSEL --- */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white bg-white/50 backdrop-blur-xl mb-20">
          <Carousel activeIndex={index} onSelect={(i) => setIndex(i)} fade interval={3000}>
            {carouselItems.map((item, idx) => (
              <Carousel.Item key={idx} className="h-[500px]">
                {/* Image with proper Bootstrap and Tailwind classes */}
                <img 
                  className="d-block w-full h-full object-cover" 
                  src={item.img} 
                  alt={item.title} 
                />
                
                {/* Subtle light gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                
                <Carousel.Caption className="text-left left-10 bottom-10">
                  <div className="p-3 bg-white/80 backdrop-blur-md rounded-2xl w-fit mb-4 shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-lg max-w-md font-medium">{item.desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <Cpu className="text-indigo-600 mb-4" size={32} />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Azure Streaming</h4>
            <p className="text-slate-500 text-sm">Real-time data processing for high-scale event ingestion.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <Rocket className="text-amber-600 mb-4" size={32} />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Smart Planning</h4>
            <p className="text-slate-500 text-sm">Automation tools for seamless multi-event coordination.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <Globe className="text-emerald-600 mb-4" size={32} />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Global Network</h4>
            <p className="text-slate-500 text-sm">AI-driven vendor marketplaces and smart diagramming.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

