/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const teamTemplate = path.resolve(`src/components/teamDetails.js`)

    graphql(`
      query allGetTeam {
        allGetTeam {
          edges {
            node {
              id
              teamName
              teamRank
              teamTitles
              teamIcon {
                url
              }
              players {
                id
                playerName
                playerNumber
                playerHeroes
                playerPosition
                playerTwitch
                playerTwitter
                playerYoutube
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }
      result.data.allGetTeam.edges.map(({ node }) => {
        createPage({
          path: `/Teams/${node.teamName}`,
          component: slash(teamTemplate),
          context: {
            teamName: node.teamName,
            teamIcon: node.teamIcon.url,
            teamRank: node.teamRank,
            teamTitles: node.teamTitles,
            players: node.players
          }
        })
      })
      resolve()
    })
  })
}
