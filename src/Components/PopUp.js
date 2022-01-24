import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../AllCss/Popup.css';

export default class PopUp extends Component {
    constructor(props) {
        super(props);
    }


    Popupcross = () => {
        this.props.popup();
    }


    render() {
        return (
            <>


                <div className="popupheading">
                    <div className="p-2 d-flex justify-content-between">
                        <h4 className=""></h4>
                        <apan className="popupcross" onClick={this.Popupcross} >X</apan>
                    </div>
                    <div className="contentpop container p-5">
                    <h5 className="mb-4 col-md-12 col-12 text-primary">SignIn </h5>
                    <label className="mb-1 fs-6 fw-bold text-dark">Phone Number</label>
                    <input type="text" className="NumberPop mb-4 col-12 col-md-12" autoFocus autoComplete="off" autoSave placeholder="Enter Phone number" />
                    {/* <button  className="mb-4 col-md-12 col-12 btn-pop">Click for SignIn</button> */}
                    <div className="text-end ">
                            <Link to="/checkotp"><button className="mb-1 border-0 btn-outline-primary p-1 btn">Submit</button></Link>
                    </div>
                    </div>

                </div>

            </>
        )
    }
}
