import React from "react";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <div className="container footer">
      <div className="content has-text-centered">
        <p>
          <strong>MERN-stack Web Application</strong> by{" "}
          <a href="https://github.com/a-casas/custom-RPG-cards">
            Javier Sánchez
          </a>
        </p>
      </div>
      <div className="">
        <div className="field is-grouped is-grouped-multiline has-addons has-addons-centered">
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-light">node.JS</span>
              <span className="tag is-success">express</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-light">mongo</span>
              <span className="tag is-primary">DB</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-light">Passport</span>
              <span className="tag is-warning">JS</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-light">React</span>
              <span className="tag is-warning">JS</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-light">Axios</span>
              <span className="tag is-danger"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
