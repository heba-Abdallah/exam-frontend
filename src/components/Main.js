import React, { Component } from 'react';
import axios from 'axios';
import Hdigimons from './Hdigimons';
import CardColumns from 'react-bootstrap/CardColumns';
import { Card, Button } from 'react-bootstrap/';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverLink: process.env.REACT_APP_SERVER,
            showDigimons: false,
            digimons: []

        }
    }

    componentDidMount = async () => {
        const digimons = await axios.get(`${this.state.serverLink}/digimon`);
        console.log(digimons.data);

        this.setState({
            showDigimons: true,
            digimons: digimons.data,
        })

    }

    addToFavFun = async (digimonsData) => {
        await axios.post(`${this.state.serverLink}/addToFav`,digimonsData)
    }


    render() {
        return (
            <div>
                <h2>Home Page</h2>

                {this.state.showDigimons &&
                    this.state.digimons.map((digimons, idx) => {
                        return (
                            <Hdigimons
                                digimons={digimons}
                                key={idx}
                                addToFav={this.addToFavFun}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Main;
