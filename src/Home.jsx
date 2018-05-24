import React from "react";
import ItemsList from "./ItemsList";

const items = [
  { title: "JobFair" },
  { title: "BEST Summer Course" },
  { title: "General Assembly" }
];

export default () => (
  <div>
    <h1>Welcome Home!</h1>
    <ItemsList items={items} />
  </div>
);
