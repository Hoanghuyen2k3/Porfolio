import React from 'react';
import { FaLocationArrow, FaGraduationCap, FaCode } from 'react-icons/fa';
import FadeInSection from './FadeInSection';
import profileImage from "../gif/thi.jpg";
import "./About.scss";

function About() {
  const educationDetails = {
    institution: "Humber Polytechnic Toronto, CA",
    degree: "Bachelor of Science Engineering Information Systems",
    graduationDate: "May 2026",
    gpa: "3.7/4.0",
    scholarships: [
      "Renewable Degree Entrance Scholarship",
      "FAST Bachelor of Engineering Diversity Leadership Scholarship"
    ],

  };

  const technicalSkills = {
    languages: [
      "Java", "Python", "C#/.NET", "C/C++", 
      "Dart", "JavaScript", "TypeScript", 
      "HTML/CSS", "SQL (Postgres)", "Bash", 
      "Shell Scripting"
    ],
    frameworks: [
      "ASP.NET", "React", "Node.js", 
      "Redux", "Flutter", "NUnit", 
      "JUnit", "REST API"
    ],
    devTools: [
      "Git", "Linux", "Docker", 
      "Jira", "SQL Server", "Redis", 
      "Firebase", "Google Cloud Platform", 
      "Azure DevOps", "Eclipse"
    ],
    libraries: [
      "Pandas", "NumPy", "Matplotlib", 
      "Scikit-Learn", "Keras", "Seaborn", 
      "TensorFlow", "jQuery", "Plotly"
    ]
  };

  return (
    <div>
      <FadeInSection>
        <div id="about" className="about">
          <div className="section-header">
            <div className="about-content">
              {/* Education Section */}
              <section className="education-section">
                <span className="section-title">
                  <FaGraduationCap className="section-icon" /> / education
                  <div className="dash"></div>
                </span>
                <div className="education-details">
                  <h3>{educationDetails.institution}</h3>
                  <p>{educationDetails.degree}</p>
                  <p>Expected Graduation: {educationDetails.graduationDate}</p>
                  <p>GPA: {educationDetails.gpa}</p>
                  
                  <h4>Scholarships:</h4>
                  <ul>
                    {educationDetails.scholarships.map((scholarship, index) => (
                      <li key={index}>{scholarship}</li>
                    ))}
                  </ul>
                  
                  
                </div>
              </section>


              {/* Technical Skills Section */}
              <section className="technical-skills-section">
                <span className="section-title">
                  <FaCode className="section-icon" /> / technical skills
                  <div className="dash"></div>
                </span>
                
                <div className="skills-grid">
                  {Object.entries(technicalSkills).map(([category, skills]) => (
                    <div key={category} className="skill-category">
                      <h4>{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                      <ul>
                        {skills.map((skill, index) => (
                          <FadeInSection key={index} delay={`${index + 1}00ms`}>
                            <li><FaLocationArrow className="icon" /> {skill}</li>
                          </FadeInSection>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              className="about-image" 
              alt="Thi Huyen Hoang" 
              src={profileImage} 
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default About;