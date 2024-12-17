import React from 'react';
import { FaBriefcase, FaLocationArrow } from 'react-icons/fa';
import FadeInSection from './FadeInSection';
import "./Experience.scss";
import profileImage from "../gif/thi.jpg";

function Experience() {
  const experiences = [
    {
      title: "Junior Software Developer (Co-op)",
      company: "MDMToGO | Startup – EMM Application",
      location: "Mississauga, CA",
      duration: "May 2024 – Present",
      achievements: [
        "Developed robust back-end functionality using C#, ASP.NET, Web API, and Android Management API (AMAPI), delivering scalable web applications capable of handling 1M+ device requests daily.",
        "Created and optimized SQL Server databases, reducing query latency by 50% through efficient indexing and stored procedures.",
        "Improved page load times by 80% using caching techniques, lazy loading, and database query optimizations.",
        "Implemented unit testing with NUnit, achieving 97% test coverage and ensuring application stability and reliability.",
        "Worked closely with stakeholders to design and implement geofencing features using Azure Maps, allowing users to dynamically create and enforce geofence boundaries for real-time geolocation tracking and compliance.",
        "Architected SQL tables to efficiently store geofence rules, latitude/longitude points, associated actions, and policy correlations, reducing query processing times by 40%.",
        "Built a high accuracy geofencing system using Java, Fused Location APIs, and Ray Casting algorithms, enabling precise detection of device entry/exit events for real-time enforcement with AMAPI controls.",
        "Reduced Azure Maps costs by 40% by implementing a multi-tier caching strategy using local disk, in-memory, and Redis.",
        "Delivered interactive data visualizations using DevExtreme, empowering stakeholders to analyze compliance metrics and device insights with increased efficiency.",
        "Developed an event logging system (database and backend) to track user interactions, improving data traceability and system auditing.",
        "Enabled real-time geofencing updates via Firebase Push Notifications and Azure Maps, ensuring devices receive the latest geofence rules with minimal latency.",
        "Developed UI and backend to securely manage Wi-Fi (client/server certificates) and password configurations for enrolled devices, improving security and user control.",
        "Collaborated on DevOps workflows using Azure DevOps, implementing CI/CD pipelines and automated testing, reducing deployment times by 70%."
      ]
    },
    {
      title: "Math Tutor",
      company: "Humber Polytechnic",
      location: "Toronto, CA",
      duration: "Sep. 2022 – Aug. 2023",
      achievements: [
        "Tutored complex topics, including Calculus, Linear Algebra, and Data Structures & Algorithms, improving student academic performance with average grade increases of 15%."
      ]
    }
  ];

  return (
    <div>
      <FadeInSection>
        <div id="experience" className="experience">
          

        <div className="section-header">
          <span className="section-title">
            <FaBriefcase className="section-icon" /> / experience
            <div className="dash"></div>
          </span>

          <div className="experience-container">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <p>{exp.company} | {exp.location}</p>
                  <p className="duration">{exp.duration}</p>
                </div>
                
                <ul className="achievements">
                  {exp.achievements.map((achievement, achieveIndex) => (
                    <FadeInSection key={achieveIndex} delay={`${achieveIndex + 1}00ms`}>
                      <li>
                        <FaLocationArrow className="icon" /> {achievement}
                      </li>
                    </FadeInSection>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
          
        <div className="about-image">
                      {/* <img 
                        className="about-image" 
                        alt="Thi Huyen Hoang" 
                        src={profileImage} 
                      /> */}
                    </div>
                    
        </div>
      </FadeInSection>
    </div>
  );
}

export default Experience;