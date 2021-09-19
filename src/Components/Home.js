import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import '../AllCss/Home.css';
import Bank from "./Bank";

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
               <Slider />
               <Bank />
            </>
        )
    }
}