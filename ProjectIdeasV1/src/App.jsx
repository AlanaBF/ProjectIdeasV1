import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Approvals from "./Pages/Approvals";
import "./App.css"
import "./assets/styles/styles.css"

const App = () => {
  return (
    <Router>
    
      <Header />
  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Approvals" element={<Approvals />} />     
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
