import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="Navigation">
      <ul>
        <l1>
          <Link to="/">Home</Link>
        </l1>
        <l1>
          <Link to="/clock">Clock</Link>
        </l1>
        <l1>
          <Link to="/contact">Contact</Link>
        </l1>
      </ul>
    </div>
  );
}

export default Navigation;
