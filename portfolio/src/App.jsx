import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import pfp from './assets/pfp.jpg'
import './App.css'
import { Sun } from 'lucide-react'

function App() {
  const [imagepopup, setImagePopup] = useState(true);
  const [zoomedimage, setZoomedimage] = useState('');
  const [Projects, setProjects] = useState([
    { images:["/src/assets/HoloRoomHome.png","/src/assets/HoloRoom.png","/src/assets/HoloRoomDashBoard.png","/src/assets/HoloRoomAR.jpg"] , 
      name: "HoloRoom", 
      description: "HoloRoom is a collaborative furniture and décor shopping platform developed by Abderahim Ferdi, Guermache Ayoub, and Benabderrahmane Anis. It combines e-commerce with an interactive AR experience, allowing users to place virtual furniture and decorations in their own space before making a purchase. The platform also includes an AI assistant that supports both text and voice conversations, with voice interaction available directly in AR mode for a more immersive experience.", 
      registrationdisabled: true,
      demoLink: "https://holoroom-front.vercel.app",
      Technologies: ["React", "Three.js", "WebXr", "SpringBoot", "MYSQL"],
      RepoLink: "https://github.com/abdouiscoding/HoloRoom" },
    { images: ["./assets/Project2.png"], 
      name: "Project 2", 
      description: "Description of Project 2", 
      demoLink: "https://holoroom-front.vercel.app",
      registrationdisabled: false,
      Technologies: ["React", "Three.js", "WebXr", "SpringBoot", "MYSQL"],
      RepoLink: "https://github.com/username/project2" },
  ]);
  console.log(pfp);
  const [mode, setMode] = useState("dark");

  function switchMode() {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      setMode("light");
    } else {
      document.body.classList.remove("dark-mode");
      setMode("dark");
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
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <div onClick={switchMode}>
          <Sun />
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
          <h1>Hi, I'm Abderrahim Ferdi a Sofware engineer</h1>
          <h3>I’m a Software Engineer with a passion for developing modern web applications. I enjoy solving problems, writing clean code, and creating responsive, user-friendly experiences while continuously expanding my skills through personal projects.</h3>
        </div>
      </div>  
    </div>
    <div id="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {Projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="Images">
              {project.images.map((img, imgIndex) => (
                <img onClick={()=>{zoomimage(img)}} key={imgIndex} src={img} alt={`${project.name}`} />
              ))}
            </div>
            <div className="project-info">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="demo">
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
                <div class key={techindex}>{tech}</div>
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
