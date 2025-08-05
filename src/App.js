import "./App.css";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="business" country="in" pageSize={5} category="business" />} />
            <Route exact path="/crime" element={<News key="crime" country="in" pageSize={5} category="crime" />} />
            <Route exact path="/domestic" element={<News key="domestic" country="in" pageSize={5} category="domestic" />} />
            <Route exact path="/education" element={<News key="education" country="in" pageSize={5} category="education" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" pageSize={5} category="entertainment" />} />
            <Route exact path="/environment" element={<News key="environment" country="in" pageSize={5} category="environment" />} />
            <Route exact path="/food" element={<News key="food" country="in" pageSize={5} category="food" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
