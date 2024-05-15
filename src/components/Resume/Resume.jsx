import React, { useState } from 'react';
import Education from './Education';
import Skills from './Skills';
import Accomplishments from './Accomplishments';


export default function Resume () {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section id="resume" className="resume-section">
      <div>
        <h2>My Resume</h2>
      </div>
      <div>
        <ul className="resume-list">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setAchievementData(false);
            }}
            className={`resume-item ${
              educationData ? "active" : ""
            }`}
          >
            <span className="resume-link">Education-Job Experience</span>
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setAchievementData(false);
            }}
            className={`resume-item ${
              skillData ? "active" : ""
            }`}
          >
            <span className="resume-link">Professional Skills</span>
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setAchievementData(true);
            }}
            className={`resume-item ${
              achievementData ? "active" : ""
            }`}
          >
            <span className="resume-link">Achievements</span>
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Accomplishments />}
    </section>
  );
};


