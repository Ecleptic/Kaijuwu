import React from 'react'
import Link from 'gatsby-link'

const Teams = ({ data }) => (
  <div>
    <h1>Teams</h1>
    {data.allGetTeam.edges.map(({ node }) => (
      <Link key={node.id} to={`Teams/${node.teamName}`}>
        <img src={node.teamIcon.url} />
        <h2>{node.teamName}</h2>
      </Link>
    ))}
  </div>
)

export default Teams

export const allTeamsQuery = graphql`
  query allGetTeam {
    allGetTeam {
      edges {
        node {
          teamName
          id
          teamIcon {
            url
          }
        }
      }
    }
  }
`
