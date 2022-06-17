import React, { Fragment } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./App.css";

import {
  Navbar,
  CryptoDetails,
  Cryptocurrencies,
  News,
  Exchanges,
  Homepage,
} from "./components";
import { FileJpgOutlined } from "@ant-design/icons";

const App = () => {
  return (
    <Fragment>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>

                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>

                <Route exact path="/crytocurrencies">
                  <Cryptocurrencies />
                </Route>

                <Route exact path="/crytocurrencies/:coinId">
                  <CryptoDetails />
                </Route>

                <Route exact path="/news">
                  <News />
                </Route>
              </Switch>
            </div>
          </Layout>
        </div>
        <div className="footer"></div>
      </div>
    </Fragment>
  );
};

export default App;
