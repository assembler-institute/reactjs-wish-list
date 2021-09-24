/* eslint-disable prettier/prettier */
import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home"
import Active from "../../pages/Active"
import Completed from "../../pages/Completed"

export default class MainList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
          <Switch>
            <Route exact path="/">
              <Home {...this.props} />
            </Route>
            <Route exact path="/completed">
              <Completed {...this.props} />
            </Route>
            <Route exact path="/active">
              <Active {...this.props} />
            </Route>
          </Switch>
      </>
    )
  }
}