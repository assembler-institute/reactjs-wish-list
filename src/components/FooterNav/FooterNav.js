import React, { Component } from "react";

import { NavLink } from "react-router-dom";

// has anchor links for displaying dif pages or views
// eslint-disable-next-line react/prefer-stateless-function
export default class FooterNav extends Component {
  constructor(props) {
    super(props);
    const { appKeys } = this.props;
    this.appKeys = appKeys;
    // eslint-disable-next-line
    console.log("this is taskList", this.props);
  }

  render() {
    return (
      <div className="footer-nav">
        <ul className="d-flex list-unstyled">
          {this.appKeys().map((appKey) => (
            <li
              key={appKey.id}
              className="footer-nav__page-link btn btn-warning"
            >
              <NavLink className="footer-link" to={appKey.path}>
                {appKey.pageDescr}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
