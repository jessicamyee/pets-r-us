import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className="hutch-footer person-footer">
      <a
        href="https://github.com/hutchskistoke"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="https://i.imgur.com/le1iPlO.png"
          alt="github"
          className="footer-photo-git"
        />
      </a>
      <p className="member-name">Ashley Hutchinson</p>
    </div>

    <div className="chandler-footer person-footer">
      <a
        href="https://github.com/Chandler-Manly"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="https://i.imgur.com/le1iPlO.png"
          alt="github"
          className="footer-photo-git"
        />
      </a>
      <p className="member-name">Chandler Manly</p>
    </div>

    <a href={"/"}>
      <img
        className="logo-footer"
        src="https://i.imgur.com/eTLFAD5.png"
        alt="logo"
      />
    </a>

    <div className="shamma-footer person-footer">
      <a href="https://github.com/snqureshi" rel="noreferrer" target="_blank">
        <img
          src="https://i.imgur.com/le1iPlO.png"
          alt="github"
          className="footer-photo-git"
        />
      </a>
      <p className="member-name">Shamma Qureshi</p>
    </div>

    <div className="jess-footer person-footer">
      <a href="https://github.com/jessicamyee" rel="noreferrer" target="_blank">
        <img
          src="https://i.imgur.com/le1iPlO.png"
          alt="github"
          className="footer-photo-git"
        />
      </a>
      <p className="member-name">Jessica Yee</p>
    </div>
  </footer>
);

export default Footer;
