import "./App.css";

import React, { Component } from "react";
import NavBar from "./component for news app/NavBar";
import News from "./component for news app/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize= 12;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="/" pageSize={this.pageSize} counrty="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} counrty="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} counrty="in" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} counrty="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} counrty="in" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} counrty="in" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} counrty="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
