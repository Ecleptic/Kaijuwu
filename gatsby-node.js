const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const teamTemplate = path.resolve(`src/components/teamDetails.js`)
    graphql(`
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
    `).then(result => {
      if (result.errors) {
        console.error(result.errors)
      }
      result.data.graphCMS.teams.map(team => {
        createPage({
          path: `/Teams/${team.teamName}`,
          component: slash(teamTemplate),
          context: {
            teamName: team.teamName,
            teamIcon: team.teamIcon.url,
            teamRank: team.teamRank,
            teamTitles: team.teamTitles,
            players: team.players,
          },
        })
      })
      resolve()
    })
  })
}
