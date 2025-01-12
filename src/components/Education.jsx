import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ShinyEffect from "./ShinyEffect";

const Education = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const educationDetails = [
    {
      title: "Graduation",
      details: "Bachelor of Technology in Information Technology",
      name: "Kalinga Institute of Industrial Technology ",
      period: "2021-2025",
    },
    {
      title: "Higher Secondary School",
      details: "Sri Chaitanya Vidyaniketan School ",
      period: "2020-2021",
    },
    {
      title: "Secondary School",
      details: "Dr Dy Patil International School ",
        period: "2018-2019",
    },
  ];

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="education" // Ensure the id is "education"
      className="education-container text-white p-8 relative min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold mb-10">Education</h2>

      {/* Shiny Effects */}
      <ShinyEffect left={-100} top={-50} size={300} />
      <ShinyEffect right={-100} top={200} size={400} />
      <ShinyEffect left={150} top={400} size={350} />

      <div className="education-list space-y-12 relative z-10">
        {educationDetails.map((item, index) => (
          <motion.div
            key={index}
            className="education-item border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: index * 0.4, // Delay each card for a staggered effect
            }}
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-lg mt-2">{item.details}</p>
            <p className="text-lg mt-2">{item.name}</p>
            <p className="text-lg mt-2">{item.period}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
