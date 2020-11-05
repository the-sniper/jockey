import React from "react";
import {
  Route,
  BrowserRouter as Router,
  withRouter,
  Switch 
} from "react-router-dom";
import Header from "./components/organisms/Header";
import ProductListing from "./views/ProductListing";

const Routes = (props) => { 
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path="/" component={ProductListing} />
      </Switch>
    </>
  );
};

export default withRouter(Routes);
