import React from 'react';
import { Button, Jumbotron } from 'reactstrap';

const BooksContainer = (props) => {
    return (
        <div className="d-flex justify-content-center">
                <p className="lead">{props.title}</p>
                <Jumbotron>
                    <div class="d-flex justify-content-between">
                        <h4 >{props.bookTitle}</h4>
                        <div class="d-flex justify-content-between">
                            <Button type="button" className="btn btn-secondary" style={{ padding: '.5rem' }}>View</Button>
                            <h6>&nbsp;</h6>
                            <Button type="button" className="btn btn-secondary" style={{ padding: '.5rem' }}>{props.btnType}</Button>
                        </div>
                    </div>
                    <h6>{props.summaryHeader}</h6>
                    <h6>Written by {props.author}</h6>
                    <div className="media">
                        <img
                            src={props.imgSrc}
                            className="mr-5"
                            alt="googleBooksLogo"/>
                        <div class="media-body">
                            <p>{props.summary}</p>
                        </div>
                    </div>
                    <row></row>
                </Jumbotron>
        </div>
    );
};

export default BooksContainer;