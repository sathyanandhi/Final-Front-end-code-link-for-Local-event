import React from "react";
import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

const Admindashboard = () => {
  return (
    // bg-[#F8FAFC] is the industry standard "SaaS Blue-Gray"
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-900 relative overflow-hidden">
      
      {/* --- PROFESSIONAL DECORATIVE LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Sublte Grid for a "Technical" feel */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
        </div>
        
        {/* Soft Emerald Glow to match your Sidebar */}
        <div className="absolute -top-[15%] -left-[5%] w-[40%] h-[40%] bg-emerald-200/30 rounded-full blur-[120px]"></div>
        
        {/* Soft Indigo Glow for contrast */}
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-100/40 rounded-full blur-[100px]"></div>
      </div>

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 min-w-0 relative z-10 overflow-y-auto">
        <div className="p-4 md:p-8 lg:p-12 pb-24 md:pb-8 max-w-[1600px] mx-auto">
          
          {/* HEADER SECTION */}
        {/* HEADER SECTION */}
<header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
  <div>
    <div className="flex items-center gap-2 mb-1">
      <div className="h-1 w-6 bg-emerald-500 rounded-full"></div>
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">Admin Console</span>
    </div>
    <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-800">
      Dashboard <span className="text-slate-400 font-light">Overview</span>
    </h1>
  </div>

  {/* Glass-style Date Badge using UTC to match your events */}
  <div className="px-4 py-2 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-sm text-xs font-bold text-slate-500">
    {/* This ensures "Today" in the header matches "Today" in your filtered event list */}
    {dayjs.utc().format('dddd, MMM D')}
  </div>
</header>


          {/* PAGE CONTENT */}
          <section className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <Outlet />
          </section>
          
        </div>
      </main>
    </div>
  );
};

export default Admindashboard;
