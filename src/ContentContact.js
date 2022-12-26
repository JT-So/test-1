import "./ContentContact.css"
function ContentContact() {

  return (
    <div className="contentContactContainer">
        <div className="contactDescription">
            <h3>Get in touch!</h3>
            <p>Through email or social media</p>
        </div>
        <div className="contactFormContainer">
            <form className="contactForm">
                <div className="contactNameContainer">
                    <label>Name</label>
                    <input placeholder="Name"/>
                </div>
                <div className="contactPhoneContainer">
                    <label>Contact Number</label>
                    <input placeholder="Contact Number"/>
                </div>
                <div className="contactEmailContainer">
                    <label>Email</label>
                    <input placeholder="Email"/>
                </div>
                <div className="contactMessageContainer">
                    <label>Message</label>
                    <textarea placeholder="Message"/>
                </div>
                <button className="submitButton">Submit</button>
            </form>
        </div>

    </div>
  );
}
  
export default ContentContact;