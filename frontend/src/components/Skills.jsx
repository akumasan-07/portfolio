import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import 'devicon/devicon.min.css';


//     !! remove the skill repetition when adding more skills !!
const frontendSkills = [
  {
    name: 'React',
    icon: 'devicon-react-original colored',
  },
  {
    name: 'JavaScript',
    icon: 'devicon-javascript-plain colored',
  },
  {
    name: 'Tailwind CSS',
    icon: 'devicon-tailwindcss-original colored',
  },
  {
    name: 'HTML5',
    icon: 'devicon-html5-plain colored',
  },
  {
    name: 'CSS3',
    icon: 'devicon-css3-plain colored',
  },
  {
    name: 'Framer Motion',
    icon: 'devicon-framermotion-original',
  },
  {
    name: 'React Router',
    icon: 'devicon-reactrouter-plain colored',
  },
];

const backendSkills = [
  {
    name: 'Node.js',
    icon: 'devicon-nodejs-plain colored',
  },
  {
    name: 'Express.js',
    icon: 'devicon-express-original',
  },
  {
    name: 'MongoDB',
    icon: 'devicon-mongodb-plain colored',
  },
  {
    name: 'Java',
    icon: 'devicon-java-plain colored',
  },
  {
    name: 'Git',
    icon: 'devicon-git-plain colored',
  },
  {
    name: 'GitHub',
    icon: 'devicon-github-original',
  },
  {
    name: 'Postman',
    icon: 'devicon-postman-plain colored',
  },
  {
    name: 'JWT',
    icon: 'devicon-jwt-plain',
  },
];

const SkillPill = ({ skill }) => {
  return (
    <div className='mx-3 px-5 py-2 rounded-full bg-slate-900/40 border border-blue-500/20 backdrop-blur-md text-white flex items-center gap-2'>
      <i className={`${skill.icon} text-xl`} />
      <span>{skill.name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id='skills'
      className='mx-auto max-w-6xl min-h-[25vh] px-4 py-20 flex flex-col gap-10'
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className='text-sm md:text-base font-bold text-center text-slate-400 bg-clip-text bg-linear-to-r from-blue-600 via-sky-500 to-blue-400'
      >
        Technologies I work with
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3}}
      >
        <Marquee speed={40} gradient={false}>
          {frontendSkills.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
        </Marquee>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5}}
      >
        <Marquee speed={40} direction='right' gradient={false}>
          {backendSkills.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default Skills;