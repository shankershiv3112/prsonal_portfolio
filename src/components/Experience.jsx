import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Utkryst IT Solutions',
        role:'Azure Cloud Administrator Intern',
        period: 'May 2024 - June 2024',
        description: 'I completed a summer internship at Utkryst IT Solutions, Mumbai, from May 15 to June 14, 2024, as part of my Bachelor of Technology in Information Technology program. During the internship, I worked on Microsoft Azure Cloud administration and contributed to the Jharkhand Electricity Board project under the guidance of the Program Manager. This experience helped me enhance my technical skills and teamwork abilities.',
      },
      
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-bold'>{experience.company}</h2>
                    <p className='text-gray-300 text-1xl font-semibold'>{experience.role}</p>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience
