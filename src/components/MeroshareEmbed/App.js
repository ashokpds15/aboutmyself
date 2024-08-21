import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import MeroshareEmbed from "./components/MeroshareEmbed"; // Import your component

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/meroshare" component={MeroshareEmbed} />
        {/* Other Routes */}
      </Switch>
    </Router>
  );
}

export default App;
