"use client"
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-1 max-w-[45rem] text-center leading-8 sm:mb-4 scroll-mt-4"
      initial={{ opacity: 0, y: 1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h1 className="text-xl font-bold">About me</h1>
      <p className="mb-3">
        Hello! My name is Shreya. I am a <span className="font-medium">multipassionate individual and tech enthusiast</span>, captivated by the endless opportunities of
        technology for social good. 
      </p>

      <p className="mb-3">
        I recently graduated with a <span className="font-medium">Bachelor&apos;s of Science in Computer Science</span> from UC Santa Cruz, where
        I&apos;ve dived into fascinating coursework, projects, and experiences that 
        have honed my skills and increased my passionate for continuous learning and growth. Professionally, I have <span className="font-medium">completed 2 Software Engineering internships</span> at Realtor.com and 
        the UC Santa Cruz Genomics Institute. I&apos;m proficient 
        in several programming languages, including <span className="font-medium">Python, JavaScript, and C</span>, and am comfortable working 
        with databases and software development tools. 
      </p>

      <p className="mb-3">
        I thrive in <span className="font-medium">collaborative environments</span> and enjoy 
      working to solve complex problems. I am eager to embark on a career where I can <span className="font-medium">develop and design software for social good</span>, and aspire to contribute to 
        innovative solutions that have a meaningful impact. 
      </p>

      <p className="mb-3">
        When I&apos;m not coding, I enjoy
        reading, taking long walks, and planning my next trip. I also enjoy{" "}
        <span className="font-medium">learning trivia and random facts</span>, especially
        about{" "} <span className="font-medium">geography, history, and astronomy</span>.
      </p>
    </motion.section>
  )
}

export default About