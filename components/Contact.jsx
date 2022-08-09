import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaDownload, FaFileDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
       <div className='max-w-[1240] m-auto px-2 py-16 w-full'>
           <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Contact</p>
           <h2 className='py-4'>Get In Touch</h2>

           <div className='grid lg:grid-cols-5 gap-8'>
              {/* Left side */}
                  <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                     
                     <div className='lg:p-2 h-full'>
                         <div>
                             <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="/" />
                         </div>
                         <div>
                            <h2 className='py-4'>AR Pial</h2>
                            <p>Full Stack Developer</p>
                            <p className='py-2'>I am available for freelance or full-time positions. Contact me and let's talk.</p>
                         </div>

                        <div>
                         <p className='uppercase pt-8'>Connect with me</p>
                         <div className='flex items-center justify-between py-4'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsFillPersonLinesFill /> 
                            </div>
                         </div>
                         </div>

                         <button className='mt-10 p-3 '> <a href="/../public/assets/pialCV.pdf" download> <span><FaDownload className='inline-block' size={20}/> My CV</span>   </a></button>
                     </div>
                          
                     


                     </div>
              {/* Right side */}
                <div className='col-span-3  w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                       <form action="">
                           <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                              <div className='flex flex-col'>
                                 <label className='uppercase text-sm py-2'>Name</label>
                                 <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                              </div>
                              <div className='flex flex-col'>
                                 <label className='uppercase text-sm py-2'>Phone Number</label>
                                 <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                              </div>
                           </div>
                           <div className='flex flex-col py-2'>
                                 <label className='uppercase text-sm py-2'>Email</label>
                                 <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email"/>
                           </div>
                           <div className='flex flex-col py-2'>
                                 <label className='uppercase text-sm py-2'>Subject</label>
                                 <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                           </div>

                           <div className='flex flex-col py-2'>
                                 <label className='uppercase text-sm py-2'>Subject</label>
                                 <textarea className='border-2 rounded-lg p-3 border-r-gray-300' rows="10"></textarea>
                                 <button className='w-full p-4 text-gray-100 mt-4 md:w-fit'>Send Message</button>
                                 
                           </div>

                           
                       </form>
                    </div>
               </div> 

       </div>

       <div className='flex justify-center py-12'>
          <Link href='/'>
             <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
             </div>
          </Link>
       </div>
       
    </div>
    </div>
           
    
    

  )
}

export default Contact