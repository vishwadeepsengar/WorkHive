import React, { useState } from 'react';
import { Users, Menu, X } from 'lucide-react';

const Navbar = () => (
 <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-12 py-4  text-white border-b border-white/10">

    {/* Logo */}
    <div className="flex items-center space-x-2 text-xl font-bold">
      <span className="bg-white w-5 h-5 block rounded-sm"></span>
      <span>WorkHive</span>
    </div>

    {/* Right Buttons */}
    <div className="flex items-center space-x-3 text-sm font-bold">
      <a
  href="#"
  className="px-2 py-0.5 border rounded-full border-white text-white hover:bg-white hover:text-black transition"
>
  SIGN IN
</a>
         <a
  href="#"
  className="px-4 py-1 border rounded-full border-white text-white  hover:bg-white hover:text-black transition "
>
  GET STARTED
</a>
    </div>
  </nav>
);

export default Navbar;

