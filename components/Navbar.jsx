import Image from "next/image";
import Link from "next/link";
import React,{useState} from "react";
import { AiOutlineClose, AiOutlineMenu,AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn,FaFacebook,FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav]= useState(false)
 
  const hundleNav = () =>{
    setNav(!nav)
  };

 
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer">
         <Link href='/'>
           <Image src="/../public/assets/pial1.png" alt="/"width="125" height="50" />
         </Link>
        <div>
          <ul className="hidden md:flex md:mx-2">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>

          <div onClick={hundleNav} className="md:hidden">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
 
      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ''}>
         <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" :
          "fixed left-[-100%] top-0  p-10 ease-in duration-500"}>
           <div>
               <div className="flex w-full items-center justify-between">
                  
                    <Link className="cursor-pointer" href="/">
                      <Image src="/../public/assets/pial1.png" width="87" height="35" alt="/" />
                    </Link>

                  <div onClick={hundleNav} className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
                     <AiOutlineClose size={21} />
                  </div>  
               </div>

               <div className="border-b border-gray-300 my-4">
                 <p className="w-[85%] md:w-[90%] py-4">Let's build something legendary together</p>
               </div>
            </div> 

             <div className="flex flex-col">
                <ul className="uppercase">
                   <Link  href="/">
                      <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
                   </Link>

                   <Link  href="/#about">
                      <li onClick={()=> setNav(false)} className="py-4 text-sm">About</li>
                   </Link>

                   <Link  href="/#skills">
                      <li onClick={()=> setNav(false)} className="py-4 text-sm">Skills</li>
                   </Link>

                   <Link  href="/#projects">
                      <li onClick={()=> setNav(false)} className="py-4 text-sm">Projects</li>
                   </Link>

                   <Link  href="/#contact">
                      <li onClick={()=> setNav(false)} className="py-4 text-sm">Contact</li>
                   </Link>
                </ul>
                <div className="pt-24">
                   <p className="uppercase tracking-widest text-[#5661e5]">Let's Connect</p>
                    <div className="flex items-center justify-between space-x-2 my-4 w-full sm:w-[80%]">
                       <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                          <FaLinkedinIn />
                       </div>
                       <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                          <FaGithub />
                       </div>
                       <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                          <FaFacebook />
                       </div>
                       <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                          <AiOutlineMail />
                       </div>
                       <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                          <BsFillPersonLinesFill />
                       </div>
                    </div>
                </div>
             </div>
          </div>
       </div>
       
    </div>
  );
};

export default Navbar;
