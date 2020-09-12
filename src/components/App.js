import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

function App() {
  /**
   * This solution works. But it hits server
   */
  const route = window.location.pathname;
  if (route === "/about") {
    return <AboutPage />;
  }
  return <HomePage />;
}

export default App;
