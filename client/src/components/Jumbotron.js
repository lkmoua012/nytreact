import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">New York Times Search and Save</h1>
        <p className="lead">Search and save for articles of interest.</p>
        <hr className="my-2" />
        <p>Powered by React</p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;