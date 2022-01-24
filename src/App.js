// import { router } from "json-server";
import "./App.css"
import React, { createContext, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import AboutClint from "./Components/AboutClint";
import Check from "./Components/Check";
import Child from "./Components/Child";
import { Benifits } from "./Components/Footer";
import Header from "./Components/Header";
import Parent from "./Components/Parent";
import PopUp from "./Components/PopUp";
import NodeState from "./Context/Node/NodeState";
import todoList from "./Components/TodoList";



const Home = React.lazy(() => import("./Components/Home"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Clint = React.lazy(() => import("./Components/Clint"));
const Footer = React.lazy(() => import("./Components/Footer"));




const Fname = createContext();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {senn:false}

  }
  TogalePop = ()=>{
    this.setState({senn: !this.state.senn});
    console.log("hello popup");
  }
  componentDidMount(){
    setTimeout(() => {
        this.TogalePop();
    }, 2000);
}


  
  render() {
    return (
      <>
      <h1>hellow akey singh</h1>
        {/* <NodeState>
          <BrowserRouter>
          {this.state.senn ? <PopUp popup={this.TogalePop}/>:null }
            <Header />
            <Switch>
              <Suspense fallback={<h1>loading..</h1>}>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/clint" component={Clint} />
                <Fname.Provider value="hello ravi-sankar">
                  <Route exact path="/clint/:id" component={AboutClint} />
                </Fname.Provider>
                <Benifits />
                <Footer />
              </Suspense>
            </Switch>
            {/* <Route exact path="/parent" component={Parent} />
             <Route exact path="/child" component={Child} /> */}
          {/* </BrowserRouter> */}
        {/* </NodeState>  */}
        <todoList />

      </>
    )
  }
}

export { Fname };
