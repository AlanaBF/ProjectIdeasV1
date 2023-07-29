import "../assets/styles/styles.css";
import LoginForm from "../Components/Login";

const AuditTrail = () => {
    return (
  <div className="pageBackground">
     <h1 className="title">Audit Trail</h1>
      <h3 className="sub-title">User Login</h3>
      <div>
       <LoginForm/>
      </div>
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
        {/* Other content can be added here */}
      </div>
  );
};

export default AuditTrail;
