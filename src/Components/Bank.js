import React from "react";
import { Carousel } from "react-bootstrap";
import '../AllCss/bank.css';

export default class Bank extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <h1 className="text-center text-capitalize p-3 text-secondary">banking sector </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 bg-dark col-sm-12">
                           
                            <img src="./statebank.png" className="w-100" />
                        </div>
                        <div className="col-md-3 bg-danger col-sm-12">
                       
                        <img src="./statebank.png" className="w-100" />
                        </div>
                        <div className="col-md-3 bg-light col-sm-12">
                       
                        <img src="./Yes_bank_logo.png" className="w-100"/>
                        </div>
                        <div className="col-md-3 bg-primary col-sm-12">
                       
                        <img src="./statebank.png" className="w-100" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}