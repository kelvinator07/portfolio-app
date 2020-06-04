// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Main from "./Main";
// import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <Main />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
//import "assets/scss/paper-dashboard.scss?v=1.1.0";
//import "assets/demo/demo.css";
//import "perfect-scrollbar/css/perfect-scrollbar.css";

import Main from "./Main.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" render={props => <Main {...props} />} />
      <Redirect to="/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
