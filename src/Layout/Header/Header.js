import {useState} from 'react';
import {StyledHeader, StyledNav} from './StyledHeader';
import Image from '../../Components/Image/Image';
import Data from '../../Data/data.json';

const {logo,menu_entries, menu_img_standard, menu_img_close} = Data.header;

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <StyledHeader>
        <h1><Image src={process.env.PUBLIC_URL + logo.src} alt={logo.alt}/></h1>
        <StyledNav className={isMenuVisible ? "show-menu" : ""}>
          <ul>
            {isMenuVisible && <button className="closing-btn" onClick={() => setIsMenuVisible(false)}><Image src={process.env.PUBLIC_URL + menu_img_close.src} alt={menu_img_close.alt}/></button>}
            {menu_entries.map((entry, index)=> <li key={index}><a href="#">{entry}</a></li>)}
          </ul>
        </StyledNav>
        <button className="hamburger-btn" onClick={() => setIsMenuVisible(true)}><Image src={process.env.PUBLIC_URL + menu_img_standard.src} alt={menu_img_standard.alt}/></button>
    </StyledHeader>
  );
}

export default Header;
