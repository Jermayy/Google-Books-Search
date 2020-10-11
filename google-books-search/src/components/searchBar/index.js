import React from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SearchBar = () => {
    return (
        <div className="d-flex justify-content-center">
            <Jumbotron className="container-fluid  m-5 clearfix" style={{ padding: '.5rem', backgroundColor: "#F8F9FA" }}>
            <p className="lead">Book Search</p>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Book</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Book Title" />
                    </FormGroup>
                    <Button className="float-right">Search</Button>
                </Form>
            </Jumbotron>
        </div>
    );
};

export default SearchBar;