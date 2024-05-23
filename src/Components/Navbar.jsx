import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F7F8F9] py-5 z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 w-6 h-6">
              <path d="M4 4h16v2H4V4zm0 7h16v2H4v-2zm0 7h16v2H4v-2z" />
            </svg>
          </div>
          <h1 className="text-[#2A3342] text-xl font-bold">Flex</h1>
        </div>
        <div className="hidden lg:flex list-none text-[#556987] font-medium space-x-4">
          <li className="px-4">Product</li>
          <li className="px-4">Features</li>
          <li className="px-4">Pricing</li>
          <li className="px-4">Resources</li>
        </div>
        <div className="hidden lg:flex items-center space-x-3">
          <button className="text-[#556987] px-3">Login</button>
          <button className="px-3 py-2 bg-green-500 text-white rounded-lg">Sign Up</button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="list-none text-[#556987] font-medium space-y-2 mt-4 px-4">
            <li>Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li className="mt-2">
              <button className="text-[#556987] w-full text-left">Login</button>
            </li>
            <li className="mt-2">
              <button className="w-full py-2 bg-green-500 text-white rounded-lg text-left">Sign Up</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
