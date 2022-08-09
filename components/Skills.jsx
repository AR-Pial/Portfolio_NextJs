import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
       <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Skills</p>
          <h2 className='py-4'>What I Can Do</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
               
               <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                         <Image src='/../public/assets/skills/html.png' width='64px' height='64px' alt=''/>
                      </div>
                      <div>
                         <h3 className='flex flex-col items-center justify-center'>HTML</h3>
                      </div>
                  </div>
               </div>

               <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                         <Image src='/../public/assets/skills/css.png' width='64px' height='64px' alt=''/>
                      </div>
                      <div>
                         <h3 className='flex flex-col items-center justify-center'>CSS</h3>
                      </div>
                  </div>
               </div>

               <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                         <Image src='/../public/assets/skills/js.png' width='64px' height='64px' alt=''/>
                      </div>
                      <div>
                         <h3 className='flex flex-col items-center justify-center'>JAVASCRIPT</h3>
                      </div>
                  </div>
               </div>

               <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                         <Image src='/../public/assets/skills/react.png' width='64px' height='64px' alt=''/>
                      </div>
                      <div>
                         <h3 className='flex flex-col items-center justify-center'>REACT</h3>
                      </div>
                  </div>
               </div>

               <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                         <Image src='/../public/assets/skills/tailwind.png' width='64px' height='64px' alt=''/>
                      </div>
                      <div>
                         <h3 className='flex flex-col items-center justify-center'>Tailwind</h3>
                      </div>
                  </div>
               </div>

               <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                         <Image src='/../public/assets/skills/bootstrap.png' width='64px' height='64px' alt=''/>
                      </div>
                      <div>
                         <h3 className='flex flex-col items-center justify-center'>BOOTSTRAP</h3>
                      </div>
                  </div>
               </div>

               <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                         <Image src='/../public/assets/skills/php.png' width='64px' height='64px' alt=''/>
                      </div>
                      <div>
                         <h3 className='flex flex-col items-center justify-center'>PHP</h3>
                      </div>
                  </div>
               </div>

               <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                         <Image src='/../public/assets/skills/laravel.png' width='64px' height='64px' alt=''/>
                      </div>
                      <div>
                         <h3 className='flex flex-col items-center justify-center'>LARAVEL</h3>
                      </div>
                  </div>
               </div>

          </div>
       </div>
    </div>
  )
}

export default Skills