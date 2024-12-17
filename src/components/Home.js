import React, {useEffect, useState} from 'react'
import FadeInSection from "./FadeInSection";
import love from "../gif/love.gif"
import "./Home.scss";
import { MdEmail } from "react-icons/md";
import linkedin from "../gif/linkedin.png"
import git from "../gif/git.png"
import em from "../gif/em.png"
import cv from "../gif/cv.jpg"
function Home() {
    const [text, setText] = useState(0);
    const phrase = "👋hi there, I'm THI HUYEN";

    useEffect(() => {
    
        const intervalId = setInterval(() => {
          text < phrase.length-1 && setText((prevText) => prevText + 1);
    
          
        }, 100);
    
        return () => clearInterval(intervalId);
      }, [text]);

    return (
        <div id="home" className="intro">
            <div className="nav">
                <div className="nav-link">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#experience">Experiences</a>
                    <a href="#proj">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                
                <div className="nav-to">
                    <a href="https://github.com/Hoanghuyen2k3" target="_blank"rel="noopener noreferrer"><img className="git" src={git} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/thi-huyen-hoang-ab434019b/" target="_blank"rel="noopener noreferrer"><img className="git" src={linkedin} alt="linkedin" /></a>
                    <a href="https://drive.google.com/file/d/1ioL_g1plNzryY0vp-6nq3LbuRGwa2fDm/view?usp=sharing" target="_blank"rel="noopener noreferrer"><img className="git" src={cv} alt="email" /></a>

                    <a href="mailto:khanhhuyenx20@gmail.com" target="_blank"rel="noopener noreferrer"><img className="git" src={em} alt="email" /></a>
                </div>
                
            </div>
            <h1 className="intro-h1">{phrase.slice(0, text+1)} <div className="blinking-text"></div></h1>

            <FadeInSection>
                <div className="intro-subtitle">I  <img src={love} alt="love" /> creating stuffs.</div>
            
                <div className="intro-desc">
                I'm Thi Huyen, a passionate <b>third-year</b> Information Systems Engineering student at Humber Polytechnic with hands-on experience in <b>full-stack development, Android development, and cloud technologies</b>.
                </div>
                <div className="intro-desc">
                Currently, I’m sharpening my skills as a <b>Junior Software Developer</b> at MDMToGO, where I work as a full-stack and Android developer while tackling everything from <b>System design to DevOps</b> in the fast-paced world of <b>startups</b>.
                </div>
                <div className="intro-desc">
                When I’m not coding, you’ll find me exploring innovative tech solutions, learning new tools, and pushing boundaries in the ever-evolving field of engineering.
                </div>
                <div className="mail">
                    <div className="m">
                        <a
                        href="mailto:khanhhuyenx20@gmail.com"
                        className="intro-contact"
                        >
                            <MdEmail />
                        {" Say hi!"}
                        </a>
                    </div>
                    
                </div>
                
            </FadeInSection>
        </div>
    );
    }
    
    

export default Home