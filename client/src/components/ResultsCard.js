import React from 'react';
import { Container} from 'reactstrap';

export default class ResultsCard extends React.Component {
    render() {
        return (
            <Container>
                <h2>Results</h2>
            </Container>
        );
    }
}

// Have results card import stuff from SearchCard and return the array of articles.