import React from "react";
import Child from "./Child";


export default class Parent extends React.Component {
    constructor(props) {
        super(props);

    }

    ComeData = (data) => {
            console.log(data);
    }

    render() {
        return (
            <>
                <h1>parent component</h1>
                <Child  btnClick={this.ComeData}/>
            </>
        )
    }
}