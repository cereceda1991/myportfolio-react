import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import CV from "../assets/CVMaxCereceda.pdf";
import { Link } from "react-scroll";
import './styles/Navbar.css'
import playSound from "../utils/playSound";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [activeLink, setActiveLink] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    // setIsOpen(!isOpen);
  };

  const handleNavbarClick = () => {
    setActiveLink(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
        setActiveLink(); // llamamos a setActiveLink("home") solo si la pantalla es menor que 768px
      } else {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="container__navbar" onClick={handleNavbarClick}>
      <h1 className="navbar__title" >
        <Link to="home" smooth={true} duration={1000}>
          M <sub>C</sub>
        </Link>
      </h1>
      <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ?
          <>
            <FaTimes className="sandwich__button" />
            <nav className='menu__navbar '>
              <ul>
                <li onMouseEnter={playSound} onMouseLeave={() => { }}>
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className={activeLink === "home" ? "active" : ""}
                    onClick={() => {
                      handleLinkClick("home")
                      setActiveLink("home")
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li onMouseEnter={playSound} onMouseLeave={() => { }}>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className={activeLink === "about" ? "active" : ""}
                    onClick={() => {
                      setActiveLink("about")
                      handleLinkClick("about")
                    }}
                  >
                    About Me
                  </Link>
                </li>
                <li onMouseEnter={playSound} onMouseLeave={() => { }}>
                  <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className={activeLink === "skills" ? "active" : ""}
                    onClick={() => {
                      setActiveLink("skills")
                      handleLinkClick("skills")
                    }}
                  >
                    Skill's
                  </Link>
                </li>
                <li onMouseEnter={playSound} onMouseLeave={() => { }}>
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className={activeLink === "projects" ? "active" : ""}
                    onClick={() => {
                      setActiveLink("projects")
                      handleLinkClick("projects")
                    }}
                  >
                    Projects
                  </Link>
                </li>
                <li onMouseEnter={playSound} onMouseLeave={() => { }}>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className={activeLink === "contact" ? "active" : ""}
                    onClick={() => {
                      setActiveLink("contact")
                      handleLinkClick("contact")
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

          </> :
          <>
            <FaBars className="close__button" />
          </>}

      </button>

      <div className="container__social-icons">
        <ul>
          <li className="li__linkedin" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <a target="__blank" href="https://www.linkedin.com/in/maxcereceda/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="li__github" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <a target="__blank" href="https://github.com/cereceda1991">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="li__email" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <a target="__blank" href="mailto:cereceda1991@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="li__cv" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <a target="__blank" href={CV}>
              My CV  <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div >
  );
};
export default Navbar


