import React from "react"
import Link from "gatsby-link"

const Teams = ({ data }) => (
  <div className="teamsPage textShadow">
    <ul>
      {data.allGetTeam.edges.map(({ node }) => (
        <Link key={node.id} to={`Teams/${node.teamName}`}>
          <img src={node.teamIcon.url} className="logoImg" alt="Team Icon" />
          <h2>{`KAIJUWU ${node.teamName.toUpperCase()}`}</h2>
        </Link>
      ))}
    </ul>
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
