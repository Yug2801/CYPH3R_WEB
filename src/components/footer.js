import React from "react";
import '../css/footer.css'

import { FaDiscord } from "react-icons/fa6";

import { FaInstagram } from 'react-icons/fa6';

import { FaLinkedinIn } from 'react-icons/fa6';
import { FaLinux } from 'react-icons/fa6';

function Foote(){
  return (
    <div className="footer">
    <div className="footer-left"></div>
    <div className="footer-text">
     <p > Copyright © 2023 CYPH3R <FaLinux/> Designed by Yug Modi </p>
     
     </div>
     <div className="footer-link">
      <a href="https://discord.com/invite/Qzx9caed64" target="blank"><FaDiscord/></a>
      <a href="https://www.instagram.com/cyph3r.iiitkota?igsh=cDxajQ0bzNubzMx" target="blank"> <FaInstagram/></a>
      <FaLinkedinIn/>
     </div>
    </div>
  );
};

export default Foote;
