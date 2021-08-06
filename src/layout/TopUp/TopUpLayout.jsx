import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../../component/Dashboard";
import { Footer } from "../../component/Footer";
import NavBar from "../../component/NavBar";
import { TopUpContent } from "./TopUpContent";
import 


export const TopUpLanding = () => {
  let {path , url} = useRouteMatch();
  return (
    <div className="container">
   <Dashboard/>
        <Switch>
            <Route path={`${path}`} component={TopUpContent} exact></Route>
        </Switch>
        
        <NavBar/>
        <Footer />
        
    </div>
  );
};
