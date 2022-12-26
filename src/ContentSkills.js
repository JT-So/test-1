import { useState } from "react";
import "./ContentSkills.css"
function ContentSkills() {
  const [hardIsActive, setHard] = useState(true)
  const [softIsActive, setSoft] = useState(false)
  const [languageIsActive, setLanguage] = useState(false)

  const [hardMenuIsActive, setHardMenu] = useState(true)
  const [softMenuIsActive, setSoftMenu] = useState(false)
  const [languageMenuIsActive, setLanguageMenu] = useState(false)

  const handleHard = () => {
    setHard(true)
    setSoft(false)
    setLanguage(false)
    setHardMenu(true)
    setSoftMenu(false)
    setLanguageMenu(false)
  }
  const handleSoft = () => {
    setSoft(true)
    setHard(false)
    setLanguage(false)
    setHardMenu(false)
    setSoftMenu(true)
    setLanguageMenu(false)
  }
  const handleLanguage = () => {
    setLanguage(true)
    setHard(false)
    setSoft(false)
    setHardMenu(false)
    setSoftMenu(false)
    setLanguageMenu(true)
  }

  return (
    <div className="skillsContainer">
      <h2 className="skillsTitle">SKILLS</h2>
      <ul className="skillsMenu">
        <li className={`skillsMenuItem ${hardMenuIsActive ? "skillsMenuItem-active" : ""}`} onClick={handleHard}>Hard</li>
        <li className={`skillsMenuItem ${softMenuIsActive ? "skillsMenuItem-active" : ""}`} onClick={handleSoft}>Soft</li>
        <li className={`skillsMenuItem ${languageMenuIsActive ? "skillsMenuItem-active" : ""}`} onClick={handleLanguage}>Language</li>
      </ul>
      <div className="skillSection">
        <div className={`hardSkillsContainer ${hardIsActive ? "hardSkillsContainer-active" : "hardSkillsContainer-out"}`}>
          <ul className="hardSkillsList">
            <li className="hardSkillsItem">
              <img src="javascriptLogo.png" alt=""/>
              Javascript
            </li>
            <li className="hardSkillsItem">
              <img src="pythonLogo.png" alt=""/>
              Python
            </li>
            <li className="hardSkillsItem">
              <img src="cplusLogo.png" alt=""/>
              C/C++
            </li>
            <li className="hardSkillsItem">
              <img src="htmlLogo.png" alt=""/>
              HTML
            </li>
            <li className="hardSkillsItem">
              <img src="cssLogo.png" alt=""/>
              CSS
            </li>
            <li className="hardSkillsItem">
              <img src="restLogo.png" alt=""/>
              REST
            </li>
            <li className="hardSkillsItem">
              <img src="logo192.png" alt=""/>
              React js
            </li>
            <li className="hardSkillsItem">
              <img src="kotlinLogo.png" alt=""/>
              Kotlin
            </li>
            <li className="hardSkillsItem">
              <img src="logo192.png" alt=""/>
              React Native
            </li>
            <li className="hardSkillsItem">
              <img src="javaLogo.png" alt=""/>
              Java
            </li>
          </ul>
        </div>
        <div className={`softSkillsContainer ${softIsActive ? "softSkillsContainer-active" : "softSkillsContainer-out"}`}>
          <ul className="softSkillsList">
            <li className="softSkillsItem">Mabait</li>
            <li className="softSkillsItem">Napakasipag</li>
            <li className="softSkillsItem">Galing makipagusap</li>
            <li className="softSkillsItem">Grabe talaga</li>
            <li className="softSkillsItem">Sheesh</li>
            <li className="softSkillsItem">Woah</li>
            <li className="softSkillsItem">Legendary</li>
          </ul>
        </div>
        <div className={`languageSkillsContainer ${languageIsActive ? "languageSkillsContainer-active" : "languageSkillsContainer-out"}`}>
          <ul className="languageSkillsList">
            <li className="languageSkillsItem">Filipino</li>
            <li className="languageSkillsItem">Japanese</li>
            <li className="languageSkillsItem">English</li>
            <li className="languageSkillsItem">Korean</li>
            <li className="languageSkillsItem">Russian</li>
            <li className="languageSkillsItem">Hebrew</li>
            <li className="languageSkillsItem">Hieroglyphic</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
  
export default ContentSkills;