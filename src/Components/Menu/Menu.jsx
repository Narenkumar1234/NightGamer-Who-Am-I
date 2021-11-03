import "./menu.scss";
import { Facebook } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";

const Menu = ({ menuOpen, setMenuOpen }) => {
  console.log(menuOpen);
  return (
    <div className={"menu " + (menuOpen ? "active" : "")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Intro</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonial">Certificates</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="https://github.com/Narenkumar1234">
            <GitHub fontSize="large" />
          </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="https://www.facebook.com/naren.naren.180/">
            <Facebook fontSize="large" />
          </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="https://www.linkedin.com/in/NightGamer01">
            <LinkedIn fontSize="large" />
          </a>
        </li>
      </ul>
      <h1>Copyright © 2021 - Narenkumar</h1>
    </div>
  );
};

export default Menu;
