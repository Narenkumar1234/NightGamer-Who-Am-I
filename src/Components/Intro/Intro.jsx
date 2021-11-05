import "./Intro.scss";
import { KeyboardArrowDown } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Resume from "./Resume";

const Intro = () => {
  const typeRef = useRef();
  useEffect(() => {
    init(typeRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Full Stack Developer", "Programmer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="myImgContainer">
          <img src="assets\Standing-Casual-removebg-preview.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Narenkumar</h1>
          <h3>
            <span ref={typeRef}></span>
          </h3>
          <a href="https://drive.google.com/file/d/1dDqjySqtQEZNMg53griHzPNS9nNJq5qL/view?usp=sharing">
            <Resume />
          </a>
          <a className="downArrow" href="#portfolio">
            <KeyboardArrowDown fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
