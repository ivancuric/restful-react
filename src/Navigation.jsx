import React from "react";
import { Link } from "react-router";

const styles = {
  display: "inline-block",
  fontFamily: "sans-serif",
  textAlign: "center"
};
const linkStyles = {
  padding: "10px",
  color: "#6caedd"
};

export default () => (
  <nav style={styles}>
    <Link style={linkStyles} to="/">
      Home
    </Link>
    <Link style={linkStyles} to="/events">
      Events
    </Link>
    <Link style={linkStyles} to="/quotes">
      Quotes
    </Link>
  </nav>
);
