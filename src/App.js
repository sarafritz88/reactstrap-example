import React, { Component } from 'react';

import {
    Container,
    Row,
    Col,

} from 'reactstrap';

class App extends Component {


    render() {
        return (
            <div>

                <Container>
                    <Row>
                        <Col>.col one column, one row</Col>
                    </Row>
                    <Row>
                        <Col>.col</Col>

                        <Col>.col three cols, one row</Col>
                        <Col>.col</Col>
                    </Row>
                    <Row>
                        <Col xs="3">.col-3 This column will not resize. No Matter how much I put in it, it will wrap</Col>
                        <Col xs="auto">.col-auto - variable width content This will stretch to fit whatever you put in </Col>
                        <Col xs="3">.col-3 I adjusted this colums height by adjusting the height of the row it is in. All of the cols in this row, will match that height</Col>
                    </Row>

                </Container>
            </div>

        );
    }
}




export default App;

