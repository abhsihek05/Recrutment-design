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
                <Carousel>
                    <Carousel.Item>
                        <div className="parent-bank    container d-flex justify-content-md-around">
                            <div className-="child-bank-div">
                                <img src="./hdfc.png" alt="" />
                                <span>hdfc bacnk</span>
                            </div>
                            <div className-="child-bank-div" >
                                <img src="./icic.png" alt="" />
                                <span>hdfc bacnk</span>
                            </div>
                            <div className-="child-bank-div" >
                                <img src="./urlbank.png" alt="" />
                                <span>hdfc bacnk</span>
                            </div>
                            <div className-="child-bank-div" >
                                <img src="./union.png" alt="" />
                                <span>hdfc bacnk</span>
                            </div>
                        </div>
                        </Carousel.Item>
                    </Carousel>
            </>
        )
    }
}