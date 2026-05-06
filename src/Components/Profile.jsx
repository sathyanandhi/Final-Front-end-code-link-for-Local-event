import React, { useState } from 'react';
import { Menu, X, Home, Settings, User } from 'lucide-react'; // Example icons

const Profile = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { icon: Home, label: 'Dashboard', href: '#' },
    { icon: User, label: 'Profile', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white ${
          isOpen ? 'w-64' : 'w-20'
        } transition-all duration-300 h-screen fixed flex flex-col`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
          {isOpen && <span className="text-xl font-semibold">My App</span>}
          <button onClick={toggleSidebar} className="p-2 rounded hover:bg-gray-700">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center p-2 text-sm font-medium rounded-md hover:bg-gray-700 hover:text-white"
            >
              <item.icon className="w-6 h-6" />
              {isOpen && <span className="ml-3">{item.label}</span>}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content area */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <header className="bg-white shadow h-16 flex items-center justify-between px-4">
          <h1 className="text-xl">Welcome!</h1>
        </header>
        <main className="p-4">
          <p>Main content goes here.</p>
        </main>
      </div>
    </div>
  );
};

export default Profile;

