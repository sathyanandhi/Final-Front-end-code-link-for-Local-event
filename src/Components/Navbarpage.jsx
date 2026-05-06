// import React from 'react'

// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Home', href: '/about', current: false},
//   { name: 'About', href: '/', current: false },
//   { name: 'Services', href: '/service', current: false },
//   { name: 'Signup', href: '/signup', current: false },
//    { name: 'Login', href: '/adminuserlogin', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
// const Navbarpage = () => {
//   return (
//     <div>
    
//     <Disclosure
//       as="nav"
//       className="relative bg-purple-300 hover:bg-gray-200 dark:bg-gray-800/50 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10"
//     >
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1  items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NcGzYf7ONJE7CHK6QwXoe9o06beGnyRFnA&s"
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4  ">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current
//                         ? 'bg-gray-900  text-white dark:bg-gray-950/50'
//                         : 'text-gray-300 hover:bg-white/5 hover:text-white',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   ><button>{item.name}</button>
                    
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       

//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
//                 <span className="absolute -inset-1.5" />
//                 <span className="sr-only">Open user menu</span>
//                 <img
//                   alt=""
//                   src='data:image/jpeg;base64,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'
//                   className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
//                 />
//               </MenuButton>

//               <MenuItems
//                 transition
//                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
//               >
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5"
//                   >
//                     Your profile
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5"
//                   >
//                     Settings
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="/"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5"
//                   >
//                     Sign out
//                   </a>
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current
//                   ? 'bg-gray-900 text-white dark:bg-gray-950/50'
//                   : 'text-gray-300 hover:bg-white/5 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
  

//     </div>
//   )
// }

// export default Navbarpage









// import React from 'react'
// import { Link } from 'react-router-dom'
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Home', href: '/', current: false },
//   { name: 'About', href: '/about', current: false },
//   { name: 'Services', href: '/service', current: false },
//   { name: 'Signup', href: '/signup', current: false },
//   { name: 'Login', href: '/adminuserlogin', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// const Navbarpage = () => {
//   return (
//     <div>
//       <Disclosure
//         as="nav"
//         className="relative bg-purple-300 hover:bg-gray-200 dark:bg-gray-800/50 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10"
//       >
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div className="relative flex h-16 items-center justify-between">
            
//             {/* Mobile menu button */}
//             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open main menu</span>
//                 <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//                 <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//               </DisclosureButton>
//             </div>

//             {/* Logo + Desktop Nav */}
//             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//               <div className="flex shrink-0 items-center">
//                 <img
//                   alt="Your Company"
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NcGzYf7ONJE7CHK6QwXoe9o06beGnyRFnA&s"
//                   className="h-8 w-auto"
//                 />
//               </div>

//               {/* Desktop Navigation */}
//               <div className="hidden sm:ml-6 sm:block">
//                 <div className="flex space-x-4">
//                   {navigation.map((item) => (
//                     <Link
//                       key={item.name}
//                       to={item.href}
//                       aria-current={item.current ? 'page' : undefined}
//                       className={classNames(
//                         item.current
//                           ? 'bg-gray-900 text-white dark:bg-gray-950/50'
//                           : 'text-gray-300 hover:bg-white/5 hover:text-white',
//                         'rounded-md px-3 py-2 text-sm font-medium'
//                       )}
//                     >
//                       <button>{item.name}</button>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Profile Dropdown */}
//             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//               <Menu as="div" className="relative ml-3">
//                 <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     alt=""
//                     src="data:image/jpeg;base64,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"
//                     className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
//                   />
//                 </MenuButton>

//                 <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 dark:bg-gray-800 dark:-outline-offset-1 dark:outline-white/10">
//                   <MenuItem>
//                     <Link
//                       to="#"
//                       className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
//                     >
//                       Your profile
//                     </Link>
//                   </MenuItem>

//                   <MenuItem>
//                     <Link
//                       to="#"
//                       className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
//                     >
//                       Settings
//                     </Link>
//                   </MenuItem>

//                   <MenuItem>
//                     <Link
//                       to="/"
//                       className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
//                     >
//                       Sign out
//                     </Link>
//                   </MenuItem>
//                 </MenuItems>
//               </Menu>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <DisclosurePanel className="sm:hidden">
//           <div className="space-y-1 px-2 pt-2 pb-3">
//             {navigation.map((item) => (
//               <DisclosureButton
//                 key={item.name}
//                 as={Link}
//                 to={item.href}
//                 aria-current={item.current ? 'page' : undefined}
//                 className={classNames(
//                   item.current
//                     ? 'bg-gray-900 text-white dark:bg-gray-950/50'
//                     : 'text-gray-300 hover:bg-white/5 hover:text-white',
//                   'block rounded-md px-3 py-2 text-base font-medium'
//                 )}
//               >
//                 {item.name}
//               </DisclosureButton>
//             ))}
//           </div>
//         </DisclosurePanel>
//       </Disclosure>
//     </div>
//   )
// }

// export default Navbarpage



import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Menu as MenuIcon, X, Home, Info, Briefcase, UserPlus, LogIn, Zap } from 'lucide-react';
import { LuMicVocal } from "react-icons/lu";
import { MdOutlineMicExternalOn } from "react-icons/md"
const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Services', href: '/service', icon: Briefcase },
  { name: 'Signup', href: '/signup', icon: UserPlus },
  { name: 'Login', href: '/adminuserlogin', icon: LogIn },
];

const Navbarpage = () => {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 w-full px-2 py-4">
      {/* --- NG EFFECT: Floating Glass Container --- */}
      <div className="mx-auto max-w-7xl bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] rounded-[24px] transition-all duration-500">
        <div className="px-6">
          <div className="relative flex h-16 items-center justify-between">
            
            {/* Mobile Button */}
            <div className="flex items-center sm:hidden">
              <DisclosureButton className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <MenuIcon className="block size-6 group-data-open:hidden" />
                <X className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>

            {/* --- BRANDING: Gradient Logo --- */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link to="/" className="flex shrink-0 items-center gap-2 group text-decoration-none no-underline">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-500 p-2 rounded-xl shadow-lg shadow-indigo-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <MdOutlineMicExternalOn className="text-white size-5 fill-white" />
                  {/* <Zap className="text-white size-5 fill-white" /> */}
                </div>
                <span className="text-slate-900 font-black tracking-tighter text-2xl">
                  

                  {/* SNT<span className="text-indigo-600">HUB</span> */}
                </span>
              </Link>

              {/* --- DESKTOP NAV: Pill Style --- */}
              <div className="hidden sm:ml-12 sm:block">
                <div className="flex space-x-1 p-1 bg-slate-100/50 rounded-2xl border border-slate-200/50">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`
                          relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 
                          text-decoration-none no-underline outline-none
                          ${isActive 
                            ? 'text-white bg-indigo-600 shadow-md shadow-indigo-200' 
                            : 'text-slate-500 hover:text-indigo-600 hover:bg-white'}
                        `}
                      >
                        <item.icon size={16} className={isActive ? 'animate-pulse' : ''} />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* --- ACTION BUTTON: NG Glow --- */}
            {/* <div className="hidden md:flex items-center">
              <button className="relative group px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                <span className="relative z-10">Launch App</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* --- MOBILE PANEL: Animated Drop --- */}
      <DisclosurePanel className="sm:hidden mt-4">
        <div className="space-y-2 px-4 py-5 bg-white/90 backdrop-blur-xl border border-slate-100 rounded-[24px] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className="flex items-center gap-4 rounded-xl px-4 py-4 text-base font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 text-decoration-none no-underline transition-all"
            >
              <div className="bg-slate-50 p-2 rounded-lg group-hover:bg-white transition-colors">
                <item.icon size={20} />
              </div>
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbarpage;
