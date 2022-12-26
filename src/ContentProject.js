import { Link } from "react-router-dom";
import "./ContentProject.css"
function ContentProject() {

  return (
    <div className="contentProjectContainer">
      <h2 className="contentProjectTitle">PROJECTS</h2>
      <div className="projectSection">
        <div className="projectItemContainer">
          <div className="projectItem">
            <img src="logo192.png" alt=""/>
          </div>
          <a href="https://www.facebook.com/GalorsRomel123" target="_blank" className="projectItemTitle">Project Number One</a>
          <p className="projectItemDescription">
            Rinse the affected eye thoroughly with water for 15 - 20 minutes.
          </p>
        </div>
        <div className="projectItemContainer">
          <div className="projectItem">
            <img src="logo192.png" alt=""/>
          </div>
          <a href="https://www.facebook.com/RynRsslFctr.14" target="_blank" className="projectItemTitle">Project Number One</a>
          <p className="projectItemDescription">
            Rinse the affected eye thoroughly with water for 15 - 20 minutes.
          </p>
        </div>
        <div className="projectItemContainer">
          <div className="projectItem">
            <img src="logo192.png" alt=""/>
          </div>
          <a href="https://www.facebook.com/deehsar.ajelanac" target="_blank" className="projectItemTitle">Project Number One</a>
          <p className="projectItemDescription">
            Rinse the affected eye thoroughly with water for 15 - 20 minutes.
          </p>
        </div>
        <div className="projectItemContainer">
          <div className="projectItem">
            <img src="logo192.png" alt=""/>
          </div>
          <a href="https://www.facebook.com/rdcopino" target="_blank" className="projectItemTitle">Project Number One</a>
          <p className="projectItemDescription">
            Rinse the affected eye thoroughly with water for 15 - 20 minutes.
          </p>
        </div>
        <div className="projectItemContainer">
          <div className="projectItem">
            <img src="logo192.png" alt=""/>
          </div>
          <a href="https://www.facebook.com/twenty00.saul" target="_blank" className="projectItemTitle">Project Number One</a>
          <p className="projectItemDescription">
            Rinse the affected eye thoroughly with water for 15 - 20 minutes.
          </p>
        </div>
      </div>
    </div>
  );
  }
  
  export default ContentProject;