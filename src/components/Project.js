import React, {useState, useEffect} from 'react';
import hifive1 from "../gif/hifive1.png"
import hifive2 from "../gif/hifive2.png"
import hifive3 from "../gif/hifive3.png"
import hifive4 from "../gif/hifive4.png"
import cancer1 from "../gif/cancer1.png"
import cancer2 from "../gif/cancer2.png"
import cancer3 from "../gif/cancer3.png"
import cloud1 from "../gif/cloud1.png"
import cloud2 from "../gif/cloud2.png"
import vn1 from "../gif/vn1.png"
import vn2 from "../gif/vn2.png"
import vn3 from "../gif/vn3.png"
import git from "../gif/git.png"
import up from "../gif/up.png"
import mem1 from "../gif/mem1.png"
import mem2 from "../gif/mem2.png"

import mem3 from "../gif/mem3.png"
import mem4 from "../gif/mem4.png"
import mem5 from "../gif/mem5.png"
import mem6 from "../gif/mem6.png"


import "./Project.scss"
import { FaLocationArrow } from "react-icons/fa";
import VideoPlayer from './VideoPlayer';
import VideoPlayer1 from './VideoPlayer1';
import FadeInSection from './FadeInSection';
const projects ={
    HiFive : {
        tech: "ReactJS, Redux, CSS, HTML, and SCSS",
        github:"https://github.com/Hoanghuyen2k3/hifive",
        web:"https://hoanghuyen2k3.github.io/hifive/",
        img: [hifive1, hifive2, hifive3, hifive4],
        description: "HiFive is a collection of five engaging games. Each game is designed to provide a fun and challenging experience for users.",
        more: ["Designed 5 interactive games to provide a fun and challenging experience for users",
        "Implemented the classic Tic Tac Toe game and achieved unbeatable computer player through the Minimax algorithm",
        "Utilized TensorFlow models (hand pose and finger pose) and Webcam to detect real-time the user's choice of rock, paper, or scissors",
        "Employed A* algorithm with Euclidean Distance Heuristic for Puzzle game to help users solve the 8 puzzle quicklier by 90%.",
        
        "Classic memory card game where users match pairs of cards with the same symbols.",
        "Word Search Game: Users must find all the hidden words in the given grid to win"]       
    },
    Cancer:{
        tech: "Python, Jupyter Notebook, Numpy, Pandas, Machine Learning",
        img: [cancer1, cancer2, cancer3],
        github:"https://github.com/Hoanghuyen2k3/Cancer-predictor-ML",
        web: "https://cancer-predictor.streamlit.app/",
        description: "Cancer Predictor ML is a machine learning project that aims to predict the likelihood of two types of cancer: breast cancer and diabetes. The project includes two separate applications, each focusing on predicting one type of cancer.",
        more: ["Utilized Logistic Regression Machine Learning to predict the likelihood of breast cancer and diabetes with accuracy of 95%.", "Provided interactive graph to dynamically visualize correlation between inputs and results by Matplotlib and Seaborn."]
    },
    Cloud:{
        tech:"Python, Arduino IDE, Networking",
        img: [cloud1, cloud2],
        github: "https://github.com/Hoanghuyen2k3/Cloud-based-smart-monitoring-system",
        web: "https://youtu.be/PrwEOURVKtA?autoplay=1&mute=1",
        description: "The smart room system focuses on monitoring temperature, humidity, light, and occupancy, providing better room environment management. The project involves the integration of hardware, software, and cloud-based solutions to achieve a comprehensive smart room system. ",
        more: [
            "Utilized hardware components such as Arduino UNO, Arduino Wi-Fi 1010, Arduino MKR, and HCSR04 Ultrasonic sensors to monitor light, temperature, humidity, and occupancy of the room. The LED turns on if the room is full and the occupancy number is displayed on LCD screen.",
            "Connected with Firebase and Arduino IoT Cloud for real-time database storage, visually display graph and control system by phone."
        ]
    },
    Memoritoo: {
        tech: "ReactJS, NodeJS, Redux, JavaScript, CSS, SCSS, HTML, and OpenAI API",
        img: [mem1, mem2, mem3, mem4, mem5, mem6],
        github: "https://github.com/Hoanghuyen2k3/memoritoo",
        web:"https://hoanghuyen2k3.github.io/memoritoo/",
        video: "https://www.youtube.com/watch?v=kx4aKYlviYs&list=TLGGpn2whVyS2VMwNjAxMjAyNA&t=43s",
        description: "A Flash card website that utilized OpenAI to assist users create flashcards at ease and implemented Pomodoro techniques to help users learn efficiently.",
        more:[
            "Connected OpenAI API by NodeJs to create flashcard by promt automatically.",
            "Increased the learning efficiency by 80% by different learning modes.",
            "Implemented Pomodoro techniques to create a clock that help users use their time and learn efficiently."
        ],
    },
    VNhub:{
        tech: "ReactJS, NodeJS, Redux, JavaScript, CSS, SCSS, HTML, and OpenAI API",
        img:[vn1, vn2, vn3],
        github: "https://github.com/Hoanghuyen2k3/VNhub",
        web: "https://hoanghuyen2k3.github.io/VNhub/",
        description:"Travelling website that utilized various API to get real-time weather forecasts and information about the destination and added AI chatbox to help users craft their trip plans.",
        more: [
            "Utilized Weather API and Travel API to get real-time weather forecasts and unveil destination insights, cuisines, and reviews.",
            "Utilized OpenAI to create Chatbox that help users craft their travel plans."
        ]
    }


}
function Project() {
    const [pro, setPro]= useState("HiFive");
    const [imgP, setImgP] = useState(0);
    useEffect(() => {
      // console.log(pro==="HiFive" ?"h":"null")
        const intervalId = setInterval(() => {
          // Your interval logic
          if (pro !== "Memoritoo"){
            if (imgP > 0 ) {
                setImgP(imgP - 1);
              } else {
                setImgP(projects[pro].img.length - 1);
              }
          }
          
        }, 2000);
      
        // Clean up the interval when the component unmounts or when the dependencies change
        return () => clearInterval(intervalId);
      }, [imgP, pro]);
      
      
  return (
    <div id="proj" className="pro">
        <FadeInSection>

        <span className="section">/ projects <div className="dash"></div></span>
        <div className="projects">
            <div className="buttons">
                <button className={pro==="HiFive" ?"h":""} onClick={(event)=>setPro(event.target.value)} value="HiFive">HiFive</button>
                <button className={pro==="Cancer" ?"h":""} onClick={(event)=>setPro(event.target.value)} value="Cancer">Cancer Predictor ML</button>
                <button className={pro==="Cloud" ?"h":""} onClick={(event)=>setPro(event.target.value)} value="Cloud">Cloud based smart monitoring systems</button>
                <button className={pro==="Memoritoo" ?"h":""} onClick={(event)=>setPro(event.target.value)} value="Memoritoo">Memoritoo </button>
                <button className={pro==="VNhub" ?"h":""} onClick={(event)=>setPro(event.target.value)} value="VNhub">VNhub </button>
            </div>

            <div className="discriptions">
            <FadeInSection>
              <div className="project-link">
                <a href={projects[pro].github} target="_blank"  rel="noopener noreferrer"><img className="git" src={git} alt="github" /></a>
                <a href={projects[pro].web} target="_blank"  rel="noopener noreferrer"><img className="git" src={up} alt="website" /></a>
              </div>
                
                <p><b>Tech stacks:</b> {projects[pro].tech}</p>
                <p>{projects[pro].description}</p>
                <ul>
                      {projects[pro].more.map( (p, i) => {
                        return (
                          <FadeInSection delay={`${i + 1}00ms`}>
                            <li><FaLocationArrow className="icon" /> {p}</li>
                          </FadeInSection>
                        );
                      })}
                    </ul>

                {/* <ul>{projects[pro].more.map((p, index)=><li key={index}>{p}</li>)}</ul> */}
            </FadeInSection >

            </div>
            <div className="img-div">
                {/* <div onClick={()=> imgP > 0 ? setImgP(imgP-1): setImgP(projects[pro].img.length -1 )}>-</div> */}
                {/* <div onClick={()=> imgP < projects[pro].img.length -1 ? setImgP(imgP+1): setImgP(0) }>+</div> */}
               {
                pro ==="Memoritoo" ? <div className="video-container">
                                            <div className="video">
                                            <VideoPlayer />
                                            </div>
                                            <img className="img-projects" src={projects[pro].img[imgP]} alt="project" />
                                     </div>:
                                     (pro==="Cloud"?
                                     <div className="video-container">
                                            <div className="video">
                                            <VideoPlayer1 />
                                            </div>
                                            <img className="img-projects" src={projects[pro].img[imgP]} alt="project" />
                                     </div>:<img className="img-projects" src={projects[pro].img[imgP]} alt="project" />
                                     )}
            </div>
        </div>

        </FadeInSection>
        
        
    </div>
  )
}

export default Project