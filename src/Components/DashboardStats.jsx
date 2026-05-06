import React, { useEffect, useState } from "react";
import axios from "axios";
import { CalendarDays, Users, ShieldCheck, Timer } from "lucide-react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isSameOrAfter);
ChartJS.register(ArcElement, Tooltip, Legend);
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
const DashboardStats = () => {
  const [counts, setCounts] = useState({
    today: 0,
    upcoming: 0,
    participants: 0,
    admins: 0
  });

      useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventRes, participantRes, adminRes] = await Promise.all([
          axios.get('https://final-back-end-code-for-local-event.onrender.com/localevent/getevent'),
          axios.get('https://final-back-end-code-for-local-event.onrender.com/localevent/getMergedData'),
          axios.get("https://final-back-end-code-for-local-event.onrender.com/localevent/getuseradmin")
        ]);

        const allEvents = eventRes.data.result || [];
        const allParticipants = participantRes.data || [];
        const now = dayjs().startOf('day');

        setCounts({
          // Exactly Today
// Use .utc() to prevent local timezone conversion
today: allEvents.filter(e => dayjs.utc(e.eventdate).isSame(dayjs.utc(), 'day')).length,
          
          // Strictly after Today
          upcoming: allEvents.filter(e => dayjs(e.eventdate).isAfter(now, 'day')).length,
          
          // Filtered Participants: Today + Future (Auto-Cleanup)
          participants: allParticipants.filter(p => {
            // Check both standard date and nested result date structures
            const pDate = dayjs(p.eventdate || p.result?.eventdate);
            return pDate.isSameOrAfter(now, 'day');
          }).length,
          
          admins: adminRes.data.result?.length || 0
        });
      } catch (error) {
        console.error("Dashboard Fetch error:", error);
      }
    };
    fetchData();
  }, []);



  const chartData = {
    labels: ["Today's Events", "Upcoming", "Participants", "Admins"],
    datasets: [{
      data: [counts.today, counts.upcoming, counts.participants, counts.admins],
      backgroundColor: ['#ef4444', '#6366f1', '#10b981', '#f59e0b'],
      hoverOffset: 15,
      borderWidth: 0,
      cutout: '80%',
      borderRadius: 15,
    }],
  };
  

  return (
    <div className="w-full p-4 md:p-6 bg-slate-50 space-y-6 font-sans antialiased">
      <div className="ml-2 flex items-center gap-2">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          Intelligence Overview
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Today's Events */}
        <StatCard 
          label="Happening Now" 
          title="Today's Events" 
          value={counts.today} 
          icon={<Timer size={20} />} 
          color="text-red-500" 
          bgColor="bg-red-50"
          hoverBg="group-hover:bg-red-500"
        />

        {/* Upcoming Events */}
        <StatCard 
          label="Registry" 
          title="Upcoming" 
          value={counts.upcoming} 
          icon={<CalendarDays size={20} />} 
          color="text-indigo-500" 
          bgColor="bg-indigo-50"
          hoverBg="group-hover:bg-indigo-500"
        />

        {/* Participants */}
        <StatCard 
          label="Growth" 
          title="Participants" 
          value={counts.participants} 
          icon={<Users size={20} />} 
          color="text-emerald-500" 
          bgColor="bg-emerald-50"
          hoverBg="group-hover:bg-emerald-500"
        />

        {/* Admins */}
        <StatCard 
          label="Security" 
          title="Admin Users" 
          value={counts.admins} 
          icon={<ShieldCheck size={20} />} 
          color="text-amber-500" 
          bgColor="bg-amber-50"
          hoverBg="group-hover:bg-amber-500"
        />
      </div>

      {/* Doughnut Chart Display */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center">
        <h3 className="text-sm font-bold text-slate-800 mb-6 self-start">Resource Distribution</h3>
        <div className="h-64 w-full relative">
          <Doughnut data={chartData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-black text-slate-800">{counts.today + counts.upcoming}</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase">Total Events</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable StatCard Component
const StatCard = ({ label, title, value, icon, color, bgColor, hoverBg }) => (
  <div className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-default">
    <div className="flex items-center justify-between">
      <div>
        <p className={`text-[9px] font-black uppercase tracking-widest ${color}`}>{label}</p>
        <h3 className="text-xs font-bold text-slate-500 italic">{title}</h3>
        <div className="mt-3">
          <span className="text-3xl font-black text-slate-900 tracking-tighter">{value}</span>
        </div>
      </div>
      <div className={`p-3 ${bgColor} rounded-xl ${color} transition-all duration-300 ${hoverBg} group-hover:text-white`}>
        {icon}
      </div>
    </div>
  </div>
);

export default DashboardStats;
