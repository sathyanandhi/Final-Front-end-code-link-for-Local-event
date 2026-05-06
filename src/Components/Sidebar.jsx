import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CalendarClock, UserCheck, LogOut, Users } from 'lucide-react';
import { MdAdminPanelSettings } from "react-icons/md";
const navItems = [
  { name: 'Home', icon: Home, path: '/admindashboard' },
  { name: 'Events', icon: CalendarClock, path: '/admindashboard/Events' },
  { name: 'Users', icon: UserCheck, path: '/admindashboard/userdetail' },
  { name: 'Community', icon: Users, path: '/admindashboard/admincommunityfeed' },
  { name: 'Logout', icon: LogOut, path: '/' },

];

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      {/* --- TABLET & DESKTOP SIDEBAR --- */}
      {/* hidden on mobile, flex on md (tablet) and up */}
      <aside className="hidden md:flex flex-col w-20 lg:w-64 h-screen sticky top-0 bg-fuchsia-50 border-r border-slate-200 transition-all duration-300">
        <div className="p-6 lg:p-8">
          <h1 className="text-xl font-black italic text-slate-800 hidden lg:block">Admin</h1>
          <div className="w-8 h-8 bg-slate-800 rounded lg:hidden mx-auto" /> {/* Logo placeholder for tablet */}
        </div>

        <nav className="flex-1 px-3 lg:px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center justify-center lg:justify-start px-3 py-3 text-decoration-none  rounded-xl transition-all no-underline ${
                  isActive ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-700 hover:bg-white/40'
                }`}
              >
                <item.icon className="w-6 h-6 lg:mr-3" />
                <span className="text-xs font-bold uppercase hidden lg:block">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* --- MOBILE BOTTOM NAV --- */}
      {/* flex on mobile, hidden on md (tablet) and up */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 flex justify-around items-center p-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.name} to={item.path} className={`flex flex-col items-center text-decoration-none  no-underline ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
              <item.icon size={20} />
              <span className="text-[10px] font-bold mt-1 uppercase">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Sidebar;
