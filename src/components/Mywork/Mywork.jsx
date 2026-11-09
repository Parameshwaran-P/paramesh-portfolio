import { React, useState } from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import project1_img from "../../assets/pro-1.png";
import project2_img from "../../assets/pro-2.png";
import project3_img from "../../assets/pro-3.png";
import project4_img from "../../assets/pro-4.png";
import project5_img from "../../assets/pro-5.png";
import project6_img from "../../assets/pro-6.png";
import project7_img from "../../assets/pro-7.png";
import project8_img from "../../assets/pro-8.jpg";
import project9_img from "../../assets/pro-9.png";

const Mywork = () => {
  const [activeIndex, setActiveIndex] = useState(null);

 const config = [
  {
    w_no: '01',
    w_name: "Sagunthala Dance Jewellery",
    w_img: project1_img,
    description:
      "A professional business website for Sagunthala Dance Jewellery, designed to showcase traditional dance jewellery collections with an engaging, responsive, and user-friendly browsing experience.",
    link: "https://www.sagunthaladancejewellery.com/",
  },
  {
    w_no: '02',
    w_name: "FD Marketplace – Investment Platform",
    w_img: project2_img,
    description:
      "A modern fixed deposit investment platform featuring FD discovery, bank and interest rate comparisons, goal-based investment planning, and a streamlined booking experience. Built with Next.js, React, TypeScript, and Tailwind CSS.",
    link: "https://fd-frontend-eta.vercel.app/",
  },
  {
    w_no: '03',
    w_name: "ReactGym – Fitness Website",
    w_img: project3_img,
    description:
      "A responsive fitness-focused web application designed with a clean interface, intuitive navigation, and an engaging user experience across desktop and mobile devices.",
    link: "https://social-media-using-mern-fullstack-and.onrender.com/",
  },
  {
    w_no: '04',
    w_name: "PSH Premium Image Resize Editor",
    w_img: project4_img,
    description:
      "A reusable JavaScript/npm package designed to simplify image resizing and editing workflows, with a focus on developer-friendly integration, flexibility, and efficient image handling.",
    link: "https://github.com/Parameshwaran-P",
  },
  {
    w_no: '05',
    w_name: "SocialConnect – MERN Social Media App",
    w_img: project5_img,
    description:
      "A full-stack social media application inspired by Twitter, developed using MongoDB, Express.js, React, and Node.js. Demonstrates MERN stack development and integration between frontend interfaces and backend services.",
    link: "https://social-media-using-mern-fullstack-and.onrender.com/",
  },
  {
    w_no: '06',
    w_name: "Responsive Blog Platform",
    w_img: project6_img,
    description:
      "A modern blogging website developed with React.js and Tailwind CSS, featuring responsive layouts and a clean, content-focused interface for an accessible reading experience.",
    link: "https://github.com/Parameshwaran-P",
  },
  {
    w_no: '07',
    w_name: "Personal Developer Portfolio",
    w_img: project7_img,
    description:
      "A responsive personal portfolio developed using React.js and Tailwind CSS to showcase technical expertise, professional experience, featured projects, and freelance development services.",
    link: "https://github.com/Parameshwaran-P",
  },
  {
    w_no: '08',
    w_name: "Job Finder – Recruitment Platform",
    w_img: project8_img,
    description:
      "A full-stack recruitment web application connecting job seekers and recruiters through a centralized platform. Developed using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
    link: "https://github.com/Parameshwaran-P",
  },
  {
    w_no: '09',
    w_name: "Real Estate – Property Platform",
    w_img: project9_img,
    description:
      "A full-stack real estate web application for exploring, listing, and managing property information. Built with React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
    link: "https://github.com/Parameshwaran-P",
  },
];
  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {config.map((project, index) => (
          <div
            key={index}
            className={`mywork-item ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleItemClick(index)}
          >
            <img src={project.w_img} alt={project.w_name} />
            <div
              className={`myworkContent ${
                activeIndex === index ? "visible" : ""
              }`}
            >
              <h2>{project.w_no}</h2>
              <h1>{project.w_name}</h1>
              <p>{project.description}</p>
              <button class="button"><a className="button-a" href={project.link}>Live</a></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mywork;
