import React from "react";
import { Link } from "react-router-dom";
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPinterestSquare } from "react-icons/fa";
import '../AllCss/Footer.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="container-fluid bg-secondary">
                    <div className="row">
                        <div className="col-md-6 p-5 desktop">
                            <div className="footer-intro">
                                <h3 className="text-center">About</h3>
                                <img src="" alt="Image" />
                                <p className="about-pare ">This is Recrutment website. Providing Job for job-seeker and  employee for the companies </p>
                            </div>

                        </div>
                        <div className="col-md-3 p-3">
                            <div className="footer-link">
                                <h4 className="text-dark ">Company</h4>
                                <Link className="text-decoration-none link d-block"> Media</Link>
                                <Link className="text-decoration-none link d-block">Job and Careers</Link>
                                <Link className="text-decoration-none link d-block">Fair and Events</Link>
                                <Link className="text-decoration-none link d-block">Sustainability</Link>
                                <Link className="text-decoration-none link d-block">Top Areas</Link>
                                <Link className="text-decoration-none link d-block">Training</Link>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div className="footer-link">
                                <h4 className="">Contact</h4>
                                <Link className="text-decoration-none link d-block"><FaFacebookSquare /> Facebook </Link>
                                <Link className="text-decoration-none link d-block"><FaTwitterSquare /> Twiter </Link>
                                <Link className="text-decoration-none link d-block"><FaInstagramSquare /> Insta </Link>
                                <Link className="text-decoration-none link d-block"><FaLinkedin /> Linkedin</Link>
                                <Link className="text-decoration-none link d-block"><FaPinterestSquare /> Pinkart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}


export class Benifits extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <h2 className="bold text-center p-3 text-secondary">ONGOING BENIFITS OF GENRATION</h2 >
                <div className="benifits-parents container text-center ">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="./react.png" style={{ width: "120px", height: "100px" }} />
                            <h5>A Trust network</h5>
                            <p className="p-3 text-secondary text-capitalize">Contineu and contact with the genration  graduate network </p>
                        </div>
                        <div className="col-md-3">
                            <img src="./jar.png" style={{ width: "120px", height: "100px" }} />
                            <h5>Event</h5>
                            <p className="p-3 text-secondary text-capitalize">Event and workshop to help you keep growing</p>
                        </div>
                        <div className="col-md-3 ">
                            <img src="./bulb.png" style={{ width: "120px", height: "100px" }} />
                            <h5>Give back</h5>
                            <p className="p-3 text-secondary text-capitalize">became a mentor to help other</p>
                        </div>
                        <div className="col-md-3">
                            <img src="./hand.png" style={{ width: "120px", height: "100px" }} />
                            <h5>Support</h5>
                            <p className="p-3 text-secondary text-capitalize">trubleshoot your job chalenge</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}