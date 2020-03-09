import React from 'react';

import {
  FooterStyle
} from './style'

function Footer(props) {
  return (
    <FooterStyle>
      <div className="container">
        <div className="align-items-md-center">
          <div className="flex-md-column">
            <div className="footer-copyright">
            Copyright © 2019 Angelive
          · Powered By Vue · Theme By Angel
            </div>
          </div>
        </div>
        <div className="footer-links">
          <span>鄂ICP备19006922号-1</span>
        </div>
      </div>
    </FooterStyle>
  );
}

export default React.memo(Footer);