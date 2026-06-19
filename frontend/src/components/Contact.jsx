import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiMailSend, BiLogoGmail, BiLogoLinkedin, BiLogoGithub, BiMap } from 'react-icons/bi';
import emailjs from '@emailjs/browser';
 
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    try{
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    }catch (error){
      setStatus('error');
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className='mx-auto w-full min-h-[50vh] px-4 sm:px-6 lg:px-8 pt-10' id='contact'>
      <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.5, delay:0.1}}
      className='mx-auto max-w-4xl mt-16 flex items-center justify-center flex-col gap-8 sm:gap-12'
      >
        <motion.h1
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.5, delay:0.2}}
        className='text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-sky-500 to-blue-400 text-center'
        >Contact Me</motion.h1>

        <motion.p
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.5, delay:0.3}}
        className='text-gray-300 text-lg text-center max-w-2xl leading-relaxed'
        >
          Looking for a developer, collaborator, or intern? I'm always open to discussing projects, opportunities, and new ideas.
        </motion.p>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-6">

          {/*--------------- Contact Form ----------------*/}
          <motion.form 
            onSubmit={handleSubmit}
            initial = {{opacity: 0, y:20}}
            whileInView={{ opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration: 0.5, delay:0.4}}
            className='relative md:col-span-3 w-full max-w-3xl p-6 sm:p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-blue-500/20 shadow-2xl shadow-blue-900/10 flex flex-col gap-5'
          >
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/5 via-transparent to-sky-500/5 pointer-events-none" />
            
            <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5'>

              <div className='flex flex-col gap-2'>
                <label htmlFor='contact-name' className="text-sm text-slate-300">
                  Name
                </label>
                <input id='contact-name' type="text" placeholder='Your Name' required
                  name='name' value={formData.name} onChange={handleChange}
                  className='w-full px-4 py-3 rounded-xl bg-black/30 border border-blue-500/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
                  />
              </div>
              
              <div className='flex flex-col gap-2'>
                <label htmlFor='contact-email' className='text-sm text-slate-300'>
                  Email
                </label>
                <input id='contact-email' type="email" placeholder='your@email.com' required
                  name='email' value={formData.email} onChange={handleChange}
                  className='w-full px-4 py-3 rounded-xl bg-black/30 border border-blue-500/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
                  />
              </div>
            </div>


            <div className='relative z-10 flex flex-col gap-2'>
              <label htmlFor="contact-subject" className='text-sm text-slate-300'>
                Subject
              </label>
              <input id='contact-subject' type="text" 
                placeholder='Subject' name='subject' required 
                value={formData.subject} onChange={handleChange}
                className='relative z-10 w-full px-4 py-3 rounded-xl bg-black/30 border border-blue-500/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
              />
            </div>

            <div className='relative z-10 flex flex-col gap-2'>
              <label htmlFor="contact-message" className='text-sm text-slate-300'>
                Message
              </label>
              <textarea id='contact-message' rows="6" required
                placeholder='Tell me about your project or opportunity...' 
                name='message' 
                value={formData.message} onChange={handleChange} 
                className='relative z-10 w-full px-4 py-3 rounded-xl resize-none bg-black/30 border border-blue-500/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
              />
            </div>

            <button type='submit' disabled={loading}
            className={`relative z-10  flex justify-center overflow-hidden group bg-linear-to-r from-blue-600 via-sky-500 to-blue-400 px-8 py-4 rounded-xl font-semibold text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25'}`}>
              <span className='relative z-10 flex items-center justify-center gap-2' >
                {loading ? 'Sending...' : 'Send Message' }
                {!loading && (
                  <BiMailSend className='text-xl transition-transform duration-300 group-hover:translate-x-1'/>
                )} 
              </span>

              <div className='absolute inset-0 bg-linear-to-r from-blue-700 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </button>

            {status === 'success' && (
              <p className='relative z-10 text-green-400 text-center'>
                Message sent successfully. I'll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className='relative z-10 text-red-400 text-center'>
                Failed to send message. Please try again.
              </p>
            )}

          </motion.form>

          {/*---------------- Contact details -------------------*/}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative md:col-span-2 p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-blue-500/20 shadow-2xl shadow-blue-900/10"
          >
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/5 via-transparent to-sky-500/5 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                Contact Information
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Feel free to reach out.
              </p>

              <div className="flex flex-col gap-5 mt-8">

                {/* Email */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-black/20 border border-blue-500/10">
    
                  <a href="mailto:ankurvr988@gmail.com"
                    className="text-red-400 hover:scale-110 transition-transform"
                  >
                    <BiLogoGmail className="text-2xl" />
                  </a>

                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-white text-sm select-text">
                      ankurvr988@gmail.com
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-black/20 border border-blue-500/10">

                  <a
                    href="https://www.linkedin.com/in/ankur-kumar-verma-49398028a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:scale-110 transition-transform"
                  >
                    <BiLogoLinkedin className="text-2xl" />
                  </a>

                  <div>
                    <p className="text-xs text-slate-500">LinkedIn</p>
                    <p className="text-white text-sm select-text">
                      Ankur Kumar Verma
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-black/20 border border-blue-500/10">

                  <BiMap className="text-2xl text-blue-400" />

                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="text-white text-sm">
                      Uttar Pradesh, India
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>

        </div >

        <footer className='flex flex-col md:flex-row items-center justify-between gap-6 w-full mt-16 border-t border-gray-800/30 p-10'>
          <div className='text-gray-400 text-center text-sm sm:text-base hover:text-gray-300 transition-colors'>© 2026 Ankur Kumar Verma. All rights reserved.</div>

          <div className='flex gap-5'>

            <a href="https://github.com/akumasan-07" target='_blank' rel='noopener noreferrer'>
              <BiLogoGithub className='text-xl md:text-2xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 transition-all duration-300 ease-in-out'></BiLogoGithub>
            </a>

            <a href="https://www.linkedin.com/in/ankur-kumar-verma-49398028a/" target='_blank' rel='noopener noreferrer'>
              <BiLogoLinkedin className='text-xl md:text-2xl text-white cursor-pointer hover:scale-110 hover:text-blue-500 transition-all duration-300 ease-in-out'></BiLogoLinkedin>
            </a>

            <a href="mailto:ankurvr988@gmail.com" target='_blank' rel='noopener noreferrer'>
              <BiLogoGmail className='text-xl md:text-2xl text-white cursor-pointer hover:scale-110 hover:text-red-500 transition-all duration-300 ease-in-out'></BiLogoGmail>
            </a>
            
          </div>
        </footer>

      </motion.div>
    </div>
  )
}

export default Contact;