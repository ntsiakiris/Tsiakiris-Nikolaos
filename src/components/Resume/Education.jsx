import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";


export default function Education ()  {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="education-container"
    >
      <div className="education-section">
        <div className="education-header">
          <p className="education-date">2013 - 2022</p>
          <h2 className="education-title">Education</h2>
        </div>
        <div className="education-cards">
          <ResumeCard
            title="BSc in Information and Electronic Engineering"
            subTitle="International Hellenic University (2016 - 2022)"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Secondary School (2013 - 2016)"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      <div className="education-section">
        <div className="education-header">
          <p className="education-date">2023 - 2024</p>
          <h2 className="education-title">Job Experience</h2>
        </div>
        <div className="education-cards">
          <ResumeCard
            title="Research & Informatics Technology Office"
            subTitle="Greek Army, Research & Informatics Technology Office (May 2023- March 2024)"
            des="During my compulsory military service as soldier of the Research and Technology Office worked as an IT Support Specialist and Systems Administrator."
          />
        </div>
      </div>
    </motion.div>
  );
};


