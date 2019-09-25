
import React from "react";
import logo from '../images/CC_logo.jpg';
import '../css/style.css';
import DropDownNav from "./DropDownNav";


export const Header = () => {
  return (
      <div className='connect-style'>
      <img src={logo} alt="burger icon" />
      <DropDownNav/>

</div>
  );
};
export default Header;