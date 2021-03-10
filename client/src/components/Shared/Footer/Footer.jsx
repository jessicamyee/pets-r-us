import './Footer.css'

const Footer = () => (
  <footer>
    <div className="hutch-footer">
    <a href="https://github.com/hutchskistoke" rel="noreferrer" target="_blank">
        <img src="https://www.iconsdb.com/icons/preview/white/github-11-xxl.png" alt="github" className="footer-photo-git" />
    </a>
      <p className="member-name">Ashley Hutchinson</p>
    </div>

    <div className="chandler-footer">
    <a href="https://github.com/Chandler-Manly" rel="noreferrer" target="_blank">
        <img src="https://www.iconsdb.com/icons/preview/white/github-11-xxl.png" alt="github" className="footer-photo-git" />
    </a>
      <p className="member-name">Chandler Manly</p>
    </div>

    <div className="shamma-footer">
    <a href="https://github.com/snqureshi" rel="noreferrer" target="_blank">
        <img src="https://www.iconsdb.com/icons/preview/white/github-11-xxl.png" alt="github" className="footer-photo-git" />
    </a>
      <p className="member-name">Shamma Qureshi</p>
    </div>

    <div className="jess-footer">
    <a href="https://github.com/jessicamyee" rel="noreferrer" target="_blank">
        <img src="https://www.iconsdb.com/icons/preview/white/github-11-xxl.png" alt="github" className="footer-photo-git" />
    </a>
      <p className="member-name">Jessica Yee</p>
    </div>

    {/* <a
        target="_blank"
        href="https://github.com/jessicamyee/pets-r-us"
        className="fa fa-github"
      ></a> */}
  </footer>
);

export default Footer;
