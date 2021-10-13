import React, { useState, useEffect } from "react";
import ArtistCard from "./components/ArtistCard";
import AlbumCard from "./components/AlbumCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import BackButton from "./components/BackButton";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {" "}
            Home page. Choose something
          </Route>

          <Route exact path="/about">
            <ArtistCard />
          </Route>

          <Route exact path="/albums">
            <AlbumCard />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
