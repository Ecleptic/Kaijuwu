import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"

import "./index.scss"

const TemplateWrapper = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query getInfoForHeader {
        getAppInfo {
          ...headerImg
        }
      }
    `}
    render={data => (
      <>
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
        <Header getAppInfo={data.getAppInfo} />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0,
            color: "#fff",
            minHeight: "calc(100vh - 170px)"
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )}
  ></StaticQuery>
)

export default TemplateWrapper

// export const getInfoForHeader = graphql`
//   query getInfoForHeader {
//     getAppInfo {
//       ...headerImg
//     }
//   }
// `
