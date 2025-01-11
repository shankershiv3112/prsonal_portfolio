import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "A simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript, featuring real-time gameplay and win/tie detection.",
      links: {
        site: "#",
        github: "https://github.com/shankershiv3112/Tic-Tac-Toe-game",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "A daily expense tracker built with PHP and MySQL, allowing users to log, manage, and view their expenses with real-time data storage and retrieval.",
      links: {
        site: "#",
        github: "https://github.com/shankershiv3112/Daily-Expense-Tracker-Using-PHP-AND-MySQL",
      },
    },
    {
      img: project4,
      title: "Project #3",
      description: "A Pizza Sales Analysis Dashboard built with MySQL and Power BI, providing interactive insights on sales performance, trends, and top-selling items.",
      links: {
        site: "#",
        github: "https://github.com/shankershiv3112/Pizza-Sales-Analysis-Dashboard-Using-Power-Bi",
      },
    },
    {
      img: project5,
      title: "Project #4",
      description: "A mobile-friendly application using React Native.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project6,
      title: "Project #5",
      description: "A personal portfolio built with Vite and React, featuring a modern design to showcase my projects, skills and a section about me",
      links: {
        site: "#",
        github: "https://github.com/shankershiv3112/prsonal_portfolio",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio
