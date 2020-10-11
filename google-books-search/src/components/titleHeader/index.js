import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const TitleHeader = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <Jumbotron className="container-fluid  m-5 clearfix" style={{ padding: '.5rem' }}>
        <h1 className="d-flex justify-content-center display-4">(REACT) Google Books Search</h1>
        <p className="d-flex justify-content-center lead">Search and Save Books of Interest</p>
      </Jumbotron>
    </div>
  );
};

export default TitleHeader;