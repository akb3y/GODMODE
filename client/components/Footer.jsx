import React from 'react';
import { FaRegCopyright } from "react-icons/fa";

function Footer(props) {
return (
  <div className='footer'>
    <br />
    <br />
    <FaRegCopyright /> GODMODE
    Powered by <a href="https://www.boardgameatlas.com/api/docs">Board Game Atlas API</a>
  </div>
  );
}

export default Footer;
