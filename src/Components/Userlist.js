
import React from 'react';


export default class Userlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SingleData: {name:"",username:"",website:"",phone:""},
        }
    }

  componentDidMount(){
      fetch(`http://localhost:3002/products`)
      .then(response => response.json())
      .then(data => {
        this.setState({SingleData:data});
      })
  }

    render() {
        return (
            <>
            <h1>{this.state.SingleData.name}</h1>
            </>
        )
    }
}




