import React from 'react';
import { Jumbotron } from 'react-bootstrap';


const Header = () => (
  <div>
    <Jumbotron className="Jumbo-header AlignTextCenter">
      <h1> Morpheus </h1>
      <br />
      <h4> A tool for peering into the matrix. </h4>
    </Jumbotron>
  </div>
)

export default Header;
