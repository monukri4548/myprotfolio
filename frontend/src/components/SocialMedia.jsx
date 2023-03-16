import React from 'react';
import {BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/monukri4548">
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/monu-kumari/">
      <div>
        <FaLinkedin />
      </div>
    </a>
    <a href="#">
      <div>
        <BsInstagram/>
      </div>
    </a>
  </div>
);

export default SocialMedia;
