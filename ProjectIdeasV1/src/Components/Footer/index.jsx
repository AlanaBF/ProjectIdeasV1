import "../../assets/styles/styles.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-row">
          <a href="/">
          <div className="footer-logo-text">
        <img src="https://www.version1.com/wp-content/themes/v1/assets/icons/logo-light.svg"></img>
      </div>
          </a>
          <div className="footer-row-social">
            <h6>Follow: </h6> 
            <ul className="menu-social"> 
              <li>
                <a href="https://www.twitter.com/version1">
                <i className="fa-brands fa-twitter"> </i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/version-1">
                <i className="fa-brands fa-linkedin"> </i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/Version1Group">
                <i className="fa-brands fa-youtube"> </i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Version1Group">
                <i className="fa-brands fa-square-facebook"> </i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/version1group/">
                <i className="fa-brands fa-instagram"> </i>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@version1group">
                <i className="fa-brands fa-tiktok"> </i>
                </a>
              </li>
            </ul>{" "}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;