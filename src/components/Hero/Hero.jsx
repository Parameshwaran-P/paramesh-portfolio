import React from 'react';
import "./Hero.css";
import profile_img from "../../assets/paramesh_img.jpeg";
import linkedIn from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import github from "../../assets/github.png";
import twitter from "../../assets/instagram.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  // const [menu, setMenu] = useState("hero")
  function handleClick(){
    const pdfUrl = "Parameshwaran_s_Profile.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Parameshwaran's_Profile.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'am PARAMESH P<br/></span>Full-stack Developer based in India</h1>
        <p>Welcome to my website! I’m a MERN Full Stack Developer dedicated to creating innovative and user-friendly web applications. Let’s collaborate to bring your ideas to life!</p>
        <div className="hero-action">
    
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink>
            </div>
            <div className='hero-resume' onClick={handleClick}>My Resume</div>
        </div>
        <div className='follow'><h2>Follow More</h2></div>
        <div className="social-media">   
  
    <a href="https://www.linkedin.com/in/parameshwaran-p/" target="_blank" rel="noopener noreferrer">
      <img src={linkedIn} alt="LinkedIn" />
    </a>

 
    <a href="https://youtube.com/@pshfullstack?si=ok88SYgDToTTHd_H" target="_blank" rel="noopener noreferrer">
      <img src={youtube} alt="YouTube" />
    </a>

  
    <a href="https://www.instagram.com/_psh_________75/" target="_blank" rel="noopener noreferrer">
      <img src={twitter} alt="Twitter" />
    </a>
 

    <a href="https://github.com/Parameshwaran-P" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="GitHub" />
    </a>
  
</div>

    </div>
  )
}

export default Hero