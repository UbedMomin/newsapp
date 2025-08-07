import "./App.css";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
//  pub_983c355781ad42e7a2ef44b739b6a013

export default class App extends Component {
  pageSize = 8;
  apikey = process.env.REACT_APP_NEWS_API_KEY
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News apikey={this.apikey} key="business" country="in" pageSize={this.pageSize} category="business" />} />
            <Route exact path="/crime" element={<News apikey={this.apikey} key="crime" country="in" pageSize={this.pageSize} category="crime" />} />
            <Route exact path="/domestic" element={<News apikey={this.apikey} key="domestic" country="in" pageSize={this.pageSize} category="domestic" />} />
            <Route exact path="/education" element={<News apikey={this.apikey} key="education" country="in" pageSize={this.pageSize} category="education" />} />
            <Route exact path="/entertainment" element={<News apikey={this.apikey} key="entertainment" country="in" pageSize={this.pageSize} category="entertainment" />} />
            <Route exact path="/environment" element={<News apikey={this.apikey} key="environment" country="in" pageSize={this.pageSize} category="environment" />} />
            <Route exact path="/food" element={<News apikey={this.apikey} key="food" country="in" pageSize={this.pageSize} category="food" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
