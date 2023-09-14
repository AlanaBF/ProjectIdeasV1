import "../../assets/styles/styles.css";
import approvalsImage from "../../assets/Images/ApprovalsPage.png";
function Approvals() {
  return (
    <div className="approvalsBackground">
      <div>
        <a href="/">Back to Login</a>
      </div>
      <img className="approvals-image" src={approvalsImage}></img>
    </div>
  );
}

export default Approvals;
