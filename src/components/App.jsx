import React from 'react';
import Main from "./Main";
import Second from "./2ndpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/home" component={Main}/>
      <Route exact path="/session" component={Second}/>
      <Redirect to="/home"/>
    </Switch>
    </BrowserRouter>
  );

}

export default App;
