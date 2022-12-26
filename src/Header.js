import "./Header.css"

function Header() {

  const headerTitle = "{JEAN||PAILLER}"

  return (
    <div className="headerContainer">
      <h2 className="headerTitle">{headerTitle}</h2>
      <ul className="headerList">
        <li className="headerItem">ABOUT</li>
        <li className="headerItem">
          PROJECTS
          <ul className="dropdownList">
            <li className="dropdownItem">DROPDOWN 1</li>
            <li className="dropdownItem">DROPDOWN 2</li>
            <li className="dropdownItem">DROPDOWN 3</li>
          </ul>
        </li>
        <li className="headerItem">CONTACT</li>
      </ul>
    </div>
    );
  }
  
  export default Header;