import React from 'react';
import { BsGithub, BSGithub, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">

    <div>
      <a href="https://www.linkedin.com/in/andrei-petru-lazar-22b246215" target='_blank'>
        <FaLinkedinIn />
      </a>
    </div>

    <div>
      <a href="https://github.com/andreipetrulazar" target='_blank'>
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/andrei.p.lazar" target="_blank">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/andreipetrulazar/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;