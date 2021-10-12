import React from 'react';



export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "my name is abhishek"};
    }

    Clicked = (event) => {
        this.props.btnClick(this.state.name);
    }
    render() {
        return (
            <>
                <h1>Child component</h1>
                <button type="button" className="btn btn-primary" onClick={this.Clicked} >Click me</button>
            </>
        )
    }
}