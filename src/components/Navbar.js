import React from "react";
import {
    BrowserRouter as Router, Switch,
    Route, Link,  NavLink, useRouteMatch, useParams
  } from 'react-router-dom';
  import BackButton from './BackButton';

const Navbar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<BackButton  className="navbar-brand"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item">
      <NavLink to="/about" className="nav-link">About the Artist</NavLink>
      </li>
      
      <li class="nav-item">
      <NavLink to="/albums" className="nav-link">Albums</NavLink>
      </li>
    </ul>
   
  </div>
</nav>)
}

export default Navbar;