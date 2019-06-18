import React from "react"
import { Link } from "gatsby"
import Markdown from "react-markdown"
import Layout from "../components/Layout"
const IndexPage = ({ data }) => (
  <Layout>
    <div
      className="aboutDiv textShadow"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center"
        // alignItems: "center",
      }}
    >
      <h1
        style={{
          margin: "auto",
          color: "white",
          padding: "1rem"
        }}
      >
        About
      </h1>
      <br />
      <Markdown
        source={data.getAppInfo.aboutKaijuwu}
        className="aboutDiv_info"
      />
    </div>
  </Layout>
)

export default IndexPage

export const getAppInfo = graphql`
  query getAppInfo {
    getAppInfo {
      aboutKaijuwu
    }
  }
`
