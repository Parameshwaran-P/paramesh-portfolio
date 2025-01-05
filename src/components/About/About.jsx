import React from 'react'
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/hero.png"

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
        <h1>About</h1>
        <img src={theme_pattern} alt="" />
        </div>
        <div className='about-sections'>
            <div className='about-left'>
            <img src={profile_img} alt=""/>
            </div>
            <div className='about-right'>
             <div className='about-para'>
                <p>I am a passionate MERN stack developer focused on dynamic, responsive web applications. Expertise in MongoDB, MySQL, Express.js, React, and Node.js allows me to deliver user-focused, efficient, scalable web solutions.</p>
                <p>As a MERN stack developer, I specialize in creating dynamic web applications. With skills in MongoDB, MySQL, Express.js, React, and Node.js, I deliver innovative, scalable, and responsive solutions tailored to your needs.</p>
             </div>
             <div className='about-skills'>
                <div className="about_skill">
                    <p>HTML & CSS</p>
                    <hr style={{width:"70%"}}/>
                    70%
                </div>
                <div className="about_skill">
                    <p>Javascript</p>
                    <hr style={{width:"80%"}}/>
                    80%
                </div>
                <div className="about_skill">
                    <p>React JS</p>
                    <hr style={{width:"90%"}}/>
                    90%
                </div>
                <div className="about_skill">
                    <p>Next JS</p>
                    <hr style={{width:"90%"}}/>
                    90%
                </div>
                <div className="about_skill">
                    <p>Node JS</p>
                    <hr style={{width:"95%"}}/>
                    95%
                </div>
                <div className="about_skill">
                    <p>Express JS</p>
                    <hr style={{width:"90%"}}/>
                    90%
                </div>
                <div className="about_skill">
                    <p>Mongo DB</p>
                    <hr style={{width:"80%"}}/>
                    80%
                </div>
                <div className="about_skill">
                    <p>MySQL</p>
                    <hr style={{width:"85%"}}/>
                    85%
                </div>
             </div>
             <div className="about-achivements">
                <div className="about-achivement">
                    <h1>1+</h1>
                    <p>YEAR OF EXPRIENCE</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>15+</h1>
                    <p>PROJECTS</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default About