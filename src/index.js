import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";
import List from "./components/lists/list"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import "./index.css";
import NotFound from "./components/notFound";
import DetailedReport from "./components/detailedReport"


const App = () => {
  return(
      
        <BrowserRouter>
        <Header/>
        <Switch>
        <Route path="/" component={List} exact/>
        <Route path="/currencies/:currencyId" component={DetailedReport}/>
        <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
      
  )
}


ReactDOM.render(<App/>, document.getElementById("root"));