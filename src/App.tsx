import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import MyStore from "./pages/MyStore";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/mystore" component={MyStore}/>
      </Switch>
    </div>
  );
};

export default App;
