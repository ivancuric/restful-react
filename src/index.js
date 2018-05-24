import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Home from "./Home";
import restContainer from "./restContainer";
import ItemsList from "./ItemsList";
import registerServiceWorker from './registerServiceWorker';
import App from './App';

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
    <Route
      path="/events"
      component={restContainer(ItemsList, "events")}
    />
    <Route
      path="/quotes"
      component={restContainer(ItemsList, "quotes")}
    />
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
