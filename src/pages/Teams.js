import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Teams = ({ data }) => (
  <Layout>
    <div className="teamsPage textShadow">
      <ul>
        {data.graphCMS.teams.map(team => (
          <Link key={team.id} to={`Teams/${team.teamName}`}>
            <img src={team.teamIcon.url} className="logoImg" alt="Team Icon" />
            <h2>{`KAIJUWU ${team.teamName.toUpperCase()}`}</h2>
          </Link>
        ))}
      </ul>
    </div>
  </Layout>
)

export default Teams

export const allTeamsQuery = graphql`
  query allGetTeam {
    graphCMS {
      teams {
        id
        teamName
        teamRank
        teamTitles
        teamIcon {
          url
        }
      }
    }
  }
`
