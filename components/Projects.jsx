import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import propertyImg from '../public/assets/google.png'
import fbImg from '../public/assets/fb.png'
import msImg from '../public/assets/ms.png'
import youtubeImg from '../public/assets/youtube.png'
import ProjectItem from './ProjectItem'


const Projects = () => {
  return (
     <div id='projects' className='w-full'>
          <div className='max-w-[1240px] mx-auto px-2 py-16'>

             <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects</p>
             <h2 className='py-4'>What I've Built</h2>

             <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title='Google Project' backgroundImg={propertyImg} projectUrl='/google' />
                <ProjectItem title='Facebook Project' backgroundImg={fbImg} projectUrl='/facebook' />
                <ProjectItem title='MircoSoft Project' backgroundImg={msImg} projectUrl='/microsoft' />
                <ProjectItem title='Youtube Project' backgroundImg={youtubeImg} projectUrl='/youtube' />
             </div>

          </div>
     </div>
  )
}

export default Projects