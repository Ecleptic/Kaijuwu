import React from 'react'
import Link from 'gatsby-link'

const Header = (props, { siteTitle, data }) => {
  console.log(props)
  return (
    <div
      style={{
        marginBottom: '1.45rem',
      }}
    >
      <div
        className="header textShadow"
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h4 className="headerIcon" style={{}}>
          <Link to="/">
            <img className="headerIconImg" src={''} alt="Team Icon" />
          </Link>
        </h4>
        <div className="headerNavItems">
          {/* <h4 style={{}}>
          <Link
            to="/About/"
          >
            About
          </Link>
        </h4> */}
          <h4 style={{ fontSize: '1.5rem' }}>
            <Link to="/Teams">Teams</Link>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Header

export const getHeaderImage = graphql`
  # query getHeaderImage {
  #   getAppInfo {
  #     aboutKaijuwu
  #     ...headerImg
  #   }
  # }
  fragment headerImg on getAppInfo {
    headerImage {
      url
    }
  }
`
