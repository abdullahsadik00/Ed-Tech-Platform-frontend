import React, { useEffect, useState } from 'react';
import Logo from '../../navbar/Logo';
import NavLinks from '../../navbar/NavLinks';
import AuthButtons from '../../navbar/AuthButtons';
import MobileMenuButton from '../../navbar/MobileMenuButton';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between px-4">
          <Logo />
          <NavLinks />
          <div className="flex items-center gap-4">
            <AuthButtons />
            <MobileMenuButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };
//   return (
//     <nav className="bg-gray-100">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between">
//           <div className="flex space-x-4">
//             {/* Logo */}
//             <div>
//               <a
//                 href="#"
//                 className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
//               >
//                 <svg
//                   className="h-6 w-6 mr-1 text-blue-400"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                   />
//                 </svg>
//                 <span className="font-bold">Better Dev</span>
//               </a>
//             </div>

//             {/* Primary Nav */}
//             <div className="hidden md:flex items-center space-x-1">
//               <a
//                 href="about"
//                 className="py-5 px-3 text-gray-700 hover:text-gray-900"
//               >
//                 About us
//               </a>
//               <a
//                 href="/contact"
//                 className="py-5 px-3 text-gray-700 hover:text-gray-900"
//               >
//                 contact
//               </a>
//               <a
//                 href="/dash"
//                 className="py-5 px-3 text-gray-700 hover:text-gray-900"
//               >
//                 Dashboard
//               </a>
//             </div>
//           </div>

//           <div className="hidden md:flex items-center space-x-1">
//             <a href="" className="py-5 px-3">
//               Login
//             </a>
//             <a
//               href=""
//               className="py-2 px-3 bg-[#636AE8] hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
//             >
//               Signup
//             </a>
//           </div>

//           {/* Mobile Button */}
//           <div className="md:hidden flex items-center">
//             <button className="mobile-menu-button" onClick={toggleMobileMenu}>
//               <svg
//                 className="w-6 h-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="mobile-menu md:hidden">
//           <a
//             href="/about"
//             className="block py-2 px-4 text-sm hover:bg-gray-200"
//           >
//             About Us
//           </a>
//           <a
//             href="/contact"
//             className="block py-2 px-4 text-sm hover:bg-gray-200"
//           >
//             contact
//           </a>
//           <a href="/dash" className="block py-2 px-4 text-sm hover:bg-gray-200">
//             Dashboard
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
