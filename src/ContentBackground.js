import { useState } from "react";
import "./ContentBackground.css"
function ContentBackground() {
  const [educationIsActive, setEducation] = useState(true)
  const [certificationIsActive, setCertification] = useState(false)


  const [educationMenuIsActive, setEducationMenu] = useState(true)
  const [certificationMenuIsActive, setCertificationMenu] = useState(false)


  const handleEducation = () => {
    setEducation(true)
    setCertification(false)

    setEducationMenu(true)
    setCertificationMenu(false)
  }
  const handleCertification = () => {
    setEducation(false)
    setCertification(true)

    setEducationMenu(false)
    setCertificationMenu(true)
  }


  return (
    <div className="contentBackgroundContainer">
      <h2 className="contentBackgroundTitle">BACKGROUND</h2>
      <ul className="backgroundMenu">
        <li className={`backgroundMenuItem ${educationMenuIsActive ? "backgroundMenuItem-active" : ""}`} onClick={handleEducation}>Education</li>
        <li className={`backgroundMenuItem ${certificationMenuIsActive ? "backgroundMenuItem-active" : ""}`} onClick={handleCertification}>Certification</li>
    
      </ul>
      <div className="backgroundSection">
        <div className={`educationContainer ${educationIsActive ? "educationContainer-active" : "educationContainer-out"}`}>
          <ul className="educationList">
            <li className="educationItem">
              <p>2026 - 2098</p>
              <h4>Technological Philippines</h4>
              <p>Marikina, Australia</p>
            </li>
            <li className="educationItem">
              <p>2026 - 2098</p>
              <h4>Technological Philippines</h4>
              <p>Marikina, Australia</p>
            </li>
          </ul>
        </div>
        <div className={`certificationContainer ${certificationIsActive ? "certificationContainer-active" : "certificationContainer-out"}`}>
          <ul className="certificationList">
            <li className="certificationItem">
              <h4>Dota 2 Complete Professional Guide</h4>
              <p>Diyan lang</p>
            </li>
            <li className="certificationItem">
              <h4>Dota 2 Complete Professional Guide</h4>
              <p>Diyan lang</p>
            </li>
            <li className="certificationItem">
              <h4>Dota 2 Complete Professional Guide</h4>
              <p>Diyan lang</p>
            </li>
            <li className="certificationItem">
              <h4>Dota 2 Complete Professional Guide</h4>
              <p>Diyan lang</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
  
export default ContentBackground;