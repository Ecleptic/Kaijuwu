import React from 'react'
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
const IndexPage = ({ data }) => (
  <div
    className="aboutDiv textShadow"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      // alignItems: "center",
    }}
  >
    <h1
      style={{
        margin: 'auto',
        color: 'white',
        padding: '1rem',
      }}
    >
      About
    </h1>
    <br />
    <Markdown source={data.getAppInfo.aboutKaijuwu} className="aboutDiv_info"/>
  </div>
)

export default IndexPage

export const getAppInfo = graphql`
  query getAppInfo {
    getAppInfo {
      aboutKaijuwu
    }
  }
`
