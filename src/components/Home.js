import React, {useEffect, useState} from 'react'
import FadeInSection from "./FadeInSection";
import love from "../gif/love.gif"
import "./Home.scss";
import { MdEmail } from "react-icons/md";

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
        <div className="intro">
        
            <h1 className="intro-h1">{phrase.slice(0, text+1)} <div className="blinking-text"></div></h1>

            <FadeInSection>
                <div className="intro-subtitle">I  <img src={love} alt="love" /> creating stuffs.</div>
            
                <div className="intro-desc">
                I am a third-year student pursuing a Bachelor of Engineering in Information Systems at Humber College, driven by a relentless passion for learning and growth. As I embark on my journey towards becoming an accomplished engineer, I am actively seeking co-op opportunities ranging from 4 to 16 months, set to commence in Summer 2024.
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