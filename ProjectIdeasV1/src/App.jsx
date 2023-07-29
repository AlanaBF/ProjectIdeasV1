import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AuditTrail from "./Pages";
import "./App.css"
import "./assets/styles/styles.css"

const App = () => {
  return (
    <Router>
    
      <Header />
  
      <Routes>
        <Route path="/" element={<AuditTrail />} />
        {/* <Route path="/TeamSelectionPage" element={<TeamSelectionPage />} /> */}     
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
