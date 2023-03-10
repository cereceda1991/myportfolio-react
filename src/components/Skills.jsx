import React, { useEffect } from "react";
import AOS from "aos";
// RESOURCES
import JavaScript from "../assets/javascript.png";
import Bootstrap from "../assets/bootstrap.png"
import Tailwind from "../assets/tailwind.png";
import ReactImg from "../assets/react.png";
import Redux from '../assets/redux.png'
import HTML from "../assets/html.png";
import Vite from "../assets/vite.png";
import CSS from "../assets/css.png";
// CSS
import "aos/dist/aos.css";
import './styles/Skills.css'

const skillsData = [
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "JavaScript", icon: JavaScript },
  { name: "React Js", icon: ReactImg },
  { name: "Vite Js", icon: Vite },
  { name: "Tailwind", icon: Tailwind },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "Redux", icon: Redux }

];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div name="skills" className="container__skills" >
      <h1>Skill's</h1>
      <div className="skill__info" >
        {skillsData.map((skill) => (
          <div className="card__skill" key={skill.name}>
            <p>{skill.name}</p>
            <img data-aos="fade-up" src={skill.icon} alt={`${skill.name} icon`} />
          </div>
        ))}
      </div>
    </div >
  );
};

export default Skills;
