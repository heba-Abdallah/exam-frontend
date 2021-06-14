import axios from 'axios';
import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import { Card, Button } from 'react-bootstrap/';

class FavoriteDigimons extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            serverLink:process.env.REACT_APP_SERVER,
            showFavDig:false,
        
        })
    }

    componentDidMount=async ()=>{
        const digimons=await axios.get(`${this.state.serverLink}/getFavDigimons`)

        this.setState({
            digimons:digimons.data,
            showFavDig:true
        })
    }

    

    render() {
        return (
            <div>
                <h2>hi</h2>
                <CardColumns>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.digimons.img} />
                    <Card.Body>
                        <Card.Title>{this.props.digimons.name}</Card.Title>
                        <Card.Text>
                            {this.props.digimons.level}
                        </Card.Text>
                        <Button variant="primary" onClick={this.deletDigimons}>Delet</Button>
                        <Button variant="primary" onClick={this.updateDigimons}>Update</Button>

                    </Card.Body>
                </Card>
            </CardColumns>
            </div>
        )
    }
}

export default FavoriteDigimons;
