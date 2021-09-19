// import { router } from "json-server";
import React, { createContext, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutClint from "./Components/AboutClint";
import Child from "./Components/Child";
import { Benifits } from "./Components/Footer";
import Header from "./Components/Header";
import Parent from "./Components/Parent";
const Home = React.lazy(() => import("./Components/Home"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Clint = React.lazy(() => import("./Components/Clint"));
const Footer = React.lazy(()=> import("./Components/Footer"));



const Fname = createContext();

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <>

        <BrowserRouter>
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
        </BrowserRouter>
      </>
    )
  }
}

export {Fname};
