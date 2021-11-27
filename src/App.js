import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./pages/home/Home";
import BoxShadow from "./pages/boxShadow/BoxShadow";
import Glassmorphism from "./pages/glassmorphism/Glassmorphism";
import Gradient from "./pages/gradient/Gradient";
import Gradient3 from "./pages/gradient3/Gradient3";

const App = () => {
  const customTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#f8003ef3",
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/box-shadow-generator">
              <BoxShadow />
            </Route>

            <Route path="/glassmorphism-generator">
              <Glassmorphism />
            </Route>

            <Route path="/gradient-generator">
              <Gradient />
            </Route>

            <Route path="/gradient3">
              <Gradient3 />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
