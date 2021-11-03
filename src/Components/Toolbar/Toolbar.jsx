import "./Toolbar.scss";

const Toolbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"toolbar " + (menuOpen ? "active" : "")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            NightGamer01
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
