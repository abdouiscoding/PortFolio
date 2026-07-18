import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import pfp from './assets/pfp.jpg'
import HoloRoomHome from "./assets/HoloRoomHome.png";
import HoloRoom from "./assets/HoloRoom.png";
import HoloRoomDashboard from "./assets/HoloRoomDashBoard.png";
import HoloRoomAR from "./assets/HoloRoomAR.jpg";
import TextAnalyser from "./assets/TextAnalyser.png";
import './App.css'
import {
  Sun,
  Mail
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFileAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  const [imagepopup, setImagePopup] = useState(false);
  const [zoomedimage, setZoomedimage] = useState('');
  const [Projects, setProjects] = useState([
    { images: [
      HoloRoomHome,
      HoloRoom,
      HoloRoomDashboard,
      HoloRoomAR
    ],
      name: "HoloRoom", 
      description: "HoloRoom is a collaborative furniture and décor shopping platform developed by Abderahim Ferdi, Guermache Ayoub, and Benabderrahmane Anis. It combines e-commerce with an interactive AR experience, allowing users to place virtual furniture and decorations in their own space before making a purchase. The platform also includes an AI assistant that supports both text and voice conversations, with voice interaction available directly in AR mode for a more immersive experience.", 
      registrationdisabled: true,
      demoLink: "https://holoroom-front.vercel.app",
      Technologies: ["React", "Three.js", "WebXr", "SpringBoot", "MYSQL"],
      RepoLink: "https://github.com/abdouiscoding/HoloRoom" 
    },
    { images: [
      TextAnalyser
    ],
    name: "Multithreaded Text Analyzer",
    description: "Multithreaded Text Analyzer is a desktop application developed by Abderrahim Ferdi. It analyzes multiple text files concurrently using multithreading while keeping the interface responsive. The application provides real-time progress tracking, word frequency statistics, unique word detection, and sentiment analysis, allowing users to efficiently process and analyze large collections of text files.",
    Technologies: [
      "Java",
      "JavaFX",
      "Threads",
      "ExecutorService",
      "Stanford CoreNLP"
    ],
    demoLink: "none",
    RepoLink: "https://github.com/abdouiscoding/MiltiThread-File-Scanner" 

  }
  ]);
  console.log(pfp);
  const [mode, setMode] = useState("Dark");

  function switchMode() {
    if (mode === "Dark") {
      document.body.classList.add("dark-mode");
      setMode("Light");
    } else {
      document.body.classList.remove("dark-mode");
      setMode("Dark");
    }
  }

  function zoomimage(img) {
    setZoomedimage(img);
    setImagePopup(true);
    console.log(img);
  }

  return (
    <>
    <header>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <div onClick={switchMode}>
           <Sun />
          <span>{mode} Mode</span>
        </div>
      </ul>
    </nav>
    </header>
    <div id="main" >
      <div className="leftbox">
        <div>
          <img src={pfp} alt="Profile Picture" />
        </div>
        <div className="rightbox">
          <h1>Hi, I'm Abderrahim Ferdi, a Sofware engineer</h1>
          <h3>I’m a Software Engineer with a passion for developing modern web applications. I enjoy solving problems, writing clean code, and creating responsive, user-friendly experiences while continuously expanding my skills through personal projects.</h3>
        </div>
      </div>  
    </div>
    <div id="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {Projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className={`Images ${project.images.length === 1 ? "single" : ""}`}>
              {project.images.map((img, imgIndex) => (
                <img onClick={()=>{zoomimage(img)}} key={imgIndex} src={img} alt={`${project.name}`} />
              ))}
            </div>
            <div className="project-info">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className={`demo ${project.demoLink === "none" ? "noLink" : ""}`}>
              {project.registrationdisabled && (
                <>
                <p>Demo Account: Registration is currently disabled. To explore the AR experience and other features, use:</p>
                <p>Email: teacher@account.com</p>
                <p>Password: teacher</p>
                </>
              )}
              <p>Demo Link: <a target="_blank" href={project.demoLink}>https://holoroom-front.vercel.app</a></p>
            </div>
            <div className="Technologies">
              <h3>Technologies used are:</h3>
              {project.Technologies.map((tech, techindex)=> (
                <div key={techindex}>{tech}</div>
              ))}
            </div>
            <a target="_blank" id="RepoLink" href={project.RepoLink} >
              View Repository
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div id="about">
      <h1>About Me</h1>
      <div>-Full Name: Abderrahim Ferdi</div> 
      <div>-Location: Constantine, Algeria</div>
      <div>-Education: Bachelor Degree in software engineering</div>
      <div>-Status: Software Engineering Masters Student</div>
      <div>-Languages: Arabic (Native), English (Fluent), French (Below-Average)</div>
      <div>-Technologies: React, SpringBoot, MySql, Java</div>
      <div>-Interests: Web Development, Problem Solving</div>
      <div>-Currently Learning: Docker</div>
      <div>-Open to: Internships / Freelance / Full-time opportunities</div>
      <div>-Resume link: not done yet!</div>
    </div>
    <div id="contact">
      <h1>Contact Me</h1>
      <div className='contacts'>
        <MdEmail/>
        <span> abderrahimferdi.work@gmail.com</span>
      </div>
      <div className='contacts'>
        <FaGithub/>
        <span> https://github.com/abdouiscoding</span>
      </div>
      <div className='contacts'>
        <FaLinkedin/>
        <span> Not Yet</span>
      </div>
      <div className='contacts'>
        <FaInstagram/>
        <span> Not Yet</span>
      </div>
    </div>
    {imagepopup && (
      <div className="Overlay" onClick={()=>setImagePopup(false)}>
      <div className="image-popup" onClick={()=>setImagePopup(false)}>
        <img src={zoomedimage} alt="Zoomed" />
      </div>
      </div>
    )}
    </>
  );
}

export default App
