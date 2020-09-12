import React from "react";

function HomePage(props) {
  return (
    <>
      <h2>Home Page</h2>
      <p>Hello {props.name}</p>
    </>
  );
}

export default HomePage;
