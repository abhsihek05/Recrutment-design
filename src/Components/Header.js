import React from "react";
import { Link } from 'react-router-dom';
import '../AllCss/Header.css';
import { IoLogoAngular } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";



export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <nav className=" nav-top-header navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <Link className="nav-link  link-hover active" aria-current="page" to=""><h4><IoLogoAngular /></h4></Link> */}
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link  link-hover active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  link-hover" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item services-li">
                                    <Link className="nav-link  link-hover" to="/services">Services</Link>
                                    <div className="services-content">
                                        <ul>
                                            <li><Link to="" className="text-decoration-none link">It Software</Link></li>
                                            <li><Link to="" className="text-decoration-none link">BPO</Link></li>
                                            <li><Link to="" className="text-decoration-none link">Accoutns</Link></li>v
                                            <li><Link to="" className="text-decoration-none link">Sale </Link></li>
                                            <li><Link to="" className="text-decoration-none link">Banking</Link></li>
                                            <li><Link to="" className="text-decoration-none link">Laboure</Link></li>
                                            <li><Link to="" className="text-decoration-none link">Delevery Boy</Link></li>
                                            <li><Link to="" className="text-decoration-none link">Calling</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  link-hover" to="/clint">Clints</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  link-hover" to="/jobs">Jobs</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light bg-danger" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid bg-secondary mobile-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3 d-flex justify-content-start ">
                                <h1 className="bold"><Link to="/" className="text-light"><BsList /></Link></h1>
                            </div>
                            <div className="col-7 d-flex justify-content-center align-items-center">
                                <input id="mobile-search-bar" className="" type="text" placeholder="Search"  />
                                <button type="search" className="mobile-search-btn">search</button>
                            </div>
                            <div className="col-2 ">
                                <h1 className="text-light"><FaCartPlus /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}