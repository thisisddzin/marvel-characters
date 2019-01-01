import React from 'react';

import { FooterStyle } from './style';

const Footer = () => (
  <FooterStyle>
    <details>
      <summary>Credits. By: adenilson-santos</summary>
      <a href="https://www.adenilson-santos.github.io" target="_blank" rel="noopener noreferrer">
        Developed by Adenilson Santos
      </a>
      <p>
        Data from
        {' '}
        <a href="https://developer.marvel.com/" target="_blank" rel="noopener noreferrer">
          Marvel Developer
        </a>
      </p>
    </details>
  </FooterStyle>
);

export default Footer;
