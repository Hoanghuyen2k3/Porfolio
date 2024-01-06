import React from 'react'
import FadeInSection from './FadeInSection';
import thi from "../gif/thi.jpg"
import "./About.scss"
import { FaLocationArrow } from "react-icons/fa";

function About() {
    const one = (
        <p>
         I pride myself on being a smart, dedicated, outgoing, and industrious individual. These qualities fuel my eagerness to learn quickly and stay abreast of the latest technologies shaping the world of engineering. Currently maintaining a Cumulative GPA of +92%, I have garnered scholarships that speak to my unwavering dedication to academic excellence.
        </p>
      );
      const two = (
        <p>
          Beyond the classroom, I actively engage in self-improvement during my free time. Exploring online courses and educational content on platforms like YouTube and Coursera has become a regular part of my routine. This commitment to staying informed ensures that I am well-equipped with the latest skills and knowledge.
        </p>
      );
  
      const tech_stack = [
        "Typescript",
        "Python",
        "React.js",
        "Redux",
        "Java",
        "Javascript ES6+",
        "C", 
        "C++", 
        "SQL",
        "AWS",
        "Git"
      ];
  
      return (
        <div >
          <FadeInSection>
            <div id="about" className="about">
              <div className="section-header ">
                <div className="about-content">
                  <span className="section-title">/ about me <div className="dash"></div></span>
                  <div className="about-description">
                    {[one]}
                    {"Here are some technologies I have been learning and working with:"}
                    <ul className="tech-stack">
                      {tech_stack.map(function (tech_item, i) {
                        return (
                          <FadeInSection delay={`${i + 1}00ms`}>
                            <li><FaLocationArrow className="icon" /> {tech_item}</li>
                          </FadeInSection>
                        );
                      })}
                    </ul>
                    {[two]}
                  </div>
                  
                </div>
              </div>
              <div className="about-image">
                <img className="about-image" alt="Thi Huyen Hoang" src={thi} />
              </div>
              
            </div>
          </FadeInSection>
        </div>
      );
    }
  

export default About