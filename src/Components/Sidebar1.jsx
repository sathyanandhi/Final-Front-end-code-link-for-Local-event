import React from 'react';
import { Link, useLocation ,useNavigate} from 'react-router-dom';
import { Home,User, UserCheck,LogOut,Settings,CalendarClock,} from 'lucide-react'; // Example icons

const navItems = [
  { name: 'Home', icon: Home, path: '/userdashboard'  },
  { name: 'Events', icon: CalendarClock, path: '/userdashboard1' },
  { name: 'Profile', icon: User, path: '/userdetailuserpage'},
  // { name: 'Edit Profile', icon:  UserCheck , path: '/userbookingform' },
  
   { name: 'Gallary', icon: Home, path: '/imagedisplay' },
  { name: 'Logout', icon:LogOut, path: '/' },

];

const Sidebar1 = () => {
  const location = useLocation();
 

  return (
    <div className=" bg-gray-500 text-white flex flex-col  h-full shadow-lg">
      <div className="p-4 flex items-center space-x-2">
        <h1 className="text-2xl font-bold">User </h1>
      </div>
      <nav className="flex-4 px-2 mt-6 font-extrabold">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center p-3 bg-green-300  my-2 rounded-lg transition duration-100 ${
              location.pathname === item.path
                ? 'bg-gray-700 text-black hover:bg-purple-400  hover:text-white'
                : 'text-black  hover:text-white hover:bg-purple-300'
            }`}>
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </Link>
          
        ))}
      </nav>
    </div>
  );
};

export default Sidebar1;