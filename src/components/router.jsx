import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import InProgress from "../pages/in-progress"
import Genres from "../pages/genres"
import ListeningTo from "../pages/listening-to-right-now";
import Playlists from "../pages/playlists";
/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/in-progress" component={InProgress} />
      <Route path="/genres" component={Genres} />
      <Route path="/playlists" component={Playlists} />
      <Route path="/listening-to" component={ListeningTo} />

    </Switch>
);
