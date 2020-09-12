import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

function App() {
  /**
   * This solution works. But it hits server
   */
  let username = "Vivek";
  const route = window.location.pathname;
  if (route === "/about") {
    return <AboutPage />;
  }
  return <HomePage name={username} />;
}

export default App;
