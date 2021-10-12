import React from 'react';
import '../AllCss/Clints.css';
import { Card, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";


export default class Clint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SingleData: []
         }
    }


    

    componentDidMount() {
        //    this.setState({ram:"abhishek"});
        //    console.log(this.state.ram);
        //    console.log("hellow abhi");

        let url = "http://localhost:3002/commetns";
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                this.setState({ SingleData: result });
                console.log("");
            });
    }


    render() {
        const data = this.state.SingleData;
        return (
            <><br />
                <br />
                <div className="parents-clint-div container">
                    {
                        data.map((x,index) => 
                     
                        <div className="card-div" key={index}>
                            <div className="body-card">
                                <h5># {x.postId}</h5>
                                <h6>name :</h6>
                                <p className="card-discription">{x.name}</p>
                                <h6>Email :</h6>
                                <p>{x.email}</p>                             
                                <div className="d-flex justify-content-center"> <button variant="primary"><Link to={`/clint/${x.id}`} className="text-light text-decoration-none">About</Link></button></div>
                            </div>
                        </div>
                        )

                    }

                </div>
            </>
        )
    }
}



