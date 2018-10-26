import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SearchCard extends React.Component {
    render() {
        return (
            <Container>
                <h2>Search</h2>
                <Form>
                    <FormGroup>
                        <Label for="exampleTopic">Topic</Label>
                        <Input type="topic" name="topic" id="exampleTopic" placeholder="Enter your topic of interest" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleStart">Start Year</Label>
                        <Input type="start" name="start" id="exampleStart">
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                            <option>2018</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEnd">End Year</Label>
                        <Input type="end" name="end" id="exampleEnd">
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                            <option>2018</option>
                        </Input>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}