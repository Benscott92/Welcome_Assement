import React from "react";

function Welcome(props) {
  return (
    <div className="Welcome">
      Welcome, {props.match.params.name || "Baby Yoda"}!{" "}
    </div>
  );
}

export default Welcome;
