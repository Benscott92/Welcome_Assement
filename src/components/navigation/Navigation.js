import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="Navigation">
      <ul>
        <Link to="/">Home</Link>

        <Link to="/clock">Clock</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/jeopardy">Jeopardy</Link>
      </ul>
    </div>
  );
}

export default Navigation;
