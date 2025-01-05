import { React, useState } from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import project1_img from "../../assets/pro-1.png";
import project2_img from "../../assets/pro-2.png";
import project3_img from "../../assets/pro-3.png";
import project4_img from "../../assets/pro-4.jpg";
import project5_img from "../../assets/pro-5.png";

const Mywork = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const config = [
    {
      w_no: '01',
      w_name: "Twitter-Clone",
      w_img: project1_img,
      description:
        "Developed a Twitter clone application using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      link: "https://social-media-using-mern-fullstack-and.onrender.com/",
    },
    {
      w_no: '02',
      w_name: "Blog Web",
      w_img: project2_img,
      description:
        "A dynamic and responsive blog website developed using ReactJS and Tailwind CSS.",
      link: "https://github.com/Parameshwaran-P",
    },
    {
      w_no: '03',
      w_name: "My Portfolio",
      w_img: project5_img,
      description:
        "A personal portfolio showcasing skills, projects, and experience, crafted with ReactJS and Tailwind CSS for a sleek and responsive design.",
      link: "https://github.com/Parameshwaran-P",
    },
    {
      w_no: '04',
      w_name: "Job Finder Web",
      w_img: project4_img,
      description:" A platform to connect job seekers and recruiters, built with ReactJS, Node.js, Tailwind CSS, Express.js, and MongoDB",
      link: "https://github.com/Parameshwaran-P",
    },
    {
      w_no: '05',
      w_name: "Real Estate Web",
      w_img: project3_img,
      description:"A dynamic platform for listing, browsing, and managing property details, built with ReactJS, Node.js, Tailwind CSS, Express.js, and MongoDB.",
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
