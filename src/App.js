import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//  pub_983c355781ad42e7a2ef44b739b6a013
const App = () => {
  const pageSize = 8;
  const apikey = process.env.REACT_APP_NEWS_API_KEY;

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apikey={apikey}
                key="business"
                country="in"
                pageSize={pageSize}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/crime"
            element={
              <News
                apikey={apikey}
                key="crime"
                country="in"
                pageSize={pageSize}
                category="crime"
              />
            }
          />
          <Route
            exact
            path="/domestic"
            element={
              <News
                apikey={apikey}
                key="domestic"
                country="in"
                pageSize={pageSize}
                category="domestic"
              />
            }
          />
          <Route
            exact
            path="/education"
            element={
              <News
                apikey={apikey}
                key="education"
                country="in"
                pageSize={pageSize}
                category="education"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apikey={apikey}
                key="entertainment"
                country="in"
                pageSize={pageSize}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/environment"
            element={
              <News
                apikey={apikey}
                key="environment"
                country="in"
                pageSize={pageSize}
                category="environment"
              />
            }
          />
          <Route
            exact
            path="/food"
            element={
              <News
                apikey={apikey}
                key="food"
                country="in"
                pageSize={pageSize}
                category="food"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
