import React from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const apiURL = "https://api.nytimes.com/svc/";
let specialtyURL = "search/v2/articlesearch.json?fq=";

export default class SearchCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "Trump",
            startYear: "20100101",
            endYear: "20101231",
            apiKey: "5c4b21e061b04f539a374a1b43ad7834",
            articles: [],
            searchType: "articles"
        };
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // DEBUG
        // console.log("Hello World");
        // Use this.state and pass them through an API call, return articles into an array.
        this.getArticle();
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getArticle = () => {
        axios
            .get(
                apiURL +
                specialtyURL +
                this.state.searchTerm +
                "&begin_date=" +
                this.state.startYear +
                "&end_date=" +
                this.state.endYear +
                "&api-key=" +
                this.state.apiKey
            )
            .then(response => {
                var results;
                console.log('response', response);
                if (this.state.searchType === "articles") {
                    results = response.data.response.docs;
                    if (response.data.response.docs.length === 0) {
                        results = [
                            { headline: { main: "No Results" }, byline: { original: "" } }
                        ];
                    }
                    this.setState({ articles: results });
                    console.log(results);
                }
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
                            <option value="20100101">2010</option>
                            <option value="20110101">2011</option>
                            <option value="20120101">2012</option>
                            <option value="20130101">2013</option>
                            <option value="20140101">2014</option>
                            <option value="20150101">2015</option>
                            <option value="20160101">2016</option>
                            <option value="20170101">2017</option>
                            <option value="20180101">2018</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEnd">End Year</Label>
                        <Input
                            value={this.state.endYear}
                            onChange={this.handleInputChange}
                            type="select"
                            name="endYear"
                            id="exampleEnd"
                        >
                            <option value="20101231">2010</option>
                            <option value="20111231">2011</option>
                            <option value="20121231">2012</option>
                            <option value="20131231">2013</option>
                            <option value="20141231">2014</option>
                            <option value="20151231">2015</option>
                            <option value="20161231">2016</option>
                            <option value="20171231">2017</option>
                            <option value="20181231">2018</option>
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