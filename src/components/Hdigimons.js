import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import { Card, Button } from 'react-bootstrap/';

class Hdigimons extends Component {
    render() {
        return (
            <div>

                <CardColumns>
                    <Card style={{ width: '18rem' }} key={this.props.key}>
                        <Card.Img variant="top" src={this.props.digimons.img} />
                        <Card.Body>
                            <Card.Title>{this.props.digimons.name}</Card.Title>
                            <Card.Text>
                                {this.props.digimons.level}
                            </Card.Text>
                            <Button variant="primary" onClick={this.propes.addToFav}>Add To Fav</Button>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </div>
        )
    }
}

export default Hdigimons;
