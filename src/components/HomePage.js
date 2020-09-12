import React from "react";

/**
 * props are immutable and passed from parent component to child component.
 * And can't change props in child component.
 * @param props
 */
function HomePage(props) {
  return (
    <>
      <h2>Home Page</h2>
      <p>Hello {props.name}</p>
    </>
  );
}

export default HomePage;
