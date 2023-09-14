import "../../assets/styles/styles.css";
import LoginForm from "../../Components/Login";

const AuditTrail = () => {
  return (
    <div className="pageBackground">
    <div>
        <video
          className="video"
          src="https://www.version1.com/wp-content/uploads/2019/12/version1-innovation-hero-bg.mp4"
          poster="https://www.version1.com/wp-content/uploads/2019/12/version1-innovation-hero-bg.jpg"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <h1 className="title">Version 1 Approvals</h1>
      <div className="loginContainer">
        <h3 className="sub-title">User Login</h3>
        <div>
          <LoginForm />
        </div>
      </div>
      
    </div>
  );
};

export default AuditTrail;
