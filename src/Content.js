import "./Content.css"
function Content() {

  return (
    <div className="contentContainer">
      <div className="profilePictureContainer">
        <div className="profilePicture">
          <img src="profilePic.jpg" alt=""/>
        </div>
      </div>
      <div className="aboutMeContainer">
        <h3 className="aboutMeTitle">ABOUT ME</h3>
        <div className="aboutMeParagraph">
          <p>Keep away from heat, hot surfaces, sparks, open flames and other ignition sources.
            <strong> No smoking.</strong> Keep container tightly closed. Wash hands thoroughly after handling.
            If eye irritation persists get medical advice/attention. Store in a well-ventilated place.
            <strong> <u>Keep cool</u></strong>. Keep out of reach of children.
          </p>
        </div>
      </div>
    </div>
  );
}
  
export default Content;