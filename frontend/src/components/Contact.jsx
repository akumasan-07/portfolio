import React from 'react'
import { motion } from 'framer-motion'
 
const Contact = () => {
  return (
    <div className='mx-auto w-full min-h-[50vh] px-4 sm:px-6 lg:px-8' id='contact'>
      <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.1}}
      className='mx-auto max-w-4xl mt-16 flex items-center justify-center flex-col gap-8 sm:gap-12'
      >
        <motion.h1
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.2}}
        className='text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-sky-500 to-blue-400 text-center'
        >Contact Me</motion.h1>

        <motion.p
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.3}}
        className='text-gray-300 text-lg text-center max-w-2xl leading-relaxed'
        >
          Let's build exciting web-projects together.
        </motion.p>

        <button className='relative overflow-hidden group bg-linear-to-r from-blue-600 via-sky-500 to-blue-400 px-8 py-4 md:text-lg rounded-full font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-white'>
          <span className='relative z-10'>Get in Touch</span>
          <div className='absolute inset-0 bg-linear-to-r from-blue-700 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </button>
        
        <footer className='w-full mt-16 border-t border-gray-800/30 p-10'>
          <div className='text-gray-400 text-center text-sm sm:text-base hover:text-gray-300 transition-colors'>Ankur Kumar Verma | All rights reserved.</div>
        </footer>
      </motion.div>
    </div>
  )
}

export default Contact