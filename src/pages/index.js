import Layout from "../components/layout"
import SEO from "../components/seo"

import React from "react"
import Markdown from "react-markdown"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div
      className="aboutDiv textShadow"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        // alignItems: "center",
      }}
    >
      <h1
        style={{
          margin: "auto",
          color: "white",
          padding: "1rem",
        }}
      >
        About
      </h1>
      <br />
      <Markdown
        source={data.graphCMS.appInfoes[0].aboutKaijuwu}
        className="aboutDiv_info"
      />
    </div>
  </Layout>
)

export default IndexPage

export const getAppInfo = graphql`
  query getAppInfo {
    graphCMS {
      appInfoes {
        aboutKaijuwu
      }
    }
  }
`
