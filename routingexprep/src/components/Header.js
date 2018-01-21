import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
      return (
        <div>
          <ul className="header">
            <h4>Links to navigate for the ugliest website ever</h4>
            <li><Link className="active" to="/images">Images</Link></li>
            <li><Link className="active" to="/article">Article</Link></li>
            <li><Link className="active" to="/about">About</Link></li>
          </ul>
        </div>
      );
    }
  }
  export default Header;