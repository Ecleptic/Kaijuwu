import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import "./index.scss"

const Header = () => (
  <div
    style={{
      marginBottom: "1.45rem"
    }}
  >
    <div
      className="header"
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h4 className="headerIcon" style={{}}>
        <Link
          to="/"
          style={{
            textDecoration: "none"
          }}
        >
          Home
        </Link>
      </h4>
      <h4 style={{}}>
        <Link
          to="/About/"
          style={{
            textDecoration: "none"
          }}
        >
          About
        </Link>
      </h4>
      <h4 style={{}}>
        <Link
          to="/Teams/"
          style={{
            textDecoration: "none"
          }}
        >
          Teams
        </Link>
      </h4>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="KAIJUWU Heavy Industries"
      meta={[
        {
          name: "description",
          content: "Sample"
        },
        {
          name: "keywords",
          content: "sample, something"
        }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
        color:"#fff",
        minHeight:"calc(100vh - 170px)"
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

const Footer = () => (
  <div className="footer">
    <p>
      Designed by <a style={{color:"#ffffff",textDecoration:"none"}} href="#">Tengu</a>, Created by <a style={{color:"#ffffff",textDecoration:"none"}} href="https://camerongreens.com">Ecleptic</a>
    </p>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
