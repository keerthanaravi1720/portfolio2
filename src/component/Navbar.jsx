




import { Link } from 'react-scroll';
import './nav.css'; 

// function Navbar() {
//   return (
//     <div className='Navbar'>
//       <nav>
//         <div className='full-name'>
//         {/* ​🇰​​🇪​​🇪​​🇷​​🇹​​🇭​​🇦​​🇳​​🇦​ ​🇷​​🇦​​🇻​​🇮​ */}
//        {/* Keerthana ravi */}
//         K E E R T H A N A_R A V I
//         ​</div>
//         <ul>
import { useState } from 'react'; // Import useState

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Add state for the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='Navbar'>
      <nav>
        <div className='full-name'>
          K E E R T H A N A_R A V I
        </div>
        <span className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger menu icon */}
        </span>
        <ul className={menuOpen ? 'active' : ''}>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
       ᴀ ʙ ᴏ ᴜ ᴛ
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
        ​🇷​​🇪​​🇸​​🇺​​🇲​​🇪​
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
             ​🇵​​🇷​​🇴​​🇯​​🇪​​🇨​​🇹​​🇸​
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
             ᴄᴏɴᴛᴀᴄᴛꜱ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
