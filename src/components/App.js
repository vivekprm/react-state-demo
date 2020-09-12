import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Example from "./Example";
import CoursePage from "./CoursePage";

function App() {
  /**
   * This solution works. But it hits server
   */
  let username = "Vivek";
  const route = window.location.pathname;
  if (route === "/about") {
    return <AboutPage />;
  } else if (route === "/example") {
    return <Example />;
  } else if (route === "/courses") {
    return <CoursePage />;
  }
  return <HomePage name={username} />;
}

export default App;
