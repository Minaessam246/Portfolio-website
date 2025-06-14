import Link from 'next/link'
import React, { useState } from 'react'
export default function Navbar() {
  
//  function toggle(){
//     const menu = document.getElementById('dropdown-menu');
//         menu.classList.toggle('hidden');
//         isMenuOpen=!isMenuOpen
        
//  }
 const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggle() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    

    
  
    <>
   

<nav class="navb border-gray-200 xsm:w-full ">
  <div class="  flex flex-wrap items-center justify-between py-4  px-7">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-5xl  whitespace-nowrap text-white font-light">Portfolio</span>
    </a>
 
<button id="menu-toggle" onClick={toggle} type="button"
    class="inline-flex items-center border-0 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open main menu</span>
    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
    </svg>
</button>

<div id="dropdown-menu"
  className={`mt-2 bg-gray-300 md:hidden  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700  absolute right-1 top-20 z-10  transition-all duration-300 ease-in-out transform ${
              isMenuOpen 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
            }`}
 class=" hidden mt-2  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="menu-toggle">
          <Link  href={"#about"} class="block py-2 px-3   md:border-0 md:hover:text-blue-700 md:p-0 hover:text-black dark:text-gray-500 ">About</Link>
          <Link href={"#projects"} class="block py-2 px-3   md:border-0 md:hover:text-blue-700 md:p-0 hover:text-black dark:text-gray-500 ">Projects</Link>
          <Link href={"#contact"} class="block py-2 px-3   rounded-sm  md:hover:bg-transparent md:border-0  hover:text-black md:p-0">Contact</Link>
    </ul>
</div>

    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
       
        <li>
          <Link  href={"#about"} class="block py-2 px-3 text-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 ">About</Link>
        </li>
        <li>
          <Link href={"#projects"} class="block py-2 px-3 text-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 ">Projects</Link>
        </li>
      
        <li>
          <Link href={"#contact"} class="block py-2 px-3 text-gray-500  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 ">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
  <hr className=" border-gray-500 border-spacing-1" />
</nav>

 
    </>
  )
}
