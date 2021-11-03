import { useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import Experience from "../Experience/Experience";
import { School } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import { Phone } from "@material-ui/icons";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Skills from "../Skills/Skills";
const Portfolio = () => {
  const [selected, setSelected] = useState("projects");
  const list = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "workExperience",
      title: "Work Experience",
    },
    {
      id: "technicalSkills",
      title: "Technical Skills",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={5}>
        <LinearProgress color="secondary" />
      </Stack>
      <ul>
        {list.map((items) => (
          <PortfolioList
            title={items.title}
            active={selected === items.id}
            setSelected={setSelected}
            id={items.id}
          />
        ))}
      </ul>

      {selected === "projects" && (
        <div className="container">
          <div className="item">
            <a href="https://react-app-project-1.herokuapp.com/">
              <img src="assets\MoibleApp.jpg" alt="MobileFinderApp" />
              <h3>Mobile Discovery Platform</h3>
            </a>
          </div>
          <div className="item">
            <a href="https://narenkumar1234.github.io/Tin-Dog-Website">
              <img src="assets\TinDogProject.jpg" alt="MobileFinderApp" />
              <h3>TinDog - A website for dogs</h3>
            </a>
          </div>
          <div className="item">
            <a href="https://narenkumar1234.github.io/Simon-Game/">
              <img src="assets\SimonGameProject.png" alt="MobileFinderApp" />
              <h3>Simon Game</h3>
            </a>
          </div>
        </div>
      )}
      {selected === "about" && (
        <div className="containerAbout">
          <h4>More About Me!!</h4>

          <div className="width100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#fff"
                fill-opacity="1"
                d="M0,32L1440,96L1440,0L0,0Z"
              ></path>
            </svg>
          </div>

          <p className="hideOnMobile">
            We don't always get what we wish for, but we get what we work for,
            the iconic words of my life. My belief in my own passion never let
            me to settle for less when I know I deserve the best.
          </p>
          <p>
            I'm being a big knowledge seeker and Sophophilic driven my grand
            path towards engineering career, specialized in Information
            Technology as bits and bytes are intimidating the globe!
          </p>
          <p>
            A Full stack Developer, strong academic performer, competitive coder
            (Represented GCT at ICPC regionals) from the graduating batch of
            2023.
          </p>
          <ul>
            <li>
              <School />
              <span> UG</span>
            </li>
            <li>
              <Email />
              <span> narenkumar2001@gmail.com</span>
            </li>
            <li>
              <Phone /> <span> +91 63825 49628</span>
            </li>
          </ul>
        </div>
      )}
      {selected === "workExperience" && <Experience />}

      {selected === "technicalSkills" && (
        <div className="containerSkills">
          <Skills />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
