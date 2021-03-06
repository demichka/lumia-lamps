import React from 'react';
import { withRouter, Link} from "react-router-dom";
import {
  Navbar
} from 'reactstrap';


class NavBar extends React.Component {
  render () {
    return <Navbar className="nav flex-column flex-sm-row">
              <Link className="flex-sm-fill flex-grow-1 text-sm-left nav-link active" to="/"><h1>Lumia</h1></Link>
              <Link className="text-sm-right nav-link" to="/contact-page">Kontakta oss</Link>
            </Navbar>
      
  }
}

export default withRouter(NavBar);
