import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class SearchCard extends React.Component {

    state = {
        searchTerm: "Obama",
        startYear: "2010",
        endYear: "2010",
        articles: []
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Hello");
        // Use this.state and pass them through an API call, return articles into an array.
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <Container>
                <h2>Search</h2>
                <p>You are searching for {this.state.searchTerm} from {this.state.startYear} to {this.state.endYear}</p>
                <Form>
                    <FormGroup>
                        <Label for="exampleTopic">Topic</Label>
                        <Input
                            value={this.state.searchTerm}
                            onChange={this.handleInputChange}
                            type="search"
                            name="searchTerm"
                            id="exampleTopic"
                            placeholder="Enter your topic of interest" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleStart">Start Year</Label>
                        <Input
                            value={this.state.startYear}
                            onChange={this.handleInputChange}
                            type="select"
                            name="startYear"
                            id="exampleStart"
                        >
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEnd">End Year</Label>
                        <Input
                            value={this.state.startYear}
                            onChange={this.handleInputChange}
                            type="select"
                            name="endYear"
                            id="exampleEnd"
                        >
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                        </Input>
                    </FormGroup>
                </Form>
                <Button
                    onClick={this.handleFormSubmit}
                    color="primary"
                    size="lg">Submit</Button>
            </Container>
        );
    }
}