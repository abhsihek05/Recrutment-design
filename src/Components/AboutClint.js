import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import '../AllCss/AboutClint.css';
import { Fname } from '../App';

export default class AboutClint extends React.Component {
    constructor(props) {
        super(props);
        this.state = { champId: this.props.match.params.id, DataID: {} }
        

    }
    render() {
        const Aboutd = this.state.DataID;
     
        return (
            <>
                <>
                    <div className="about-parent-div">
                        <Card border="primary" style={{ width: '80%',backgroundColor:"lightgrey" }}>
                            <Card.Header># {Aboutd.postId}</Card.Header>
                            <Card.Body>
                                <b className="text-danger">Name : </b >
                                <Card.Header> {Aboutd.name}</Card.Header>
                                <b className="text-danger">Email : </b >
                                <Card.Header> {Aboutd.email}</Card.Header>
                                <b className="text-danger">About : </b >
                                <Card.Header> {Aboutd.body}</Card.Header>
                            </Card.Body>
                        </Card>
                        <h1></h1>
                    </div>

                </>
            </>
        )
    }

    componentDidMount() {
        const url = `http://localhost:3002/commetns/${this.state.champId}`;
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                this.setState({ DataID: result })
            });


    }

}