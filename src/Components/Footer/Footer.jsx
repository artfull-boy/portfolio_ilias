import React from 'react'
import './Footer.css'
import {motion} from 'framer-motion'

function Footer() {
  return (
    <motion.div initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.8 }}
    variants={{
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 }
    }} className="footer container relative mt-14 gap-32">
      <div className='flex flex-col gap-0 items-center text-[#2A2A2A]'>
        <p className='text-[24px] font-semibold'>Got a Project in Mind?</p>
        <a href="mailto:ivarrais2001@gmail.com" target='_blank'>
        <p className='cta text-[120px] font-bold'>Get In T<span className='text-[#0000ff]'>o</span>uch</p>
        </a>
      </div>
      <div className='flex sm:flex-row flex-col gap-2 justify-between mb-3 items-center'>
        <p className='text-[16px] font-medium  order-1 sm:text-right text-center w-[100%]'>
        Last Update on <span className='font-bold inline'>09/09/2024</span>
        </p>
        <a href='https://artfull-boy.github.io/Portfolio/' target='_blank'>
            <div className='flex justify-center items-center p-3 bg-[#0000ff] rounded-[50%] text-[16px] font-medium text-white w-[40px] h-[40px]'>
                V1
            </div>
        </a>
      </div>
    </motion.div>
  )
}

export default Footer